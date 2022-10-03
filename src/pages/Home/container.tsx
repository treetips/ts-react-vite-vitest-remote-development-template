import { useState } from "react";
import { Layout } from "../../components/layout/Layout/container";
import { HomePagePresenter } from "./presenter";

export const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
  return (
    <Layout>
      <HomePagePresenter count={count} onCound={handleCount} />
    </Layout>
  );
};
