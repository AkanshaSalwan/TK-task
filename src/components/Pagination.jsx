import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPages = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div style={styles.paginationContainer}>
      {/* Left Arrow */}
      <button
        style={currentPage === 1 ? styles.disabledArrow : styles.arrowButton}
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          style={currentPage === page ? styles.activePage : styles.pageButton}
          onClick={() => goToPage(page)}
        >
          {page.toString().padStart(2, "0")}
        </button>
      ))}

      {/* Right Arrow */}
      <button
        style={
          currentPage === totalPages ? styles.disabledArrow : styles.arrowButton
        }
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

const styles = {
  paginationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
    padding: "20px 0",
   
  },
  arrowButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    color: "#8a2be2",
    padding: "8px",
    
  },
  disabledArrow: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    color: "#d3c3e5",
    padding: "8px",
    cursor: "not-allowed",
  },
  pageButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    color: "#333",
    padding: "10px",
  },
  activePage: {
    background: "#7900BA",
    color: "#fff",
    borderRadius: "50%",
    width: "50px",
    height: "35px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    
  },
};

export default Pagination;
