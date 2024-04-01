// Home.js
import React, { useState, useEffect } from "react";
import {
  Inbox,
  Star,
  Send,
  Drafts,
  Report,
  Mail,
  Delete,
  Label,
  Snooze,
} from "@mui/icons-material";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // Update theme when component mounts
  useEffect(() => {
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  return (
    <div>
      <style>
        {`
          body {
            background-color: ${theme === "dark" ? "#333" : "#fff"};
            color: ${theme === "dark" ? "#fff" : "#333"};
          }

          .sidebar {
            width: 15%;
            box-shadow: rgba(0, 0, 0, 0.35) 1px 5px 8px;
            background-color: ${theme === "dark" ? "#333" : "#f4f4f4"};
            color: ${theme === "dark" ? "#fff" : "#333"};
            padding: 20px;
            height: 100vh;
          }

          .sidebar-menu {
            list-style-type: none;
            padding: 0;
          }

          .sidebar-menu li {
            margin-bottom: 25px;
          }

          .sidebar-menu a {
            text-decoration: none;
            color: ${theme === "dark" ? "#fff" : "#333"};
            display: flex;
            align-items: center;
          }

          .sidebar-menu a span {
            margin-left: 10px;
          }
        `}
      </style>
      {/* Navbar component with toggleTheme function */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="sidebar">
        {/* Sidebar navigation */}
        <ul className="sidebar-menu">
          <li>
            <a href="#">
              <Inbox />
              <span>Inbox</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Star />
              <span>Starred</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Send />
              <span>Sent</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Drafts />
              <span>Drafts</span>
            </a>
          </li>
          <li>
            <a href="/spam">
              <Report />
              <span>Spam</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Mail />
              <span>All Mail</span>
            </a>
          </li>
          <li>
            <a href="/bin">
              <Delete />
              <span>Bin</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Label />
              <span>Important</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Snooze />
              <span>Snoozed</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
