import { useState } from "react";
import { HomePagePresenter } from ".";
import { Layout } from "../../components/layout/Layout";

export const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
  return (
    <Layout pageTitle="Home" showPageTitle={false}>
      <HomePagePresenter count={count} onCound={handleCount} />
    </Layout>
  );
};
