import { HomePagePresenter } from ".";
import { Layout } from "../../components/layout/Layout";

export const HomePage = () => {
  return (
    <Layout pageTitle="Home" showPageTitle={false}>
      <HomePagePresenter />
    </Layout>
  );
};
