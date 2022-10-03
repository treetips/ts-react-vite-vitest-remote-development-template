import { LayoutPresenter } from "./presenter";

type Props = {
  children: React.ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
  return <LayoutPresenter>{children}</LayoutPresenter>;
};
