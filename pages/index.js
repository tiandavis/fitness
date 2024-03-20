import Excercises from "@/components/Exercises";
import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout title="Top Exercises" index={true}>
      <Excercises />
    </Layout>
  );
}
