import Excercises from "@/components/Exercises";
import Layout from "@/components/Layout";

export default function Index() {
  return (
    <Layout title={"Top Exercises"} home={true}>
      <Excercises />
    </Layout>
  );
}
