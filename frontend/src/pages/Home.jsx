import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8fafc" }}>
      {/* NAVBAR */}
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
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#4f46e5" }}>
          Roomin
        </h1>

        <div style={{ display: "flex", gap: "15px" }}>
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "8px 18px",
              background: "transparent",
              border: "1px solid #4f46e5",
              borderRadius: "6px",
              color: "#4f46e5",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            style={{
              padding: "8px 18px",
              background: "#4f46e5",
              border: "none",
              borderRadius: "6px",
              color: "white",
              cursor: "pointer",
              fontSize: "15px",
            }}
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px 60px",
          background: "#eef2ff",
        }}
      >
        <div style={{ maxWidth: "500px" }}>
          <h2
            style={{
              fontSize: "46px",
              fontWeight: "800",
              color: "#1e293b",
              lineHeight: "1.2",
            }}
          >
            Find Your Perfect Room. Anytime, Anywhere.
          </h2>
          <p
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "#475569",
              lineHeight: "1.6",
            }}
          >
            Roomin helps you discover, compare and book rooms effortlessly.  
            Whether you're a student, traveller, or tenant — we’ve got you covered.
          </p>

          <button
            style={{
              marginTop: "30px",
              padding: "14px 28px",
              background: "#4f46e5",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Explore Rooms
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Room"
          style={{
            width: "420px",
            height: "280px",
            borderRadius: "12px",
            objectFit: "cover",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
          }}
        />
      </section>

      {/* FEATURES */}
      <section style={{ padding: "60px 40px", background: "#ffffff" }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "32px",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "50px",
          }}
        >
          Why Choose Roomin?
        </h3>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Verified Rooms",
              text: "We ensure every listing is trusted and verified.",
            },
            {
              title: "Instant Booking",
              text: "Book your room with a single click.",
            },
            {
              title: "Smart Recommendations",
              text: "We suggest rooms based on your needs.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                width: "300px",
                background: "#f1f5f9",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
              }}
            >
              <h4
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "10px",
                  color: "#334155",
                }}
              >
                {feature.title}
              </h4>
              <p style={{ color: "#475569" }}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#1e293b",
          color: "white",
          textAlign: "center",
          padding: "25px",
          marginTop: "40px",
        }}
      >
        © {new Date().getFullYear()} Roomin • All rights reserved
      </footer>
    </div>
  );
};

export default Home;