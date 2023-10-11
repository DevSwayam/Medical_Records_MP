import React, { useState } from "react";
import AddDoctor from "./AddDoctor.jsx";

function AdminDoctor({ contract }) {
  const [doctorAddress, setDoctorAddress] = useState("");
  const [doctorDetails, setDoctorDetails] = useState({
    name: "",
    houseAddr: "",
    cityAddr: "",
    stateAddr: "",
    postalAddr: "",
    countryAddr: "",
    phone: "",
    email: "",
    licenseNo: 0,
    qualification: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetDoctorDetails = async () => {
    try {
      const result = await contract.doctors(doctorAddress);
      console.log(result);
      // Handle the ENS error
      if (result && result[8]) {
        const licenseNo = result[8].toNumber ? result[8].toNumber() : result[8];
        const formattedDetails = {
          name: result[0],
          houseAddr: result[1],
          cityAddr: result[2],
          stateAddr: result[3],
          postalAddr: result[4],
          countryAddr: result[5],
          phone: result[6],
          email: result[7],
          licenseNo: licenseNo,
          qualification: result[9],
        };
        setDoctorDetails(formattedDetails);
        setErrorMessage("");
      } else {
        setDoctorDetails({
          name: "",
          houseAddr: "",
          cityAddr: "",
          stateAddr: "",
          postalAddr: "",
          countryAddr: "",
          phone: "",
          email: "",
          licenseNo: 0,
          qualification: "",
        });
        setErrorMessage("Doctor not found or an error occurred.");
      }
    } catch (error) {
      setDoctorDetails({
        name: "",
        houseAddr: "",
        cityAddr: "",
        stateAddr: "",
        postalAddr: "",
        countryAddr: "",
        phone: "",
        email: "",
        licenseNo: 0,
        qualification: "",
      });
      setErrorMessage("Doctor not found or an error occurred.");
      console.error(error);
    }
  };

  return (
    <div className="md:w-1/2 h-full border rounded-lg p-5 ">
      <p>Get Doctor details</p>
      <form className="">
        <input
          type="text"
          placeholder="Doctor Address"
          value={doctorAddress}
          onChange={(e) => setDoctorAddress(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleGetDoctorDetails}
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Get Doctor Details
        </button>
      </form>
      {doctorDetails.name && (
        <div>
          <p>Name: {doctorDetails.name}</p>
          <p>House Address: {doctorDetails.houseAddr}</p>
          <p>City Address: {doctorDetails.cityAddr}</p>
          <p>State Address: {doctorDetails.stateAddr}</p>
          <p>Postal Address: {doctorDetails.postalAddr}</p>
          <p>Country Address: {doctorDetails.countryAddr}</p>
          <p>Phone: {doctorDetails.phone}</p>
          <p>Email: {doctorDetails.email}</p>
          <p>License Number: {doctorDetails.licenseNo}</p>
          <p>Qualification: {doctorDetails.qualification}</p>
        </div>
      )}
      <AddDoctor contract={contract} />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default AdminDoctor;
