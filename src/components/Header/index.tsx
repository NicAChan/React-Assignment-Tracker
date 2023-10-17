import styles from "./header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { uppercase } from "../../helpers/stringHelpers";
import { BaseSyntheticEvent, useState } from "react";

type Props = {
  assignments: { id: number, title: string }[];
  setAssignments: (assignments: { id: number, title: string }[]) => void;
  aId: number;
  setAId: (aId: number) => void;
}

export function Header({assignments, setAssignments, aId, setAId}: Props) {
  const [isDisabled, setDisabled] = useState(true)
  const [newAssignment, setNewAssignment] = useState({ id: aId + 1, title: "" })

  const assignmentInputChange = (e: BaseSyntheticEvent) => {
    const assignmentInput = e.target.value.trim() 

    if (assignmentInput) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }

    setNewAssignment({ id: newAssignment.id, title: assignmentInput})
  } 

  const createButtonClick = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setAssignments([...assignments, newAssignment])
    setAId(aId + 1)
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={assignmentInputChange}/>
        <button id="create-button" onClick={createButtonClick}  disabled={isDisabled}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
