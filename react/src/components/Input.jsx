import React from "react";
import { useState, useEffect } from "react";
import "../styles/input.css";

export default function Input(props) {
  const {
    weight,
    setWeight,
    num_of_time,
    setNumOfTime,
    event,
    setEvent,
    part,
    setPart,
    postButton,
  } = props;

  return (
    <div className="input">
      <div>
        <label>weight</label>
        <br />
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>num_of_time</label>
        <br />
        <input
          type="text"
          valu={num_of_time}
          onChange={(e) => setNumOfTime(e.target.value)}
        />
      </div>
      <div>
        <label>event</label>
        <br />
        <input
          type="text"
          valu={event}
          onChange={(e) => setEvent(e.target.value)}
        />
      </div>
      <div>
        <label>part</label>
        <br />
        <select onChange={(e) => setPart(e.target.value)}>
          <option>chest</option>
          <option>back</option>
          <option>arm</option>
          <option>shoulder</option>
          <option>leg</option>
          <option>abs</option>
        </select>
      </div>
      <div>
        <label>date</label>
        <br />
        <input
          type="text"
          value={new Date().toLocaleDateString("sv-SE")}
          readOnly
        />
      </div>
      <br />
      <div>
        <button className="button" onClick={postButton}>
          send
        </button>
      </div>
    </div>
  );
}
