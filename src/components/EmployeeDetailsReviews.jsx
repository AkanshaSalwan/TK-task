import React from "react";
import { FaMaxcdn, FaSearch } from "react-icons/fa";
import filterIcon from "../assets/filter.png";
import Pagination from "./Pagination";
import { useState } from "react";

const EmployeeDetails = () => {


  return (
    <div style={styles.container}>
      <h4 style={styles.heading1}>Hello! TechoHire</h4>
      <h2 style={styles.heading}>Employer Details</h2>

      <div style={styles.employeeCard}>
        <div style={styles.employeesContainer}>
          <div style={styles.searchBar}>
            {/* Filter Icon */}
            <div style={styles.filterIconContainer}>
              <img src={filterIcon} alt="Filter Icon" style={styles.filterIcon} />
            </div>

            {/* Dropdown */}
            <select style={styles.dropdown}>
              <option value="recent">Recent</option>
              <option value="mostRelevant">Most Relevant</option>
              <option value="topRated">Top Rated</option>
            </select>

            {/* Search Bar */}
            <div style={styles.searchInputContainer}>
              <FaSearch style={styles.searchIcon} />
              <input type="text" placeholder="Search for Reviews" style={styles.searchInput} />
            </div>
          </div>

          <h2 style={styles.heading1}>Employee Reviews</h2>

          {[
            { name: "Cameron", rating: "⭐⭐⭐⭐⭐", reviewTitle: "Interview for UI/UX Designer @Technokrate", 
              reviewText: "The UI/UX designer interview at Technokrate is thorough, focusing on creativity, technical skills, and problem-solving...", 
              profileImg: "https://randomuser.me/api/portraits/men/10.jpg" },
            
            { name: "Emily", rating: "⭐⭐⭐⭐", reviewTitle: "Company Review @Technokrate", 
              reviewText: "Technokrate provided a great learning experience where I honed my UI/UX skills...", 
              profileImg: "https://randomuser.me/api/portraits/women/20.jpg" },
            
            { name: "Raph", rating: "⭐⭐", reviewTitle: "Interview for UI/UX Designer @XYZ Company", 
              reviewText: "Felt misleading. The interview was for an entry-level role, but the questions were overly complicated...", 
              profileImg: "https://randomuser.me/api/portraits/men/30.jpg" },
            
            { name: "Alicia", rating: "⭐", reviewTitle: "Company Review @ABC Company", 
              reviewText: "Terrible company to work for; poor management, lack of growth opportunities, and toxic work culture.", 
              profileImg: "https://randomuser.me/api/portraits/women/40.jpg" }
          ].map((employee, index) => (
            <div key={index} style={styles.reviewCard}>
              <img src={employee.profileImg} alt="avatar" style={styles.avatar} />
              <div>
                <h3 style={styles.name}>{employee.name} {employee.rating}</h3>
                <p style={styles.reviewTitle}>{employee.reviewTitle}</p>
                <p style={styles.reviewText}>{employee.reviewText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
         

         {/* Pagination */}
      <Pagination/>

      <footer style={styles.footer}>
        <p>Copyright © 2024 TechnoHire. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 70px",
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
  employeeCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    width: "1200px",
    minHeight: "800px",
    overflow: "hidden",
  },
  employeesContainer: {
    marginTop: "20px",
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "15px",  // Increased padding for height
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff",
    width: "100%",
    maxWidth: "1100px", // Increased width from 600px to 800px
    marginBottom: "20px",
    height: "20px",
  },

  filterIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "30px",
    height: "30px",
    backgroundColor: "#7900BA",
    color: "#fff",
    borderRadius: "8px",
    cursor: "pointer",
  },
  filterIcon: {
    width: "18px",
    height: "18px",
    filter: "brightness(0) invert(1)",
  },
  dropdown: {
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    outline: "none",
    background: "transparent",
    color: "#64696e",
    
  },
  searchInputContainer: {
    display: "flex",
    alignItems: "center",
    flex: 1,
    width: "100%",
    maxWidth: "800px", 
    
  },
  searchIcon: {
    color: "#a855f7",
    fontSize: "16px",
    marginRight: "8px",
  },
  searchInput: {
    border: "none",
    outline: "none",
    fontSize: "14px",
    width: "100%",
    color: "#232323" ,
   },
  reviewCard: {
    display: "flex",
    alignItems: "flex-start",
    background: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
    width: "100%",
    flexWrap: "wrap",
    borderBottom: "1px solid #ddd",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
    marginRight: "15px",
  },
  name: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  reviewTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
    marginTop: "5px",
  },
  reviewText: {
    fontSize: "14px",
    color: "#555",
    margin: "5px 0",
  },
  footer: {
    textAlign: "left",
    marginTop: "20px",
    fontSize: "12px",
    color: "#666",
  },
};

export default EmployeeDetails;
