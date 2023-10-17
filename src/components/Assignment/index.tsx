import styles from "./assignment.module.css";
import { TbTrash } from "react-icons/tb";

type Props = {
  title: string;
  isCompleted: boolean;
}

export function Assignment({title, isCompleted}: Props) {
  return (
    <div className={styles.assignment}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{title}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}
