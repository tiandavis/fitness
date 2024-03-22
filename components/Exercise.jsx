import Link from "next/link";
import styles from "./Exercise.module.css";

export default function Excercise(props) {
  return (
    <Link
      href={`/exercise/${props.exercise.id}`}
      id={props.exercise.id}
      className={styles.exercise}
      tabIndex={0}
      aria-label={`${props.exercise.name}, ${props.exercise.muscle}`}
      data-testid="exercise"
    >
      <img className={styles.image} src={props.exercise.image} alt={props.exercise.name}/>
      <div className={styles.meta}>
        <h2 className={styles.name}>{props.exercise.name}</h2>
        <span className={styles.muscle}>{props.exercise.muscle}</span>
      </div>
      <img className={styles.arrow} src="https://storage.googleapis.com/fitbod-web-internal/arrow-right.svg" alt="Right Arrow" />
    </Link>
  );
}
