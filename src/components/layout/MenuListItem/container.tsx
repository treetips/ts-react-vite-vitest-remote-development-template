import { MenuListItemPresenter } from "@src/components/layout/MenuListItem/presenter";
import type { ReactNode } from "react";

type Props = {
  url: string;
  text: string;
  icon: ReactNode;
};

export const MenuListItem = (props: Props) => {
  return <MenuListItemPresenter {...props} />;
};
