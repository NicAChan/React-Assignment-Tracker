import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type Props = {
  id: number;
  title: string;
  isCompleted: boolean;
  assignments: { id: number, title: string, isCompleted: boolean }[]
  setAssignments: (assignments: { id: number, title: string, isCompleted: boolean }[]) => void;
}

export function Assignment({id, title, isCompleted, assignments, setAssignments}: Props) {
  const deleteAssignment = () => {    
    setAssignments(assignments.filter(assignment => assignment.id !== id))
  }

  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>{title}</p>
      <button className={styles.deleteButton} onClick={deleteAssignment}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
