import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [assignments, setAssignments] = useState([{ title: "Some Title", isCompleted: false }])

  return (
    <>
      <Header assignments={assignments} setAssignments={setAssignments}/>
      <Assignments assignments={assignments}/>
    </>
  );
}

export default App;
