import { Layout } from "@src/components/layout/Layout/container";
import { ErrorPagePresenter } from "@src/pages/ErrorPage/presenter";

export const ErrorPage = () => {
  return (
    <Layout pageTitle="Error" breadcrumbs={[{ label: "Error", href: "/404" }]}>
      <ErrorPagePresenter />
    </Layout>
  );
};
