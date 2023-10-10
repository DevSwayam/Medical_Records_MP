import React, { useState } from "react";

function AddDrugForm({ signer, contract }) {
  const [addDrugForm, setAddDrugForm] = useState({
    drugName: "",
    supplyCount: "",
    errorMessage: "",
  });

  const [getSupplyCountForm, setGetSupplyCountForm] = useState({
    drugName: "",
    supplyCount: "",
    errorMessage: "",
  });

  const handleAddDrug = async () => {
    try {
      const transaction = await contract.addDrug(addDrugForm.drugName, addDrugForm.supplyCount, {
        from: signer.getAddress(),
      });
      await transaction.wait();
      // Reset form fields after successful transaction
      setAddDrugForm({
        drugName: "",
        supplyCount: "",
        errorMessage: "",
      });
    } catch (error) {
      setAddDrugForm({
        ...addDrugForm,
        errorMessage: "Transaction failed. Check the input and try again.",
      });
      console.error(error);
    }
  };

  const handleGetSupplyCount = async () => {
    try {
      const result = await contract.drugs(getSupplyCountForm.drugName);
      setGetSupplyCountForm({
        ...getSupplyCountForm,
        supplyCount: result.toString(),
        errorMessage: "",
      });
    } catch (error) {
      setGetSupplyCountForm({
        ...getSupplyCountForm,
        supplyCount: "",
        errorMessage: "Drug not found or an error occurred.",
      });
      console.error(error);
    }
  };

  const { drugName: addDrugName, supplyCount: addSupplyCount, errorMessage: addErrorMessage } = addDrugForm;
  const { drugName: getDrugName, supplyCount: getSupplyCount, errorMessage: getErrorMessage } = getSupplyCountForm;

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Drug Name"
          value={addDrugName}
          onChange={(e) => setAddDrugForm({ ...addDrugForm, drugName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Supply Count"
          value={addSupplyCount}
          onChange={(e) => setAddDrugForm({ ...addDrugForm, supplyCount: e.target.value })}
        />
        <button type="button" onClick={handleAddDrug}>
          Add Drug
        </button>
      </form>
      {addErrorMessage && <p className="text-red-500">{addErrorMessage}</p>}
      <form>
        <input
          type="text"
          placeholder="Drug Name"
          value={getDrugName}
          onChange={(e) => setGetSupplyCountForm({ ...getSupplyCountForm, drugName: e.target.value })}
        />
        <button type="button" onClick={handleGetSupplyCount}>
          Get Supply Count
        </button>
      </form>
      {getSupplyCount && (
        <p>
          Supply Count for {getDrugName}: {getSupplyCount}
        </p>
      )}
      {getErrorMessage && <p className="text-red-500">{getErrorMessage}</p>}
    </div>
  );
}

export default AddDrugForm;
