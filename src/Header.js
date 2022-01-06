import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mx-auto gap-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/timestamp">
            Timestamp
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/headerparser">
            Request Header Parser
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/urlshortener">
            URL Shortener
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/exercisetracker">
            Exercise Tracker
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/metadata">
            File Metadata
          </Link>
        </li>
      </ul>
    </nav>
  );
};
