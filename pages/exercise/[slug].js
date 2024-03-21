import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/ExercisePage.module.css";

export default function ExercisePage() {
  const router = useRouter();
  const { slug } = router.query;

  const [exercise, setExercise] = useState({});
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [performances, setPerformances] = useState([]);

  useEffect(() => {
    try {
      const exercises = JSON.parse(localStorage.getItem("exercises"));

      if (exercises) {
        const exercise = exercises.find((exercise) => exercise.id === slug);

        if (exercise) {
          setExercise(exercise);
        }
      }
    } catch(error) {
      console.error("Error fetching exercise from localStorage.", error);
    }

    try {
      const performances = JSON.parse(localStorage.getItem("performances"));

      if (performances) {
        // Sort performances by date in descending order
        performances.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Sort sets within each performance by timestamp in ascending order
        performances.forEach((performance) => {
          performance.sets.sort((a, b) => a.timestamp - b.timestamp);
        });

        setPerformances(performances);
      }
    } catch(error) {
      console.error("Error fetching performances from localStorage.", error);
    }
  }, [slug]);

  const handleRepsChange = (event) => {
    setReps(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const addSet = () => {
    const newSet = {
      reps: reps,
      weight: weight,
      estimatedOneRepMax: calculateEstimatedOneRepMax(weight, reps),
      date: formatDate(new Date()),
      timestamp: new Date(new Date().toLocaleString()).getTime(),
    };

    const performances = JSON.parse(localStorage.getItem("performances")) || [];

    const today = performances.find(performance => performance.date === newSet.date);

    if (today) {
      today.sets.push(newSet);
    } else {
      performances.unshift({
        date: formatDate(new Date()),
        sets: [newSet]
      });
    }

    localStorage.setItem("performances", JSON.stringify(performances));
    setPerformances(performances);
  };

  const calculateEstimatedOneRepMax = (weight, reps) => {
    return Math.round(weight * (36 / (37 - reps)));
  };

  const formatDate = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSet();
  };

  return (
    <Layout title={exercise.name}>
      <div className={styles.article}>
        <img className={styles.image} src={exercise.image} alt={exercise.name} />

        <div className={styles.details}>
          <form onSubmit={handleSubmit}>
            <h2 className={styles["set-header"]}>Add set:</h2>
            <label className={styles.label} htmlFor="reps">Reps</label>
            <input className={styles.input} type="number" id="reps" name="reps" value={reps} onChange={handleRepsChange} />

            <label className={styles.label} htmlFor="weight">Weight</label>
            <input className={styles.input} type="number" id="weight" name="weight" value={weight} onChange={handleWeightChange} />

            <button className={styles.button} type="submit">+</button>
          </form>

          <h2 className={styles["performance-header"]}>Performances:</h2>
          <div className={styles.performances}>
            {performances.map((performance, index) => (
              <div key={index} className={styles.performance}>
                <h3 className={styles.day}>{performance.date}</h3>
                <div className={styles.sets}>
                  {performance.sets.map((set, setIndex) => (
                    <div key={setIndex} className={styles.set}>
                      <div className={styles["reps-by-weight"]}>{set.reps} x {set.weight} lb</div>
                      <div className={styles["estimated-one-rep-max"]}><strong>Estimated 1RM:</strong> {set.estimatedOneRepMax} lb</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
