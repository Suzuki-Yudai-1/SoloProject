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
  const [part, setPart] = useState("胸");
  const [sortPart, setSortPart] = useState("全表示");
  const [id, setId] = useState(0);
  const [lastTime, setlastTime] = useState({
    weight: 0,
    num_of_time: 0,
    date: new Date().toLocaleDateString("sv-SE"),
  });
  const [max, setMax] = useState({
    weight: 0,
    num_of_time: 0,
    date: new Date().toLocaleDateString("sv-SE"),
  });

  useEffect(() => {
    if (sortPart === "全表示") {
      fetch("/api/record")
        .then((res) => res.json())
        .then((data) => setRecord(data));
    } else {
      fetch("/api/record")
        .then((res) => res.json())
        .then((data) => {
          setRecord(data.filter((obj) => obj["part"] === sortPart));
        });
    }
  }, [sortPart]);

  useEffect(() => {
    if (record.map((obj) => obj["event"]).includes(event)) {
      fetch("/api/record")
        .then((res) => res.json())
        .then((data) => {
          setlastTime(data.filter((obj) => obj["event"] === event)[0]);
          setMax(
            data
              .filter((obj) => obj["event"] === event)
              .sort((a, b) => b.weight - a.weight)[0]
          );
        });
    }
  }, [event]);

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
    window.location.reload()
  };

  const deleteButton = () => {
    fetch("/api/id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    window.location.reload()
  };

  return (
    <div className="root">
      <h1>Workout Record</h1>
      <Split className="flex" sizes={[70, 30]}>
        <Record
          record={record}
          setSortPart={setSortPart}
          setId={setId}
          deleteButton={deleteButton}
        ></Record>
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
          setlastTime={setlastTime}
          lastTime={lastTime}
          max={max}
        ></Input>
      </Split>
    </div>
  );
}
