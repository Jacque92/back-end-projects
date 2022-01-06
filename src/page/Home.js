import React from "react";

export const Home = () => {
  return (
    <section>
      <h1>FreeCodeCamp APIs and Microservices Projects</h1>
      <p>
        Five projects built by applying skills and concepts that I learned from
        FreeCodeCamp curriculum including npm packages, basic Node, basic
        Express, MongoDB and Mongoose.
      </p>

      <div className="row row-cols-2 row-cols-lg-4 gap-4 pt-5 ps-2">
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">Timestamp Microservice</h5>
            <p className="card-text">
              parses timestamp in milliseconds or date string from the API
              endpoint and returns JSON with timestamp and date.
            </p>
            <div className="text-end">
              <a href="/timestamp" className="btn btn-secondary">
                View
              </a>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">Request Header Parser Microservice</h5>
            <p className="card-text">
              gets the IP address, preferred languages, and system info of the
              client's device.
            </p>
            <div className="text-end">
              <a href="/headerparser" className="btn btn-secondary">
                View
              </a>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">URL Shortener Microservice</h5>
            <p className="card-text">
              allows to post url and receive a shortened URL which could be
              copied. Visiting the shortened URL will redirect to the original
              link.
            </p>
            <div className="text-end">
              <a href="/urlshortener" className="btn btn-secondary">
                View
              </a>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">Exercise Tracker</h5>
            <p className="card-text">
              allows to create user, to add an exercise to any user, to get
              user's exercise log optionally for selected period.
            </p>
            <div className="text-end">
              <a href="/exercisetracker" className="btn btn-secondary">
                View
              </a>
            </div>
          </div>
        </div>
        <div className="card col">
          <div className="card-body">
            <h5 className="card-title">File Metadata Microservice</h5>
            <p className="card-text">
              allows to submit a form object that includes a file upload, on
              submit receive JSON with file's name, type and size.
            </p>
            <div className="text-end">
              <a href="/metadata" className="btn btn-secondary">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
