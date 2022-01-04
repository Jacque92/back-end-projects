import React from "react";

export const URLShortener = () => {
  return (
    <section>
      <h1>URL Shortener Microservice</h1>
      <form
        action="/urlshortener/api/shorturl"
        // action="http://localhost:8080/urlshortener/api/shorturl"
        method="POST"
      >
        <fieldset>
          <legend>URL Shortener</legend>
          <label for="url_input">URL:</label>
          <input
            id="url_input"
            type="text"
            name="url"
            placeholder="https://www.freecodecamp.org/"
          />
          <input type="submit" value="POST URL" />
        </fieldset>
      </form>
    </section>
  );
};
