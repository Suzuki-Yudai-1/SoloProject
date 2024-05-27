import React from "react";
import "../styles/record.css";

export default function Record(props) {
  const { record, setSortPart, setId, deleteButton } = props;

  return (
    <div className="record">
      <select className="sort" onChange={(e) => setSortPart(e.target.value)}>
        <option>全表示</option>
        <option>胸</option>
        <option>背中</option>
        <option>腕</option>
        <option>肩</option>
        <option>脚</option>
        <option>腹筋</option>
      </select>
      <input
        className="deleteText"
        type="number"
        placeholder="Noを入力"
        onChange={(e) => setId(e.target.value)}
      />
      <button className="deleteButton" onClick={deleteButton}>
        削除
      </button>
      <table>
        <thead>
          <tr className="headline">
            <th width="50">No</th>
            <th width="100">重量 (kg)</th>
            <th width="100">回数</th>
            <th width="170">種目</th>
            <th width="100">部位</th>
            <th width="150">日付</th>
          </tr>
          {record.map((obj, index) => (
            <tr className="recordData" key={index}>
              <th>{obj.id}</th>
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
