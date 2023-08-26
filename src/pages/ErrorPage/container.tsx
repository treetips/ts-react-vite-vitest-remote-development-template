import { ErrorPagePresenter } from ".";
import { Layout } from "../../components/layout/Layout";

export const ErrorPage = () => {
  return (
    <Layout pageTitle="Error">
      <ErrorPagePresenter />
    </Layout>
  );
};
