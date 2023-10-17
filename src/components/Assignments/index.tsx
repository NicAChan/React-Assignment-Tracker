import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignments: { title: string, isCompleted: boolean }[]
}

export function Assignments({assignments}: Props) {
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
            <Assignment key={assignments.indexOf(assignment)} title={assignment.title} isCompleted={assignment.isCompleted}/>
        ))}
      </div>
    </section>
  );
}
