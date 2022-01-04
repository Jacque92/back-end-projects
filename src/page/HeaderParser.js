import React from "react";

export const HeaderParser = () => {
  return (
    <section>
      <h1>Request Header Parser Microservice</h1>

      <h3>Example Usage:</h3>
      <p>
        <a href="http://localhost:8080/headerparser/api/whoami">
          [base url]/api/whoami
        </a>
      </p>

      <h3>Example Output:</h3>
      <p>
        <code>
          {"{"}
          "ipaddress":"::ffff:159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0
          (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"{"}"}
        </code>
      </p>
    </section>
  );
};
