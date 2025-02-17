import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import JobPost from "./components/jobDetails";
import { Routes, Route } from "react-router-dom";
import EmployeeReviews from "./components/EmployeeDetailsReviews";
import VerificationDetails from "./components/VerificationRequestsEmployee";
import VerificationEmployerProfile from "./components/VerificationEmployerProfile";
import EmployeeDetails from "./components/EmployeeDetails";



const App = () => {
  // Set default active section to "Employer Management"
  const [activeSection, setActiveSection] = useState("Employer Management");
   
  return (
    <div style={styles.app}>
      <Sidebar setActiveSection={setActiveSection} />
      <div style={styles.main}>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                {activeSection === "Employer Management" && <Header />}
                {activeSection === "Employer Management" ? <JobPost /> : <div style={styles.blankContent}></div>}
              </>
            } 
          />
          <Route path="/employerReviews" element={<EmployeeReviews />} />
          <Route path="/verificationDetails" element={<VerificationDetails/>}/>
          <Route path="/verificationEmployerProfile" element={<VerificationEmployerProfile/>}/>
          <Route path="/EmployeeDetails" element={<EmployeeDetails/>}/>
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
  blankContent: {
    background: "white",
    height: "calc(100vh - 60px)", // Adjust height as needed
  },
};

export default App;