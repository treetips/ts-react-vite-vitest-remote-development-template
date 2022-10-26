import { ErrorPagePresenter } from ".";
import { Layout } from "../../components/layout/Layout";

export const ErrorPage: React.FC = () => {
  return (
    <Layout pageTitle="Error">
      <ErrorPagePresenter />
    </Layout>
  );
};
