import { ContentHeaderPresenter } from "@src/components/layout/ContentHeader/presenter";
import type { Layout } from "@src/components/layout/Layout/container";
import type { ComponentProps } from "react";

type Props = Pick<ComponentProps<typeof Layout>, "pageTitle">;

export const ContentHeader = ({ pageTitle }: Props) => {
  return <ContentHeaderPresenter pageTitle={pageTitle} />;
};
