import React from "react";

export const URLShortener = () => {
  return (
    <section>
      <h1>URL Shortener Microservice</h1>
      <div className="row pt-5">
        <div className="col">
          <h2>User Stories:</h2>
          <p>
            1. POST a URL to{" "}
            <code>[project url]/urlshortener/api/shorturl/:input </code> and
            receive a shortened URL which could be copied
          </p>
          <p>
            2. Passing an invalid URL that doesn't follow the{" "}
            <code>http(s)://www.example.com(/more/routes)</code> format, the
            JSON response will contain an error like{" "}
            <code>
              {"{"}"error":"invalid URL"{"}"}
            </code>
          </p>
          <p>
            3. When visiting the shortened URL, it will redirect to the original
            link.
          </p>
        </div>
        <div className="col border border-dark p-4 text-center">
          <h2>Short URL Creation</h2>
          <p>
            example:{" "}
            <code>
              POST [project_url]/urlshortner/api/shorturl/new -
              https://www.google.com
            </code>
          </p>
          <form
            className="border border-dark p-2"
            action="/urlshortener/api/shorturl"
            method="POST"
          >
            <fieldset>
              <label for="url_input">URL to be shortened:</label>
              <input
                id="url_input"
                type="text"
                name="url"
                placeholder="https://www.freecodecamp.org/"
              />
              <input type="submit" value="POST URL" />
            </fieldset>
          </form>
          <h2 className="mt-4">Example Usage:</h2>
          <a href="/urlshortener/api/shorturl/3">
            [project_url]/urlshortener/api/shorturl/3
          </a>
          <h2 className="mt-4">Will Redirect to:</h2>

          <p>https://www.github.com/Jacque92</p>
        </div>
      </div>
    </section>
  );
};
