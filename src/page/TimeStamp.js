import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const TimeStamp = (props) => {
  const { handleConvertDate } = props;
  return (
    <section>
      <h1>API Projects: Timestamp microservice</h1>
      <h2>User Stories:</h2>
      <p>
        A request to /api/:date? with a valid date should return a JSON object
        with a unix key that is a Unix timestamp of the input date in
        milliseconds
      </p>
      <p>
        A request to /api/:date? with a valid date should return a JSON object
        with a utc key that is a string of the input date in the format: Thu, 01
        Jan 1970 00:00:00 GMT
      </p>
      <p>
        A request to /api/1451001600000 should return unix: 1451001600000, utc:
        "Fri, 25 Dec 2015 00:00:00 GMT"
      </p>
      <p>
        Your project can handle dates that can be successfully parsed by new
        Date(date_string)
      </p>
      <p>
        If the input date string is invalid, the api returns an object having
        the structure error : "Invalid Date"
      </p>
      <p>
        An empty date parameter should return the current time in a JSON object
        with a unix key
      </p>
      <p>
        An empty date parameter should return the current time in a JSON object
        with a utc key
      </p>
      <h2>Example Usage:</h2>
      <ul>
        <li>
          <a href="http://localhost:8080/timestamp/api/2015-12-25">
            GET [project url]/timestamp/2015-12-25
          </a>
        </li>
        <li>
          <a href="http://localhost:8080/timestamp/api/1450137600000">
            GET [project url]/timestamp/1450137600000
          </a>
        </li>
      </ul>
      <h2>Example Output:</h2>
      <p>
        {"{"}"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"{"}"}
      </p>
    </section>
  );
};
