import { useState } from "react";
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: { id: number, title: string }[];
  setAssignments: (assignments: { id: number, title: string }[]) => void;
}

export function Assignments({assignments, setAssignments}: Props) {
  const [numOfCompleted, setNumOfCompleted] = useState(0)

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{numOfCompleted} of {assignments.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        { assignments.map(assignment => (
            <Assignment 
              key={assignment.id}
              id={assignment.id}
              title={assignment.title} 
              assignments={assignments}
              setAssignments={setAssignments}
              numOfCompleted={numOfCompleted}
              setNumOfCompleted={setNumOfCompleted}
            />
        ))}
      </div>
    </section>
  );
}
