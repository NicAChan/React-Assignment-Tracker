import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  const [newAssignment, setNewAssignment] = useState("")
  let assignmentTitles: string[] = ["Some Title"]

  return (
    <>
      <Header 
        newAssignment={newAssignment} 
        setNewAssignment={setNewAssignment} 
        assignmentTitles={assignmentTitles}
      />
      <Assignments assignmentTitles={assignmentTitles}/>
    </>
  );
}

export default App;
