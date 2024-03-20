import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function ExercisePage() {
  const router = useRouter();
  const { slug } = router.query;
  const [exercise, setExercise] = useState();

  useEffect(() => {
    try {
      const exercises = JSON.parse(localStorage.getItem("exercises"));
      const exercise = exercises?.find((exercise) => exercise.id === slug);
      setExercise(exercise);
    } catch(error) {
      console.error("Error fetching exercise from localStorage.", error);
    }
  }, [slug]);

  return (
    <Layout title={exercise?.name}>
    </Layout>
  );
}
