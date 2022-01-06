import React from "react";
import { useState } from "react";

export const ExerciseTracker = () => {
  const [userId, setUserId] = useState(null);
  const handleUserId = (e) => {
    setUserId(e.target.value);
  };

  return (
    <section>
      <h1>Exercise tracker</h1>
      <div className="row pt-5">
        <div className="col">
          <h2>User Stories:</h2>
          <p>
            1. To create a user by posting form data username to{" "}
            <code>/api/users</code> and returned will be an object with username
            and _id.
          </p>
          <p>
            2. To get an array of all users by getting <code>api/users</code>{" "}
            with the same info as when creating a user.
          </p>
          <p>
            3. To add an exercise to any user by posting form data userId(_id),
            description, duration, and optionally date to{" "}
            <code>/api/users/:_id/exercises</code>. If no date supplied it will
            use current date. Returned will be the user object with the exercise
            fields added.
          </p>
          <p>
            4. To retrieve a full exercise log of any user by getting
            <code>/api/users/:_id/logs</code> with a parameter of userId(_id).
            Return will be the user object with added array log and count (total
            exercise count).
          </p>
          <p>
            5. To retrieve part of the log of any user by also passing along
            optional parameters of from &amp; to or limit. (Date format
            yyyy-mm-dd, limit = int)
          </p>
        </div>
        <div className="col border border-dark p-4 text-center">
          <form action="exercisetracker/api/users" method="POST">
            <h2 className="mt-4">Create a New User</h2>
            <p>
              <code>POST /api/users</code>
            </p>
            <input
              id="uname"
              type="text"
              name="username"
              placeholder="username"
            />
            <input className="ms-2" type="submit" value="Submit" />
          </form>
          <form
            action={`exercisetracker/api/users/${userId}/exercises`}
            id="exercise-form"
            method="POST"
          >
            <h2 className="mt-4">Add exercises</h2>
            <p>
              <code>POST /api/users/:_id/exercises</code>
            </p>
            <input
              id="uid"
              type="text"
              name=":_id"
              placeholder=":_id"
              onChange={handleUserId}
            />
            <input
              id="desc"
              type="text"
              name="description"
              placeholder="description*"
              className="ms-2"
            />
            <br />
            <input
              id="dur"
              type="text"
              name="duration"
              placeholder="duration* (mins.)"
              className="mt-2"
            />
            <input
              id="date"
              type="text"
              name="date"
              placeholder="date (yyyy-mm-dd)"
              className="mt-2"
              className="ms-2"
            />
            <br />
            <input type="submit" value="Submit" className="mt-2" />
          </form>
          <p className="mt-4">
            <strong>GET user's exercise log: </strong>
            <code>GET /api/users/:_id/logs?[from][&amp;to][&amp;limit]</code>
          </p>
          <p>
            <strong>[ ]</strong> = optional
          </p>
          <p>
            <strong>from, to</strong> = dates (yyyy-mm-dd);{" "}
            <strong>limit</strong> = number
          </p>
        </div>
      </div>
    </section>
  );
};
