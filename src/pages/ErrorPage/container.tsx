import { ErrorPagePresenter } from ".";
import { Layout } from "../../components/layout/Layout";

export const ErrorPage = () => {
  return (
    <Layout pageTitle="Error" breadcrumbs={[{ label: "Error", href: "/404" }]}>
      <ErrorPagePresenter />
    </Layout>
  );
};
