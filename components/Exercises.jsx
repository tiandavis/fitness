import React, { useEffect, useState } from 'react';
import Exercise from './Exercise';

import styles from "./Exercises.module.css";

export default function Excercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("/fitbod-web-internal/exercises.json");
        const data = await response.json();
        setExercises(data);
        localStorage.setItem("exercises", JSON.stringify(data));
      } catch (error) {
        console.error("Error fetching exercises from host.", error);
      }
    })();
  }, []);

  return (
    <div className={styles.exercises}>
      {exercises.map(exercise => (
        <Exercise key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}
