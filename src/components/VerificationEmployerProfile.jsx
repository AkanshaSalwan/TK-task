import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";

const VerificationEmployerProfile = () => {
  const styles = {
    pageContainer: {
      maxWidth: "1100px",
      margin: "50px auto",
      fontFamily: "Arial, sans-serif",
    },
    // titleSection: {
    //   textAlign: "left",
    //   marginBottom: "20px",
    //   borderBottom: "2px solid #E0E0E0",
    //   paddingBottom: "15px",
    //   padding: "0 60px",
    // },
    titleSection: {
      textAlign: "left",
      marginBottom: "20px",
      padding: "0 90px",
    },

    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
    },

    titleMain: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#333",
    },
    titleSub: {
      fontSize: "18px",
      fontWeight: "500",
      color: "#666",
    },
    container: {
      background: "#fff",
      padding: "40px 60px",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    // header: {
    //   display: "flex",
    //   alignItems: "center",
    //   justifyContent: "space-between",
    //   padding: "20px",
    //   background: "#F5F5F5",
    //   borderRadius: "8px",
    //   marginBottom: "20px",
    // },
    profileInfo: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
    },
    avatar: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    role: {
      fontSize: "14px",
      color: "#767F8C",
    },
    buttons: {
      display: "flex",
      gap: "10px",
    },
    declineButton: {
      background: "#edd0d0",
      color: "#CE0E0E",
      padding: "9px 16px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      outline: "none",
    },
    approveButton: {
      background: "#c6eecf",
      color: "#086e20",
      padding: "9px 16px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      outline: "none",
    },
    mainContent: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
    },
    leftColumn: {
      flex: 1.5,
      minWidth: "60%",
    },
    rightColumn: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      minWidth: "35%",
    },
    section: {
      marginTop: "20px",
    },
    title: {
      fontSize: "16px",
      fontWeight: "bold",
    },
    text: {
      fontSize: "14px",
      color: "#5E6670",
      lineHeight: "1.5",
    },
    contactCard: {
      background: "#F9F9F9",
      padding: "15px",
      borderRadius: "10px",
    },
    contactItem: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "5px",
    },
    documents: {
      background: "#F9F9F9",
      padding: "15px",
      borderRadius: "10px",
    },
    documentItem: {
      fontSize: "14px",
      color: "#555",
      cursor: "pointer",
    },
    navigationButtons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
      flexWrap: "wrap",
    },
    navButton: {
      background: "#DCBDED",
      color: "#7900BA",
      padding: "10px 15px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      outline: "none",
    },
    navButton1: {
      background: "#7900BA",
      color: "#fff",
      padding: "10px 15px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "14px",
      outline: "none",
    },
  };

  return (
    <div style={styles.pageContainer}>
      {/* Title Section (OUTSIDE employer container) */}
      <div style={styles.titleSection}>
        <h2 style={styles.titleMain}>Hello! TechnoHire</h2>
        <h3 style={styles.titleSub}>Verification Employer Profile</h3>
      </div>

      {/* Employer Profile Container */}
      <div style={styles.container}>
        {/* Header Section */}
        <div style={styles.header}>
          <div style={styles.profileInfo}>
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="profile"
              style={styles.avatar}
            />
            <div>
              <p style={styles.name}>Cameron</p>
              <p style={styles.role}>HR @Technokrate</p>
            </div>
          </div>
          <div style={styles.buttons}>
            <button style={styles.declineButton}>Decline</button>
            <button style={styles.approveButton}>Approve</button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div style={styles.mainContent}>
          {/* Left Column - Profile, Bio, and Cover Letter */}
          <div style={styles.leftColumn}>
            {/* Biography Section */}
            <div style={styles.section}>
              <h3 style={styles.title}>Biography</h3>
              <p style={styles.text}>
                I've been passionate about graphic design and digital art from
                an early age with a keen interest in Website and Mobile
                Application User Interfaces. I can create high-quality and
                aesthetically pleasing designs in a quick turnaround time. Check
                out the portfolio section of my profile to see samples of my
                work and feel free to discuss your designing needs. I mostly use
                Adobe Photoshop, Illustrator, XD and Figma. *Website User
                Experience and Interface (UI/UX) Design - for all kinds of
                Professional and Personal websites. *Mobile Application User
                Experience and Interface Design - for all kinds of IOS/Android
                and Hybrid Mobile Applications. *Wireframe Designs.
              </p>
            </div>

            {/* Cover Letter Section */}
            <div style={styles.section}>
              <h3 style={styles.title}>Cover Letter</h3>
              <p style={styles.text}>
                Dear Sir,
                <br />I am writing to express my interest in the fourth grade
                instructional position that is currently available in the Fort
                Wayne Community School System. I learned of the opening through
                a notice posted on JobZone, IPFW’s job database. I am confident
                that my academic background and curriculum development skills
                would be successfully utilized in this teaching position.
                Sincerely, Esther Howard
              </p>
              <p style={styles.text}>
                Sincerely,
                <br />
                Esther Howard
              </p>
            </div>
          </div>

          {/* Right Column - Contact Information and Documents */}
          <div style={styles.rightColumn}>
            {/* Contact Information */}
            <div style={styles.contactCard}>
              <h3 style={styles.title}>Contact Information</h3>
              <p style={styles.contactItem}>🌐 Website: www.estherhoward.com</p>
              <p style={styles.contactItem}>
                🏢 Company: Talentrise Technokrate
              </p>
              <p style={styles.contactItem}>📞 Phone: +1-202-555-0141</p>
              <p style={styles.contactItem}>
                📞 Secondary Phone: +1-202-555-0189
              </p>
              <p style={styles.contactItem}>
                📧 Email: esther.howard@gmail.com
              </p>
            </div>

            {/* Documents Section */}

            <div style={styles.documents}>
              <h3 style={styles.title}>Documents</h3>

              {/* Document List */}
              {[
                { name: "Esther Resume", type: "PDF" },
                { name: "Certifications", type: "PDF" },
              ].map((doc, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#fff",
                    padding: "10px",
                    borderRadius: "8px",
                    marginBottom: "10px",
                    boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontSize: "20px" }}>📄</span>
                    <div>
                      <p style={{ fontWeight: "bold", margin: 0 }}>
                        {doc.name}
                      </p>
                      <p
                        style={{
                          color: "#666",
                          margin: "2px 0",
                          fontSize: "14px",
                        }}
                      >
                        {doc.type}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "10px" }}>
                    {/* View Button */}
                    <button
                      style={{
                        background: "#E5D1F8",
                        color: "#7900BA",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <IoEyeOutline />
                    </button>

                    {/* Delete Button */}
                    <button
                      style={{
                        background: "#FAD2D2",
                        color: "#CE0E0E",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={styles.navigationButtons}>
          <button style={styles.navButton}>← Previous Employer</button>
          <button style={styles.navButton1}>View Next Employer →</button>
        </div>
      </div>
      <footer style={styles.footer}>
        <p>Copyright © 2024 TechnoHire. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default VerificationEmployerProfile;
