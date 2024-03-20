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
      </div>
    </Layout>
  );
}
