import { Layout } from "@src/components/layout/Layout";
import { HomePagePresenter } from "@src/pages/HomePage";
import { useState } from "react";

export const HomePage = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => setCount(count + 1);
  return (
    <Layout pageTitle="Home" showPageTitle={false}>
      <HomePagePresenter count={count} onCound={handleCount} />
    </Layout>
  );
};
