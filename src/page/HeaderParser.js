import React from "react";

export const HeaderParser = () => {
  return (
    <section>
      <h1>Request Header Parser Microservice</h1>
      <div className="row pt-5">
        <div className="col">
          <h2>User Stories:</h2>
          <p>
            To get the IP address, preferred languages &#40;from header
            Accept-Language&#41; and system infos &#40;from header
            User-Agent&#41; for client's device.
          </p>
        </div>
        <div className="col border border-dark p-4 text-center">
          <h3>Example Usage:</h3>
          <p>
            <a href="http://localhost:8080/headerparser/api/whoami">
              [project url]/headerparser/api/whoami
            </a>
          </p>

          <h3>Example Output:</h3>
          <p>
            <code>
              {"{"}
              "ipaddress":"::ffff:159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0
              (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
              {"}"}
            </code>
          </p>
        </div>
      </div>
    </section>
  );
};
