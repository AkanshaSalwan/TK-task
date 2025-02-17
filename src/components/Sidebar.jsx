import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import profilePic from "../assets/profile.png";
import { MdDashboard } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdSubscriptions } from "react-icons/md";
import { BsPersonSquare } from "react-icons/bs";

const Sidebar = ({ setActiveSection }) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    { name: "Job Post Management", icon: <MdPostAdd /> },
    { name: "Revenue Model", icon: <RiMoneyDollarCircleLine /> },
    { name: "Subscription Management", icon: <MdSubscriptions /> },
    { name: "Employer Management", icon: <BsPersonSquare /> },
    { name: "Candidate Management", icon: "🛠️" },
  ];

  const defaultIndex = menuItems.findIndex(
    (item) => item.name === "Job Post Management"
  );
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  useEffect(() => {
    setActiveSection(menuItems[activeIndex].name);
  }, [activeIndex, setActiveSection, menuItems]);

  const itemHeight = 48;
  const itemMargin = 8;
  const totalHeight = itemHeight + itemMargin;

  return (
    <div
      style={{
        width: "250px",
        background: "#52395F",
        color: "white",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "20px",
        position: "fixed",
        zIndex: 100,
      }}
    >
      {/* Logo Section with Brightness */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          position: "relative",
        }}
      >
        {/* Background Glow Effect */}
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "280px",
            height: "140px",
            background:
              "radial-gradient(circle, white 0%, rgba(255, 255, 255, 0) 80%)",
            borderRadius: "50%",
            filter: "blur(25px)",
          }}
        ></div>
        {/* Logo */}
        <img
          src={logo}
          alt="TechnoHire"
          style={{
            width: "240px",
            height: "100px",
            position: "relative",
            zIndex: "2",
          }}
        />
      </div>

      {/* Navigation List with Moving Slider */}
      <div style={{ position: "relative", marginTop: "30px" }}>
        {/* Slider */}
        <div
          style={{
            position: "absolute",
            left: 0,
            width: "100%",
            height: `${itemHeight}px`,
            top: `${activeIndex * totalHeight}px`,
            background: "rgba(168,85,247,0.3)",
            borderRadius: "8px",
            transition: "top 0.3s",
            zIndex: 0,
          }}
        ></div>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {menuItems.map((item, index) => (
            <li
              key={item.name}
              onClick={() => {
                setActiveSection(item.name);
                setActiveIndex(index);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 12px",
                cursor: "pointer",
                borderRadius: "8px",
                marginBottom: `${itemMargin}px`,
                color: "white",
                fontSize: "16px",
                gap: "12px",
                height: `${itemHeight}px`,
                background: activeIndex === index ? "#a855f7" : "transparent",
                transition: "background 0.3s",
                position: "relative",
                zIndex: 2,
              }}
            >
              {item.icon} {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        {/* User Info */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={profilePic}
            alt="User"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
          <div>
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>
              TechnoHire
            </span>
            <span
              style={{
                display: "block",
                fontSize: "12px",
                background: "#FFD700",
                borderRadius: "10px",
                padding: "2px 5px",
                color: "#50296E",
                fontWeight: "bold",
              }}
            >
              Admin
            </span>
          </div>
        </div>
        {/* Log Out Button */}
        <button
          style={{
            background: "transparent",
            border: "none",
            color: "red",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
