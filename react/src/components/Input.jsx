import React from "react";
import { useState, useEffect } from "react";
import "../styles/input.css";

export default function Input(props) {
  const {
    weight,
    setWeight,
    setNumOfTime,
    num_of_time,
    event,
    setEvent,
    setPart,
    postButton,
    lastTime,
    max
  } = props;

  return (
    <div className="input">
      <div className="wn">
        <div>
          <label>重量 (kg)</label>
          <br />
          <input
            className="inputText"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>回数</label>
          <br />
          <input
            className="inputText"
            type="number"
            valu={num_of_time}
            onChange={(e) => setNumOfTime(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label>部位</label>
        <br />
        <select className="part" onChange={(e) => setPart(e.target.value)}>
          <option>胸</option>
          <option>背中</option>
          <option>腕</option>
          <option>肩</option>
          <option>脚</option>
          <option>腹筋</option>
        </select>
      </div>

      <div>
        <label>種目</label>
        <br />
        <input
          className="inputText"
          type="text"
          valu={event}
          onChange={(e) => setEvent(e.target.value)}
        />
      </div>

      <div>
        <label>日付</label>
        <br />
        <input
          className="inputText"
          type="text"
          value={new Date().toLocaleDateString("sv-SE")}
          readOnly
        />
      </div>

      <div className="lastTime">
        <label>前回値</label>
        <br />
        <input
          className="lastTimeRecord"
          type="text"
          value={`${lastTime.weight} kg ✖️ ${
            lastTime.num_of_time
          } 回    日付：${lastTime.date.slice(0, 10)}`}
          readOnly
        />
      </div>

      <div className="lastTime">
        <label>Max 重量</label>
        <br />
        <input
          className="lastTimeRecord"
          type="text"
          value={`${max.weight} kg ✖️ ${
            max.num_of_time
          } 回    日付：${max.date.slice(0, 10)}`}
          readOnly
        />
      </div>

      <div>
        <button className="button" onClick={postButton}>
          登録
        </button>
      </div>
    </div>
  );
}
