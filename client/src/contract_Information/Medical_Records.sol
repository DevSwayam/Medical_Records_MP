// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicalSupplyChain {
    address public admin;

    struct Doctor {
        string id;
        string name;
        string houseAddr;
        string cityAddr;
        string stateAddr;
        string postalAddr;
        string countryAddr;
        string phone;
        string email;
        uint256 license_No;
        string qualification;
    }

    struct Patient {
        string id;
        string name;
        string houseAddr;
        string cityAddr;
        string stateAddr;
        string postalAddr;
        string countryAddr;
        string phone;
        string email;
        string runningDisease1;
        string runningDisease2;
        string symptoms;
        string medication;
        string additionalInfo;
    }

    struct Drug {
        string name;
        uint256 supplyCount;
    }

    struct DrugAllocation {
        address patientAddress;
        string patientName;
        string drugName;
        uint256 allocationAmount;
    }

    struct Pharmacy {
        address pharmacyAddress;
        string pharmacyName;
    }

    struct Distributor {
        address distributorAddress;
        string distributorName;
    }

    struct Supplier {
        address supplierAddress;
        string supplierName;
    }

    mapping(address => Doctor) public doctors;
    mapping(address => Patient) public patients;
    mapping(string => Drug) public drugs;
    mapping(address => Pharmacy) public pharmacies;
    mapping(address => Distributor) public distributors;
    mapping(address => Supplier) public suppliers;
    DrugAllocation[] public drugAllocations;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can call this function");
        _;
    }

    modifier onlyDoctor() {
        require(
            bytes(doctors[msg.sender].id).length > 0,
            "Only doctor can call this function"
        );
        _;
    }

    function addDoctor(
        address _doctorAddress,
        string memory _id,
        string memory _name,
        string memory _houseAddr,
        string memory _cityAddr,
        string memory _stateAddr,
        string memory _postalAddr,
        string memory _countryAddr,
        string memory _phone,
        string memory _email,
        uint256 _licenseNo,
        string memory _qualification
    ) public onlyAdmin {
        doctors[_doctorAddress] = Doctor(
            _id,
            _name,
            _houseAddr,
            _cityAddr,
            _stateAddr,
            _postalAddr,
            _countryAddr,
            _phone,
            _email,
            _licenseNo,
            _qualification
        );
    }

    function addPatient(
        address _patientAddress,
        string memory _id,
        string memory _name,
        string memory _houseAddr,
        string memory _cityAddr,
        string memory _stateAddr,
        string memory _postalAddr,
        string memory _countryAddr,
        string memory _phone,
        string memory _email,
        string memory _runningDisease1,
        string memory _runningDisease2,
        string memory _symptoms,
        string memory _medication,
        string memory _additionalInfo
    ) public {
        require(bytes(doctors[msg.sender].id).length > 0||msg.sender == admin,"You cannot add patient");
        patients[_patientAddress] = Patient(
            _id,
            _name,
            _houseAddr,
            _cityAddr,
            _stateAddr,
            _postalAddr,
            _countryAddr,
            _phone,
            _email,
            _runningDisease1,
            _runningDisease2,
            _symptoms,
            _medication,
            _additionalInfo
        );
    }

    function allocateDrugs(
        address _patientAddress,
        string[] memory _drugs,
        uint256[] memory _allocationAmounts
    ) public onlyDoctor {
        require(
            _drugs.length == _allocationAmounts.length,
            "Arrays must have the same length"
        );

        require(
        bytes(patients[_patientAddress].id).length > 0,
        "Patient does not exist"
    );
        

        for (uint256 i = 0; i < _drugs.length; i++) {
            require(
                drugs[_drugs[i]].supplyCount >= _allocationAmounts[i],
                "Not enough supply for the drug"
            );
            drugAllocations.push(
                DrugAllocation(
                    _patientAddress,
                    patients[_patientAddress].name,
                    _drugs[i],
                    _allocationAmounts[i]
                )
            );
            drugs[_drugs[i]].supplyCount -= _allocationAmounts[i];
        }
    }

    function addPharmacy(address _pharmacyAddress,string memory _name) public onlyAdmin {
        pharmacies[_pharmacyAddress] = Pharmacy(_pharmacyAddress,_name);
    }

    function addDistributor(address _distributorAddress, string memory _name) public onlyAdmin {
        distributors[_distributorAddress] = Distributor(_distributorAddress, _name);
    }

    function addSupplier(address _supplierAddress, string memory _name) public onlyAdmin {
        suppliers[_supplierAddress] = Supplier(_supplierAddress,_name);
    }

    function addDrug(string memory _drugName, uint256 _supplyCount) public {
        require(
            msg.sender == admin ||
                suppliers[msg.sender].supplierAddress != address(0),
            "Only admin or supplier can call this function"
        );
        drugs[_drugName] = Drug(_drugName, _supplyCount);
    }

    function getDrugAllocationsCount() public view returns (uint256) {
        return drugAllocations.length;
    }

    function getDrugAllocation(uint256 _index)
        public
        view
        returns (
            address,
            string memory,
            uint256
        )
    {
        require(_index < drugAllocations.length, "Index out of bounds");
        DrugAllocation memory allocation = drugAllocations[_index];
        return (
            allocation.patientAddress,
            allocation.drugName,
            allocation.allocationAmount
        );
    }

    
}
