import React, { useState } from "react";

function AllocateDrugs({ contract, currentUser }) {
  const [patientAddress, setPatientAddress] = useState("");
  const [drugs, setDrugs] = useState(["", "", "", "", ""]);
  const [allocationAmounts, setAllocationAmounts] = useState([0, 0, 0, 0, 0]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAllocateDrugs = async () => {
    try {
      // Remove drugs with zero supply
      const validDrugs = drugs.filter((_, index) => allocationAmounts[index] > 0);
      const validAmounts = allocationAmounts.filter((amount) => amount > 0);

      if (validDrugs.length === 0) {
        setErrorMessage("No valid drugs to allocate.");
        return;
      }

      const transaction = await contract.allocateDrugs(
        patientAddress,
        validDrugs,
        validAmounts,
        { from: currentUser }
      );

      await transaction.wait();
      setErrorMessage("");
      // Clear the form fields after a successful transaction
      setPatientAddress("");
      setDrugs(["", "", "", "", ""]);
      setAllocationAmounts([0, 0, 0, 0, 0]);
    } catch (error) {
      setErrorMessage("Transaction failed. Check the input and try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <p>Allocate Drugs</p>
      <form>
        <input
          type="text"
          placeholder="Patient Address"
          value={patientAddress}
          onChange={(e) => setPatientAddress(e.target.value)}
        />
        {drugs.map((drug, index) => (
          <div key={index} className="drug-input">
            <input
              type="text"
              placeholder={`Drug ${index + 1}`}
              value={drug}
              onChange={(e) => {
                const updatedDrugs = [...drugs];
                updatedDrugs[index] = e.target.value;
                setDrugs(updatedDrugs);
              }}
            />
            <input
              type="number"
              placeholder="Allocation Amount"
              value={allocationAmounts[index]}
              onChange={(e) => {
                const updatedAmounts = [...allocationAmounts];
                updatedAmounts[index] = parseInt(e.target.value);
                setAllocationAmounts(updatedAmounts);
              }}
            />
          </div>
        ))}
        <button type="button" onClick={handleAllocateDrugs}>
          Allocate Drugs
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default AllocateDrugs;
