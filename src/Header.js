import React from "react";
import { Link } from "react-router-dom";

const textStyle = { color: "white", textDecoration: "none", linHeight: 60 };
export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link style={textStyle} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={textStyle} to="/timestamp">
            Timestamp
          </Link>
        </li>
        <li>
          <Link style={textStyle} to="/headerparser">
            Request Header Parser
          </Link>
        </li>
        <li>
          <Link style={textStyle} to="/urlshortener">
            URL Shortener
          </Link>
        </li>
        <li>
          <Link style={textStyle} to="/exercisetracker">
            Exercise Tracker
          </Link>
        </li>
        <li>
          <Link style={textStyle} to="/metadata">
            File Metadata
          </Link>
        </li>
      </ul>
    </nav>
  );
};
