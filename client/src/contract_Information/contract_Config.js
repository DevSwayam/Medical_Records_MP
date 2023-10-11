const contractAbi= [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_distributorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addDistributor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_doctorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_houseAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cityAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_stateAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_postalAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_countryAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_licenseNo",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_qualification",
				"type": "string"
			}
		],
		"name": "addDoctor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_drugName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_supplyCount",
				"type": "uint256"
			}
		],
		"name": "addDrug",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_houseAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cityAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_stateAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_postalAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_countryAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_runningDisease1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_runningDisease2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symptoms",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_medication",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_additionalInfo",
				"type": "string"
			}
		],
		"name": "addPatient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_pharmacyAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addPharmacy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_supplierAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addSupplier",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_patientAddress",
				"type": "address"
			},
			{
				"internalType": "string[]",
				"name": "_drugs",
				"type": "string[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_allocationAmounts",
				"type": "uint256[]"
			}
		],
		"name": "allocateDrugs",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "distributors",
		"outputs": [
			{
				"internalType": "address",
				"name": "distributorAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "distributorName",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "doctors",
		"outputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "houseAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cityAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "stateAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "postalAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "countryAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "license_No",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "drugAllocations",
		"outputs": [
			{
				"internalType": "address",
				"name": "patientAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "patientName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "drugName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "allocationAmount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "drugs",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "supplyCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getDrugAllocation",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDrugAllocationsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "patients",
		"outputs": [
			{
				"internalType": "string",
				"name": "id",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "houseAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "cityAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "stateAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "postalAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "countryAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phone",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "runningDisease1",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "runningDisease2",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symptoms",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "medication",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "additionalInfo",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "pharmacies",
		"outputs": [
			{
				"internalType": "address",
				"name": "pharmacyAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "pharmacyName",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "suppliers",
		"outputs": [
			{
				"internalType": "address",
				"name": "supplierAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "supplierName",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractAddress = "0x31f94E049140181d98DA6F751A66bD23e1C5320c"

module.exports={contractAbi,contractAddress};