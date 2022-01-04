import React from "react";

export const FileMetaData = () => {
  return (
    <section>
      <h1>API Project: File Metadata Microservice</h1>
      <h3>Usage:</h3>
      <p>Please Upload a File ...</p>
      <div class="view">
        <h4 id="output"></h4>
        <form
          enctype="multipart/form-data"
          method="POST"
          action="/api/fileanalyse"
        >
          <input id="inputfield" type="file" name="upfile" />
          <input id="button" type="submit" value="Upload" />
        </form>
      </div>
    </section>
  );
};
