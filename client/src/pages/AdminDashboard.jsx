import React from "react";
import AdminDoctor from "../components/AdminDoctor";
import AdminPatient from "../components/AdminPatient";
import AdminDrug from "../components/AdminDrug";
import AdminDistributor from "../components/AdminDistributor";
import AdminPharmacy from "../components/AdminPharmacy";
import AdminSupplier from "../components/AdminSupplier";

const AdminDashboard = ({ signer, account, provider, contract }) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-6">
      <p className=" text-xl font-semibold">AdminDashboard</p>
      <AdminDoctor
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AdminPatient
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AdminDrug
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AdminDistributor
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AdminPharmacy
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AdminSupplier
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
    </div>
  );
};

export default AdminDashboard;
