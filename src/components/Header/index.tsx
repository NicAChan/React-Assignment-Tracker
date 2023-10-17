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
  const [userInput, setUserInput] = useState("")

  const assignmentInputChange = (e: BaseSyntheticEvent) => {
    if (e.target.value.trim()) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }

    setUserInput(e.target.value)
  } 
  
  const createButtonClick = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    setAssignments([...assignments, { id: aId + 1, title: userInput.trim()}])
    setAId(aId + 1)

    setUserInput("")
    setDisabled(true)
  }

  return (
    <header className={styles.header}>
      {/* This is simply to show you how to use helper functions */}
      <h1>{uppercase("bcit")} Assignment Tracker</h1>
      <form className={styles.newAssignmentForm}>
        <input placeholder="Add a new assignment" type="text" onChange={assignmentInputChange} value={userInput}/>
        <button id="create-button" onClick={createButtonClick}  disabled={isDisabled}>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
