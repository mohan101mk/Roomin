import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; 

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#4f46e5",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Roomin
      </h1>

      <div style={{ display: "flex", gap: "15px" }}>
        {isAuthenticated ? (

          <div style={{ position: "relative" }}>
            

            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={profileCircleStyle} 
            >

              {user && user.name ? user.name[0].toUpperCase() : '?'}
            </button>


            {dropdownOpen && (
              <div style={dropdownStyle}>
                <div style={dropdownInfoStyle}>
                  <strong>{user.name}</strong>
                  <em style={{ fontSize: '14px', color: '#555' }}>{user.email}</em>
                </div>
                <button
                  onClick={handleLogout}
                  style={logoutBtnStyle}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (

          <>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
            <Link to="/signup" style={linkStyleActive}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

const profileCircleStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%', 
  background: '#4f46e5',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
};



const linkStyle = {
  padding: "8px 18px",
  background: "transparent",
  border: "1px solid #4f46e5",
  borderRadius: "6px",
  color: "#4f46e5",
  cursor: "pointer",
  fontSize: "15px",
  textDecoration: "none",
};

const linkStyleActive = {
  ...linkStyle,
  background: "#4f46e5",
  color: "white",
  border: "none",
};

const dropdownStyle = {
  position: "absolute",
  top: "50px", 
  right: 0,
  background: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  zIndex: 110,
  width: "220px",
  overflow: "hidden",
};

const dropdownInfoStyle = {
  padding: "15px",
  borderBottom: "1px solid #eee",
  display: "flex",
  flexDirection: "column",
  gap: "4px"
};

const logoutBtnStyle = {
  width: "100%",
  padding: "12px 15px",
  background: "transparent",
  border: "none",
  color: "#d9534f",
  cursor: "pointer",
  fontSize: "15px",
  textAlign: "left",
};

export default Navbar;