import React from "react";
import { FaSearch } from "react-icons/fa";
import Pagination from "./Pagination";
import { RiDeleteBin6Line } from "react-icons/ri";

const EmployeeDetails = () => {
  return (
    <div style={styles.container}>
      <h4 style={styles.heading1}>Hello! TechoHire</h4>
      <h2 style={styles.heading}>Employee Details</h2>

      <div style={styles.jobCard}>
        <div style={styles.applicantsContainer}>
          {/* Search Bar */}
          <div style={styles.searchBar}>
            <div style={styles.countrySelector}>
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                style={styles.flagIcon}
              />
              <span style={styles.countryText}>India</span>
              <span style={styles.dropdownArrow}>▼</span>
            </div>
            <div style={styles.searchInputContainer}>
              <FaSearch style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search for Employees"
                style={styles.searchInput}
              />
            </div>
          </div>

          {/* Employee Details Table */}
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Employee Name</th>
                <th style={styles.th}>Role</th>
                <th style={styles.th}>Company</th>
                <th style={styles.th}>Mobile</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "#527269",
                  name: "Cameron",
                  role: "Human Resource",
                  company: "Technokrate",
                  mobile: "+91 12345 67890",
                  img: "https://randomuser.me/api/portraits/men/10.jpg",
                },
                {
                  id: "#748526",
                  name: "Dustin",
                  role: "Front End Developer",
                  company: "Google",
                  mobile: "+91 12345 67890",
                  img: "https://randomuser.me/api/portraits/men/20.jpg",
                },
                {
                  id: "#748526",
                  name: "Sarah",
                  role: "UI/UX Designer",
                  company: "Instagram",
                  mobile: "+91 12345 67890",
                  img: "https://randomuser.me/api/portraits/women/30.jpg",
                },
                {
                  id: "#452698",
                  name: "Aarav",
                  role: "Product Manager",
                  company: "Intel",
                  mobile: "+91 12345 67890",
                  img: "https://randomuser.me/api/portraits/men/40.jpg",
                },
                {
                  id: "#254862",
                  name: "Sophia",
                  role: "Data Scientist",
                  company: "IBM",
                  mobile: "+91 12345 67890",
                  img: "https://randomuser.me/api/portraits/women/50.jpg",
                },
                {
                  id: "#365214",
                  name: "Rohan",
                  role: "Software Engineer",
                  company: "Nvidia",
                  mobile: "+91 12345 67890",
                  img: "https://randomuser.me/api/portraits/men/60.jpg",
                },
                {
                  id: "#785212",
                  name: "Lila",
                  role: "Operations Manager",
                  company: "Adobe",
                  mobile: "+91 12345 67890",
                  img: "https://randomuser.me/api/portraits/women/70.jpg",
                },
                {
                  id: "#365896",
                  name: "Amelia",
                  role: "Content Strategist",
                  company: "Figma",
                  mobile: "+91 12345 67890",
                  img: "https://randomuser.me/api/portraits/women/80.jpg",
                },
              ].map((employee, index) => (
                <tr key={index} style={styles.row}>
                  <td style={styles.td}>{employee.id}</td>
                  <td style={{ ...styles.td, ...styles.employeeCell }}>
                    <img src={employee.img} alt="avatar" style={styles.avatar} />
                    {employee.name}
                  </td>
                  <td style={styles.td}>{employee.role}</td>
                  <td style={styles.td}>{employee.company}</td>
                  <td style={styles.td}>{employee.mobile}</td>
                  <td style={styles.td}>
                    <span style={styles.actionIcons}>✏️</span>
                    <span style={styles.actionIcons}><RiDeleteBin6Line /></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Component */}
      <Pagination totalPages={5} />

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>Copyright © 2024 TechnoHire. All rights reserved.</p>
      </footer>
    </div>
  );
};

// ✅ Styles
const styles = {
  container: {
    padding: "40px 80px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "15px",
  },
  heading1: {
    fontSize: "22px",
    fontWeight: "lighter",
    color: "#333",
    marginBottom: "15px",
  },
  jobCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    width: "1200px",
    minHeight: "800px",
    overflow: "hidden",
  },
  applicantsContainer: {
    marginTop: "20px",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff",
    width: "100%",
    maxWidth: "600px",
    marginBottom: "20px",
  },
  countrySelector: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    cursor: "pointer",
  },
  flagIcon: {
    width: "20px",
    height: "15px",
  },
  countryText: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  },
  searchInputContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  searchIcon: {
    color: "#a855f7",
    fontSize: "14px",
    marginRight: "8px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    fontSize: "14px",
    width: "100%",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    background: "#f0f0f0",
    padding: "12px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
  },
  row: {
    borderBottom: "1px solid #ddd",
  },
  employeeCell: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  avatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
  actionIcons: {
    cursor: "pointer",
    margin: "0 5px",
    fontSize: "18px",
  },
  footer: {
    textAlign: "left",
    marginTop: "20px",
    fontSize: "12px",
    color: "#666",
  },
};

export default EmployeeDetails;
