import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Strona nie znaleziona</h1>
      <p style={styles.message}>Przepraszamy, ta strona nie istnieje.</p>
      <Link to="/" style={styles.link}>
        Wróć do strony głównej
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "48px",
    color: "#ff0000",
  },
  message: {
    fontSize: "18px",
    color: "#333",
  },
  link: {
    fontSize: "20px",
    color: "#007bff",
    textDecoration: "none",
  },
};

export default NotFoundPage;
