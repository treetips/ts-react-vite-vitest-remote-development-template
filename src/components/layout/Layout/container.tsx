import { useState } from "react";
import { LayoutPresenter } from ".";

type Props = {
  pageTitle: string;
  showPageTitle?: boolean;
  children: React.ReactNode;
};

const drawerWidth = 240;

export const Layout: React.FC<Props> = ({
  pageTitle,
  showPageTitle = true,
  children,
}) => {
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
