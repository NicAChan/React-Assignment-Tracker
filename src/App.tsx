import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [aId, setAId] = useState(0)
  const [assignments, setAssignments] = useState([{ id: aId, title: "Some Title" }])

  return (
    <>
      <Header assignments={assignments} setAssignments={setAssignments} aId={aId} setAId={setAId}/>
      <Assignments assignments={assignments} setAssignments={setAssignments}/>
    </>
  );
}

export default App;
