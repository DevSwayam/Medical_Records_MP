import React, { useState } from "react";

function GetDrug({ contract }) {
  const [getSupplyCountForm, setGetSupplyCountForm] = useState({
    drugName: "",
    supplyCount: "",
    errorMessage: "",
  });

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

  const { drugName, supplyCount, errorMessage } = getSupplyCountForm;

  return (
    <div className="w-full md:w-1/2 mt-6 h-full border rounded-lg p-5 ">
      <form>
        <input
          type="text"
          placeholder="Drug Name"
          value={drugName}
          onChange={(e) =>
            setGetSupplyCountForm({
              ...getSupplyCountForm,
              drugName: e.target.value,
            })
          }
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleGetSupplyCount}
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Get Supply Count
        </button>
      </form>
      {supplyCount && (
        <p>
          Supply Count for {drugName}: {supplyCount}
        </p>
      )}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default GetDrug;
