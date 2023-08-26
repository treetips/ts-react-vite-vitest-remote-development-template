import { ReactNode, useState } from "react";
import { LayoutPresenter } from ".";

type Props = {
  pageTitle: string;
  showPageTitle?: boolean;
  children: ReactNode;
};

const drawerWidth = 240;

export const Layout = ({
  pageTitle,
  showPageTitle = true,
  children,
}: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <LayoutPresenter
      siteTitleText="Vite Example"
      pageTitle={pageTitle}
      showPageTitle={showPageTitle}
      drawerWidth={drawerWidth}
      openDrawer={mobileOpen}
      onToggleDrawer={handleDrawerToggle}
    >
      {children}
    </LayoutPresenter>
  );
};
