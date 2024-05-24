import { useState } from "react"
import Split from "react-split"
import "../styles/app.css";
import Record from "./Record";
import Input from "./Input";


export default function App() {
  return (
    <div className="root">
      <h1>Workout Record</h1>
      <Split className="flex" sizes={[65, 35] }>
      <Record></Record>
      <Input></Input>
      </Split>
    </div>
  );
}
