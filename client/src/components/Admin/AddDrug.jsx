import React, { useState } from "react";
import GetDrug from "./GetDrug";

function AddDrugForm({ signer, contract }) {
  const [addDrugForm, setAddDrugForm] = useState({
    drugName: "",
    supplyCount: "",
    errorMessage: "",
  });

  const handleAddDrug = async () => {
    try {
      const transaction = await contract.addDrug(
        addDrugForm.drugName,
        addDrugForm.supplyCount,
        {
          from: signer.getAddress(),
        }
      );
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

  const { drugName, supplyCount, errorMessage } = addDrugForm;

  return (
    <div className="w-full flex flex-col items-center justify-center h-full rounded-lg p-5 ">
      <div className=" md:w-[50%] border p-5 rounded-lg">
        <form className="">
          <p className=" font-semibold">Drug Info.:</p>
          <input
            type="text"
            placeholder="Drug Name"
            value={drugName}
            onChange={(e) =>
              setAddDrugForm({ ...addDrugForm, drugName: e.target.value })
            }
            className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
          />
          <input
            type="number"
            placeholder="Supply Count"
            value={supplyCount}
            onChange={(e) =>
              setAddDrugForm({ ...addDrugForm, supplyCount: e.target.value })
            }
            className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none"
          />
          <button
            type="button"
            onClick={handleAddDrug}
            className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
          >
            Add Drug
          </button>
        </form>
      </div>
      <GetDrug contract={contract} />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default AddDrugForm;
