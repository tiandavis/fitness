import React, { useEffect, useState } from 'react';
import Exercise from './Exercise';

import styles from "./Exercises.module.css";

export default function Excercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("/fitbod-web-internal/exercises.json")
      .then(response => response.json())
      .then(data => setExercises(data))
      .catch(error => console.error("Error fetching exercises", error));
  }, []);

  return (
    <div className={styles.exercises}>
      {exercises.map(exercise => (
        <Exercise key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
}