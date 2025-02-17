import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "130%",
      padding: "90px",
    },
    title: {
      fontSize: "24px",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    tableContainer: {
      background: "#fff",
      padding: "20px",
      borderRadius: "15px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      width: "90%",
      overflowX: "auto",
    },
    employeeRow: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
      alignItems: "center",
      padding: "15px",
      borderBottom: "1px solid #ddd",
    },
    employeeInfo: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    avatar: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    name: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#333",
      margin: "0",
    },
    role: {
      fontSize: "14px",
      color: "#767F8C",
      margin: "0",
    },
    company: {
      fontSize: "14px",
      fontWeight: "lighter",
      color: "#666666",
      margin: "0",
    },
    resume: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#555",
      fontSize: "14px",
      cursor: "pointer",
    },
    button: {
      background: "#CBEBD2",
      color: "#0BA02C",
      padding: "8px 7px",
      borderRadius: "3px",
      border: "2px solid transparent",
      cursor: "pointer",
      textAlign: "center",
      transition: "border 0.3s ease",
      outline: "none",
    },
    buttonHover: {
      border: "2px solid #0BA02C",
    },
    profileButton: {
      background: "#DCBDED",
      color: "#7900BA",
      padding: "8px 7px",
      borderRadius: "3px",
      border: "2px solid transparent",
      cursor: "pointer",
      textAlign: "center",
      marginLeft: "10px",
      transition: "border 0.3s ease",
      outline: "none",
    },
    profileButtonHover: {
      border: "2px solid #7900BA",
    },
    footer: {
      textAlign: "center",
      marginTop: "20px",
      color: "#666",
      fontSize: "14px",
    },
  };

  const employees = [
    {
      name: "Leonardo",
      role: "Product Manager",
      company: "Google",
      img: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Marcus",
      role: "Business Management",
      company: "IBM",
      img: "https://randomuser.me/api/portraits/men/20.jpg",
    },
    {
      name: "Amara",
      role: "Human Resource",
      company: "Microsoft",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
    },
    {
      name: "Isabella",
      role: "Full Stack Developer",
      company: "Intel",
      img: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      name: "Aditi",
      role: "QA Tester",
      company: "Adobe",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      name: "Anika",
      role: "Network Engineer",
      company: "Zoho",
      img: "https://randomuser.me/api/portraits/women/60.jpg",
    },
    {
      name: "Daniel",
      role: "System Administrator",
      company: "Wipro",
      img: "https://randomuser.me/api/portraits/men/70.jpg",
    },
    {
      name: "Oliver",
      role: "UI/UX Designer",
      company: "Accenture",
      img: "https://randomuser.me/api/portraits/men/80.jpg",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Verification Requests - Employee</h2>
      <div style={styles.tableContainer}>
        {employees.map((employee, index) => (
          <div key={index} style={styles.employeeRow}>
            {/* Employee Info */}
            <div style={styles.employeeInfo}>
              <img src={employee.img} alt="avatar" style={styles.avatar} />
              <div>
                <h3 style={styles.name}>{employee.name}</h3>
                <p style={styles.role}>{employee.role}</p>
              </div>
            </div>

            {/* Company Name */}
            <p style={styles.company}>{employee.company}</p>

            {/* Resume PDF */}
            <div style={styles.resume}>📄 Resume.pdf</div>

            {/* Approve Button with Hover Effect */}
            <button
              style={styles.button}
              onMouseEnter={(e) =>
                (e.target.style.border = styles.buttonHover.border)
              }
              onMouseLeave={(e) =>
                (e.target.style.border = styles.button.border)
              }
            >
              Approve
            </button>

            {/* View Profile Button with Hover Effect */}
            <button
              onClick={() => navigate("/verificationEmployerProfile")}
              style={styles.profileButton}
              onMouseEnter={(e) =>
                (e.target.style.border = styles.profileButtonHover.border)
              }
              onMouseLeave={(e) =>
                (e.target.style.border = styles.profileButton.border)
              }
            >
              View Profile <FaArrowRight />
            </button>
          </div>
        ))}

        {/* Pagination */}
        <Pagination />

        <footer style={styles.footer}>
          <p>Copyright © 2024 TechnoHire. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Employees;
