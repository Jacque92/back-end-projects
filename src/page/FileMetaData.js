import React from "react";

export const FileMetaData = () => {
  return (
    <section>
      <h1>File Metadata Microservice</h1>
      <div className="row pt-5">
        <div className="col">
          <h2>User Stories:</h2>
          <p>1. To submit a form object that includes a file upload.</p>
          <p>
            2. The from file input field has the "name" attribute set to
            "upfile".
          </p>
          <p>
            3. On submit something, will receive the file name, and size in
            bytes within the JSON response.
          </p>
        </div>
        <div className="col border border-dark p-4 text-center">
          <h3>Usage:</h3>
          <p>Please Upload a File ...</p>
          <div class="view">
            <h4 id="output"></h4>
            <form
              enctype="multipart/form-data"
              method="POST"
              action="metadata/api/fileanalyse"
            >
              <input id="inputfield" type="file" name="upfile" />
              <input id="button" type="submit" value="Upload" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
