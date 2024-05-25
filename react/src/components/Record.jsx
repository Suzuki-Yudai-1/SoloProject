import React from "react";
import "../styles/record.css";

export default function Record(props) {
  const { record } = props;

  console.log(record[0])
  return (
    <div className="record">
      <table>
        <thead>
          <tr className="headline">
            <th>weight</th>
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
