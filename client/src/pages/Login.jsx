import React, { useState } from "react";
import axios from "axios";

const DoctorLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    publicAddress: "", // Add publicAddress field
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/login", formData);
  
      if (response.data.success) {
        // Login was successful, you can navigate to the doctor's dashboard here
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <input
        type="text"
        name="publicAddress"
        value={formData.publicAddress}
        onChange={handleChange}
        placeholder="Public Address"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default DoctorLogin;
