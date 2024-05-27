import { useState, useEffect } from "react";
import Split from "react-split";
import "../styles/app.css";
import Record from "./Record";
import Input from "./Input";

export default function App() {
  const [record, setRecord] = useState([]);
  const [weight, setWeight] = useState(0);
  const [num_of_time, setNumOfTime] = useState(0);
  const [event, setEvent] = useState("");
  const [part, setPart] = useState("chest");
  const [sortPart, setSortPart] = useState("all");
  const [sortRecord, setSortRecord] = useState([]);

  useEffect(() => {
    if (sortPart === "all") {
      fetch("/api/record")
        .then((res) => res.json())
        .then((data) => setRecord(data));
    } else {
      fetch("/api/record")
        .then((res) => res.json())
        .then((data) =>
          setRecord(data.filter((obj) => obj["part"] === sortPart))
        );
    }
  }, [sortPart, record]);

  const postButton = () => {
    fetch("/api/record", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight: weight,
        num_of_time: num_of_time,
        event: event,
        part: part,
        date: new Date().toLocaleDateString("sv-SE"),
      }),
    });
  };

  return (
    <div className="root">
      <h1>Workout Record</h1>
      <Split className="flex" sizes={[70, 30]}>
        <Record record={record} setSortPart={setSortPart}></Record>
        <Input
          weight={weight}
          setWeight={setWeight}
          num_of_time={num_of_time}
          setNumOfTime={setNumOfTime}
          event={event}
          setEvent={setEvent}
          part={part}
          setPart={setPart}
          postButton={postButton}
        ></Input>
      </Split>
    </div>
  );
}
