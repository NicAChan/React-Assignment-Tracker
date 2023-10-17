import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: { id: number, title: string, isCompleted: boolean }[];
  setAssignments: (assignments: { id: number, title: string, isCompleted: boolean }[]) => void;
}

export function Assignments({assignments, setAssignments}: Props) {
  let completed = 0
  assignments.forEach(assignment => {
    if (assignment.isCompleted) {
      completed++
    }
  })

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completed} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        { assignments.map(assignment => (
            <Assignment 
              key={assignment.id}
              id={assignment.id}
              title={assignment.title} 
              isCompleted={assignment.isCompleted}
              assignments={assignments}
              setAssignments={setAssignments}
            />
        ))}
      </div>
    </section>
  );
}
