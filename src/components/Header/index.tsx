import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { BaseSyntheticEvent } from "react";

type Props = {
  newAssignment: string;
  setNewAssignment: (newAssignment: string) => void;
  assignmentTitles: string[];
}

export function Header({newAssignment, setNewAssignment, assignmentTitles}: Props) {
  const assignmentInputChange = (e: BaseSyntheticEvent) => {
    const createButton = document.getElementById("create-button")
    const assignmentInput = e.target.value.trim()    

    setNewAssignment(assignmentInput)
    if (assignmentInput) {
      createButton?.removeAttribute("disabled")
    } else {
      createButton?.setAttribute("disabled", "")
    }
  } 

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={e => assignmentInputChange(e)}/>
        <button id="create-button" onClick={() => assignmentTitles.push(newAssignment)} disabled>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
