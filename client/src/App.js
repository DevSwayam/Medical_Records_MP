import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import { useState, useEffect } from "react";
import DoctorDashboard from "./pages/DoctorDashboard";


const { ethers } = require("ethers");
const {
  contractAbi,
  contractAddress,
} = require("./contract_Information/contract_Config");

function App() {
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [signer, setSigner] = useState(null);
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async () => {
      if (provider) {
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setSigner(signer);
        const address = await signer.getAddress();
        setAccount(address);
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setContract(contract);
        setProvider(provider);
        console.log(account);
      } else {
        alert("Wallet is not present");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <div className=" p-6">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route
          path="/admindashboard"
          element={
            <AdminDashboard
              signer={signer}
              account={account}
              provider={provider}
              contract={contract}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
