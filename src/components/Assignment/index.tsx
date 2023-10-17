import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
  assignments: { id: number, title: string }[]
  setAssignments: (assignments: { id: number, title: string }[]) => void;
  numOfCompleted: number;
  setNumOfCompleted: (numOfCompleted: number) => void;
}

export function Assignment({id, title, assignments, setAssignments, numOfCompleted, setNumOfCompleted}: Props) {
  const [isCompleted, setIsCompleted] = useState(false)
  const checkContainer = isCompleted ? <BsFillCheckCircleFill size={20} /> : <div />
  const titleClass = isCompleted ? styles.textCompleted : ""

  const toggleCompleted = () => {
    if (isCompleted) {
      setIsCompleted(false)
      setNumOfCompleted(numOfCompleted - 1)
    } else {
      setIsCompleted(true)
      setNumOfCompleted(numOfCompleted + 1)
    }
  }

  const deleteAssignment = () => {    
    if (isCompleted) setNumOfCompleted(numOfCompleted - 1)
    setAssignments(assignments.filter(assignment => assignment.id !== id))
  }


  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer} onClick={toggleCompleted}>
        {checkContainer}
      </button>
      <p className={titleClass}>{title}</p>
      <button className={styles.deleteButton} onClick={deleteAssignment}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
