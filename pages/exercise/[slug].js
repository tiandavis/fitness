import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import styles from "@/styles/ExercisePage.module.css";

export default function ExercisePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [exercise, setExercise] = useState({});

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
  }, [slug]);

  return (
    <Layout title={exercise.name}>
      <div className={styles.article}>
        <img className={styles.image} src={exercise.image} alt={exercise.name} />

        <div className={styles.details}>
          <h2 className={styles["set-header"]}>Add set:</h2>
          <label className={styles.label} htmlFor="reps">Reps</label>
          <input className={styles.input} type="number" id="reps" name="reps" />

          <label className={styles.label} htmlFor="weight">Weight</label>
          <input className={styles.input} type="number" id="weight" name="weight" />

          <button className={styles.button}>+</button>

          <h2 className={styles["performance-header"]}>Performances:</h2>
          <div className={styles.performances}>
            <div className={styles.performance}>
              <h3 className={styles.day}>03/23/2024</h3>
              <div className={styles.sets}>
                <div className={styles.set}>
                  <div className={styles["reps-by-weight"]}>12 x 50 lb</div>
                  <div className={styles["estimated-one-rep-max"]}><strong>Estimated 1RM:</strong> 80 lb</div>
                </div>
                <div className={styles.set}>
                  <div className={styles["reps-by-weight"]}>12 x 50 lb</div>
                  <div className={styles["estimated-one-rep-max"]}><strong>Estimated 1RM:</strong> 80 lb</div>
                </div>
                <div className={styles.set}>
                  <div className={styles["reps-by-weight"]}>12 x 50 lb</div>
                  <div className={styles["estimated-one-rep-max"]}><strong>Estimated 1RM:</strong> 80 lb</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
