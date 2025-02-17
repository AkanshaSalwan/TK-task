import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const JobDetails = () => {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <h4 style={styles.heading1}>Hello! TechoHire</h4>
      <h2 style={styles.heading}>Recently Posted Jobs Details</h2>

      {/* ✅ Employee Statistics Section */}
      <div style={styles.statsContainer}>
        {[
          {
            label: "Total Employee",
            value: "15k",
            icon: "📁",
            bgColor: "#fee2e2",
            iconColor: "#ef4444",
          },
          {
            label: "New Employee",
            value: "1k",
            icon: "🔄",
            bgColor: "#e0e7ff",
            iconColor: "#6366f1",
          },
          {
            label: "Active Employee",
            value: "10k",
            icon: "👤",
            bgColor: "#d1fae5",
            iconColor: "#10b981",
          },
          {
            label: "Inactive Employee",
            value: "5k",
            icon: "📄",
            bgColor: "#fef3c7",
            iconColor: "#fbbf24",
          },
        ].map((stat, index) => (
          <div key={index} style={styles.statCard}>
            <div
              style={{
                ...styles.iconContainer,
                backgroundColor: stat.bgColor,
                color: stat.iconColor,
              }}
            >
              {stat.icon}
            </div>
            <div>
              <p style={styles.statLabel}>{stat.label}</p>
              <p style={styles.statValue}>{stat.value}</p>
              <p style={styles.statUpdated}>
                <span style={styles.clockIcon}>⏰</span> Updated Today Morning
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Verification Requests & Reviews Container  */}
      <div style={styles.flexContainer}>
        {/* ✅ Verification Requests Section  */}

        <div style={styles.verificationBox}>
          <div style={styles.verificationHeader}>
            <h3 style={styles.verificationTitle}>
              Verification Requests - Employee
            </h3>
            <p onClick={() => navigate("verificationDetails")} style={styles.viewMore}>View More</p>
          </div>

          {[
            {
              name: "Cameron",
              role: "HR @Technokrate",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sarah",
              role: "Software Developer @Google",
              image: "https://randomuser.me/api/portraits/women/45.jpg",
            },
            {
              name: "Jason",
              role: "Graphic Designer @Figma",
              image: "https://randomuser.me/api/portraits/men/56.jpg",
            },
            {
              name: "Daniel",
              role: "Administrator @Microsoft",
              image: "https://randomuser.me/api/portraits/men/67.jpg",
            },
            {
              name: "Lily",
              role: "Tech Support @Instagram",
              image: "https://randomuser.me/api/portraits/women/78.jpg",
            },
          ].map((user, index, array) => (
            <div key={index}>
              <div style={styles.verificationRow}>
                <div style={styles.userContainer}>
                  <img
                    src={user.image}
                    alt={user.name}
                    style={styles.userAvatar}
                  />
                  <div>
                    <p style={styles.userName}>{user.name}</p>
                    <p style={styles.userRole}>{user.role}</p>
                  </div>
                </div>
                <div style={styles.buttonGroup}>
                  <button style={styles.viewButton}>View Details</button>

                  <button style={styles.approveButton}>Approve</button>
                </div>
              </div>

              {/* ✅ Add a horizontal line between requests, except after the last one */}
              {index < array.length - 1 && <hr style={styles.horizontalLine} />}
            </div>
          ))}
        </div>

        {/* ✅ Reviews Section  */}
        <div style={styles.reviewsBox}>
          <div style={styles.reviewsHeader}>
            <h3 style={styles.reviewsTitle}>Reviews</h3>

            <p
              onClick={() => navigate("/employerReviews")}
              style={{ cursor: "pointer", color: "blue" }}
            >
              View More
            </p>
          </div>

          {[
            {
              name: "Cameron",
              role: "Interview for UI/UX Designer @Technokrate",
              rating: "⭐⭐⭐⭐⭐",
              review:
                "The UI/UX designer interview at Technokrate is thorough, focusing on creativity, technical skills, and problem-solving. It includes a design challenge, portfolio review, and questions about your process and collaboration style. Proficiency in tools like Figma and clear communication are key to success.",
              image: "https://randomuser.me/api/portraits/women/1.jpg",
            },
            {
              name: "Sarah",
              role: "UI/UX Designer",
              rating: "⭐⭐⭐⭐⭐",
              review:
                "Technokrate provided a great learning experience where I honed my UI/UX skills, worked on user-centric design,and collaborated with a dynamic team.",
              image: "https://randomuser.me/api/portraits/women/2.jpg",
            },
          ].map((review, index) => (
            <div key={index} style={styles.reviewCard}>
              <div style={styles.reviewHeader}>
                <img
                  src={review.image}
                  alt="profile"
                  style={styles.reviewAvatar}
                />
                <div>
                  <p style={styles.reviewName}>
                    {review.name}{" "}
                    <span style={styles.reviewStars}>{review.rating}</span>
                  </p>
                  <p style={styles.reviewRole}>{review.role}</p>
                </div>
              </div>
              <p style={styles.reviewText}>{review.review}</p>
            </div>
          ))}
        </div>
      </div>

      {/*Employee Details Section */}
      <div style={styles.employeeDetailsBox}>
        <div style={styles.employeeDetailsHeader}>
          <h3 style={styles.employeeDetailsTitle}>Employee Details</h3>
          <p 
          onClick={() => navigate("/EmployeeDetails")} 
           style={styles.viewMore}>View More</p>
        </div>

        <table style={styles.employeeTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee Name</th>
              <th>Role</th>
              <th>Company</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: "#527269",
                name: "Cameron",
                role: "HR",
                company: "Technokrate",
                mobile: "+91 12345 67890",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                id: "#748526",
                name: "Dustin",
                role: "Front End Developer",
                company: "Google",
                mobile: "+91 12345 67890",
                image: "https://randomuser.me/api/portraits/men/45.jpg",
              },
              {
                id: "#748526",
                name: "Sarah",
                role: "UI/UX Designer",
                company: "Instagram",
                mobile: "+91 12345 67890",
                image: "https://randomuser.me/api/portraits/women/45.jpg",
              },
            ].map((employee, index, array) => (
              <>
                <tr key={index}>
                  <td>{employee.id}</td>
                  <td style={styles.employeeCell}>
                    <img
                      src={employee.image}
                      alt={employee.name}
                      style={styles.employeeAvatar}
                    />
                    {employee.name}
                  </td>
                  <td>{employee.role}</td>
                  <td>{employee.company}</td>
                  <td>{employee.mobile}</td>
                  <td>
                    <span style={styles.editIcon}>✏️</span>
                    <span style={styles.deleteIcon}>🗑️</span>
                  </td>
                </tr>
                {/* Add horizontal line between employees except the last one */}
                {index < array.length - 1 && (
                  <tr>
                    <td colSpan="6" style={styles.horizontalLine1}></td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>

      {/*  Footer Section */}
      <footer style={styles.footer}>
        <p>Copyright © 2024 TechnoHire. All rights reserved.</p>
      </footer>
    </div>
  );
};

/* ✅ Internal CSS */
const styles = {
  container: {
    padding: "40px 80px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
  },
  heading1: {
    fontSize: "22px",
    fontWeight: "lighter",
    color: "#333",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  statCard: {
    position: "relative",
    padding: "16px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    width: "250px",
  },
  iconContainer: {
    position: "absolute",
    top: "12px",
    right: "12px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },
  statLabel: { fontSize: "14px", color: "#555" },
  statValue: { fontSize: "18px", fontWeight: "bold" },
  statUpdated: { fontSize: "12px", color: "#777" },
  clockIcon: { fontSize: "14px", color: "#888" },

  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    marginTop: "20px",
    alignItems: "stretch", // Ensure both boxes stretch to the same height
  },
  horizontalLine: {
    border: "0",
    height: "1px",
    background: "#ddd",
    margin: "10px 0",
  },

  verificationBox: {
    flex: 1,
    padding: "18px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "column", // Ensure content inside is aligned properly
  },
  verificationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px", // Add margin to separate header from content
  },
  verificationTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  viewMore: {
    fontSize: "14px",
    color: "#6366f1",
    cursor: "pointer",
  },
  verificationRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
  },

  userContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  userAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },
  userName: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  userRole: {
    fontSize: "12px",
    color: "#777",
  },
  buttonGroup: {
    display: "flex",
    gap: "8px",
  },
  viewButton: {
    padding: "6px 12px",
    background: "#DCBDED",
    color: "#7900BA",
    borderRadius: "5px",
    outline: "none",
  },
  approveButton: {
    padding: "6px 12px",
    background: "#c0eeca",
    color: "#0BA02C",
    borderRadius: "5px",
    outline: "none",
  },

  reviewsBox: {
    flex: 1,
    padding: "20px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
    display: "flex",
    flexDirection: "column", // Ensure content inside is aligned properly
  },

  reviewCard: {
    padding: "15px",
    borderBottom: "1px solid #ddd",
  },

  reviewsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px", // Add margin to separate header from content
  },

  reviewAvatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  },

  reviewName: {
    fontSize: "14px",
    fontWeight: "bold",
  },

  reviewStars: {
    fontSize: "12px",
    color: "#fbbf24",
  },

  reviewRole: {
    fontSize: "12px",
    color: "#777",
  },

  reviewText: {
    fontSize: "13px",
    color: "#444",
    marginTop: "5px",
  },

  employeeDetailsBox: {
    marginTop: "20px",
    padding: "20px",
    borderRadius: "15px",
    background: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    border: "1px solid #ddd",
  },
  employeeDetailsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  employeeDetailsTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  employeeTable: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "left",
  },
  employeeCell: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textAlign: "left",
  },

  employeeAvatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  editIcon: {
    marginRight: "10px",
    cursor: "pointer",
    color: "#6366f1",
  },
  deleteIcon: {
    cursor: "pointer",
    color: "#ef4444",
  },

  horizontalLine1: {
    borderTop: "1px solid #ddd",
    height: "1px",
    padding: "0",
    margin: "0",
  },

  footer: {
    textAlign: "left",
    marginTop: "20px",
    fontSize: "12px",
    color: "#666",
  },
};

export default JobDetails;
