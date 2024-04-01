// Navbar.js
import React from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <div className="navbar">
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: ${theme === "dark" ? "#333" : "#fff"};
            color: ${theme === "dark" ? "#fff" : "#333"};
            padding: 10px 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .sidebar-header h2 {
            margin: 0;
            font-size: 1.5rem;
            font-weight: bold;
          }

          .links {
            display: flex;
          }

          .links a {
            text-decoration: none;
            color: ${theme === "dark" ? "#fff" : "#333"};
            margin-left: 20px;
          }

          .links a:first-child {
            margin-left: 0;
          }

          .links a:hover {
            text-decoration: underline;
          }

          .theme-toggle {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: ${theme === "dark" ? "#fff" : "#333"};
            margin-left: 20px;
          }

          .theme-toggle:hover {
            opacity: 0.7;
          }
        `}
      </style>
      <div className="sidebar-header">
        <h2>ReachInbox</h2>
      </div>
      <div className="links">
        <a href="#">Inbox</a>
        <a href="#">Starred</a>
        <a href="#">Sent</a>
        <a href="#">Draft</a>
        <a href="#">Spam</a>
        <a href="#">All Mail</a>
        
        {/* Add more links as needed */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? <Brightness4 /> : <Brightness7 />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
