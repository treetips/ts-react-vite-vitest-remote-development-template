import { Layout } from "@src/components/layout/Layout";
import { ErrorPagePresenter } from "@src/pages/ErrorPage";

export const ErrorPage = () => {
  return (
    <Layout pageTitle="Error" breadcrumbs={[{ label: "Error", href: "/404" }]}>
      <ErrorPagePresenter />
    </Layout>
  );
};
