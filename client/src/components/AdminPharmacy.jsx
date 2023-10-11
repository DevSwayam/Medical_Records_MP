import React, { useState } from 'react';

function AdminPharmacy({ contract }) {
  const [pharmacyAddress, setPharmacyAddress] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddPharmacy = async () => {
    try {
      const transaction = await contract.addPharmacy(pharmacyAddress, name);

      await transaction.wait();
      setErrorMessage('');
      // Clear the form fields after a successful transaction
      setPharmacyAddress('');
      setName('');
    } catch (error) {
      setErrorMessage('Transaction failed. Check the input and try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <p>Add Pharmacy</p>
      <form>
        <input
          type="text"
          placeholder="Pharmacy Address"
          value={pharmacyAddress}
          onChange={(e) => setPharmacyAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={handleAddPharmacy}>
          Add Pharmacy
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default AdminPharmacy;
