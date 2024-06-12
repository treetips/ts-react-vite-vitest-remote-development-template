import { ContentHeaderPresenter } from "@src/components/layout/ContentHeader";
import { Layout } from "@src/components/layout/Layout";
import { ComponentProps } from "react";

type Props = Pick<ComponentProps<typeof Layout>, "pageTitle">;

export const ContentHeader = ({ pageTitle }: Props) => {
  return <ContentHeaderPresenter pageTitle={pageTitle} />;
};
