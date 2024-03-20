import styles from "./Exercise.module.css";

export default function Excercises(props) {
  return (
    <div id={props.exercise.id} className={styles.exercise}>
      <img src={props.exercise.image} alt={props.exercise.name} />
      <div className="meta">
        <h2 className="name">{props.exercise.name}</h2>
        <span className="muscle">{props.exercise.muscle}</span>
      </div>
      <img src="https://storage.googleapis.com/fitbod-web-internal/arrow-right.svg" alt="Right Arrow" />
    </div>
  );
}