import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import profilePic from "../assets/profile.png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div style={styles.header}>
      
      <input type="text" placeholder=" Search Anything" style={styles.search}  />
  
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <BiMessageDetail style={{ fontSize: "24px", color: "#555" }} />

        <div style={{ position: "relative", display: "inline-block" }}>
          <FaBell style={{ fontSize: "24px", color: "#555" }} />
          <span
            style={{
              position: "absolute",
              top: "-15px",
              right: "-10px",
              background: "red",
              color: "white",
              fontSize: "10px",
              fontWeight: "bold",
              borderRadius: "50%",
              padding: "2px 3px",
              minWidth: "16px",
              height: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            2
          </span>
        </div>

        <MdDarkMode style={{ fontSize: "24px", color: "#555" }} />

        <img
          src={profilePic}
          alt="User"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "2px solid white",
            background: "#D9D9D9"
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  header: {
    position: "sticky",
    top: 0,
    left: "90%",
    right: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px",
    background: "#fff",
    borderBottom: "1px solid #ddd",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "1361px",
    width: "100%",
  },
  search: {
    width: "50%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  icons: {
    fontSize: "18px",
    display: "flex",
    gap: "15px",
  },
};

export default Header;
