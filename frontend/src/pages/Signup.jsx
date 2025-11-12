import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 1. IMPORT useNavigate
import { useAuth } from "../AuthContext";     // 2. IMPORT useAuth

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate(); // 3. GET THE navigate FUNCTION
  const { login } = useAuth();    // 4. GET THE login FUNCTION

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields required!");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        password,
      });

      console.log("Signup Response:", res.data);

      alert("Signup successful!");
      

      login(res.data.token,res.data.user);
      

      navigate("/");

    } catch (err) {
      console.log(err);

      if (err.response && err.response.status === 409) {
        alert("Email already in use");
      } else {
        alert("Signup failed!");
      }
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "#f0f0f0"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "8px",
          width: "350px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Signup</h2>

        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={btnStyle}>Signup</button>

        <a href="/login" style={{ marginTop: "10px", display: "block" }}>
          Already have an account? Login
        </a>
      </form>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "5px"
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  background: "black",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};