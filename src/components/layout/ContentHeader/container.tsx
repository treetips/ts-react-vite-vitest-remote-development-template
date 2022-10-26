import { ComponentProps } from "react";
import { Layout } from "../Layout";
import { ContentHeaderPresenter } from "./presenter";

type Props = Pick<ComponentProps<typeof Layout>, "pageTitle">;

export const ContentHeader: React.FC<Props> = ({ pageTitle }) => {
  return <ContentHeaderPresenter pageTitle={pageTitle} />;
};
