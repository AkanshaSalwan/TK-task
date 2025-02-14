// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import JobPost from "./components/jobDetails";
import EmployeeDetailReview from "./components/EmployeeDetailReview";
// Adjust the file name if needed

const App = () => {
  return (
    <div style={styles.app}>
      <Sidebar />
      <div style={styles.main}>
        <Header />
        {/* Example navigation link */}
        <nav style={styles.nav}>
          <Link to="/">Job Posts</Link> |{" "}
          <Link to="/Empolyeedetails">Employee Detail Review</Link>
        </nav>
        <Routes>
          <Route path="/" element={<JobPost />} />
          <Route path="/Empolyeedetails" element={<EmployeeDetailReview />} />
        </Routes>
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: "flex",
  },
  main: {
    flex: 1,
    background: "#f0f4f8",
    minHeight: "100vh",
    marginLeft: "250px",
  },
  nav: {
    padding: "10px",
    background: "#fff",
    marginBottom: "20px",
  },
};

export default App;
