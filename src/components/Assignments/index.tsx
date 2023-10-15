import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

type Props = {
  assignmentTitles: string[]
}

export function Assignments({assignmentTitles}: Props) {
  const assignments = () => {
    return assignmentTitles.map(assignment => {
      return <Assignment key={assignmentTitles.indexOf(assignment)} title={assignment}/>
    })
  }

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignmentTitles.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>1 of {assignmentTitles.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {assignments()}
      </div>
    </section>
  );
}
