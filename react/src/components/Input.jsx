import React from "react";
import "../styles/input.css";

export default function Input() {
  return (
    <div className="input">
      <div>
        <label>weight</label>
        <br />
        <input type="text" />
      </div>
      <div>
        <label>num_of_time</label>
        <br />
        <input type="text" />
      </div>
      <div>
        <label>event</label>
        <br />
        <input type="text" />
      </div>
      <div>
        <label>part</label>
        <br />
        <input type="text" />
      </div>
      <div>
        <label>date</label>
        <br />
        <input type="text" />
      </div>
      <br />
      <div>
        <button className="button">send</button>
      </div>
    </div>
  );
}
