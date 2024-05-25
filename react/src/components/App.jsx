import { useState, useEffect } from "react";
import Split from "react-split";
import "../styles/app.css";
import Record from "./Record";
import Input from "./Input";

export default function App() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("/api/record")
      .then((res) => res.json())
      .then((data) => setRecord(data));
  }, []);

  return (
    <div className="root">
      <h1>Workout Record</h1>
      <Split className="flex" sizes={[65, 35]}>
        <Record record={record}></Record>
        <Input></Input>
      </Split>
    </div>
  );
}
