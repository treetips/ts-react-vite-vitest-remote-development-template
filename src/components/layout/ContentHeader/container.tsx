import { ComponentProps } from "react";
import { Layout } from "../Layout";
import { ContentHeaderPresenter } from "./presenter";

type Props = Pick<ComponentProps<typeof Layout>, "pageTitle">;

export const ContentHeader = ({ pageTitle }: Props) => {
  return <ContentHeaderPresenter pageTitle={pageTitle} />;
};
