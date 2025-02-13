import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import JobPost from "./components/jobDetails";

const App = () => {
  // Set default active section to "Employer Management"
  const [activeSection, setActiveSection] = useState("Employer Management");

  return (
    <div style={styles.app}>
      <Sidebar setActiveSection={setActiveSection} />
      <div style={styles.main}>
        {/* Render Header only when active section is Employer Management */}
        {activeSection === "Employer Management" && <Header />}
        {activeSection === "Employer Management" ? (
          <JobPost />
        ) : (
          // For any other section, show a blank white page
          <div style={styles.blankContent}></div>
        )}

        
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
