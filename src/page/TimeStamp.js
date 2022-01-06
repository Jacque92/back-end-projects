import React from "react";

export const TimeStamp = () => {
  return (
    <section>
      <h1>Timestamp microservice</h1>
      <div className="row pt-5">
        <div className="col">
          <h2>User Stories:</h2>
          <p>
            1. The API endpoint is{" "}
            <code>GET [project_url]/timestamp/api/:date_string?</code>
          </p>
          <p>
            2. A date string is valid if can be successfully parsed by{" "}
            <code>new Date(date_string)</code>
          </p>
          <p>
            3. If the date string is <strong>empty</strong> it should be
            equivalent to trigger <code>new Date()</code>, i.e. the service uses
            the current timestamp.
          </p>
          <p>
            4. If the date string is <strong>valid</strong> the api returns a
            JSON having the structure{" "}
            <code>
              {"{"} "unix": &lt;date.getTime&#40;&#41;&gt;, "utc":
              &lt;date.toUTCString&#40;&#41;&gt; {"}"}
            </code>
            <br />
            e.g.{" "}
            <code>
              {"{"}"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"
              {"}"}
            </code>
          </p>

          <p>
            5. If the date string is <strong>invalid</strong> the api returns a
            JSON having the structure{" "}
            <code>
              {"{"}"unix": null, "utc" : "Invalid Date" {"}"}
            </code>
            . It is what you get from the date manipulation functions used
            above.
          </p>
        </div>
        <div className="col border border-dark p-4 text-center">
          <h2>Example Usage:</h2>

          <a href="/api/2015-12-25">
            GET [project url]/timestamp/api/2015-12-25
          </a>
          <br />
          <a href="/api/1450137600000">
            GET [project url]/timestamp/api/1450137600000
          </a>

          <h2 className="mt-4">Example Output:</h2>
          <p>
            <code>
              {"{"}"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"
              {"}"}
            </code>
          </p>
        </div>
      </div>
    </section>
  );
};
