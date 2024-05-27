import React from "react";
import "../styles/record.css";

export default function Record(props) {
  const { record, setSortPart } = props;

  return (
    <div className="record">
      <select className="sort" onChange={(e) => setSortPart(e.target.value)}>
        <option>all</option>
        <option>chest</option>
        <option>back</option>
        <option>arm</option>
        <option>shoulder</option>
        <option>leg</option>
        <option>abs</option>
      </select>

      <table>
        <thead>
          <tr className="headline">
            <th>weight (kg)</th>
            <th>num_of_time</th>
            <th>event</th>
            <th>part</th>
            <th>date</th>
          </tr>
          {record.map((obj, index) => (
            <tr className="recordData" key={index}>
              <th>{obj.weight}</th>
              <th>{obj.num_of_time}</th>
              <th>{obj.event}</th>
              <th>{obj.part}</th>
              <th>{obj.date.slice(0, 10)}</th>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}
