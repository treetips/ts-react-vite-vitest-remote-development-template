import { useState } from "react";
import { LayoutPresenter } from ".";

type Props = {
  pageTitle: string;
  showPageTitle?: boolean;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
  children: React.ReactNode;
};

const drawerWidth = 240;

export const Layout = ({
  pageTitle,
  showPageTitle = true,
  breadcrumbs,
  children,
}: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <LayoutPresenter
      siteTitleText="Example Site"
      pageTitle={pageTitle}
      showPageTitle={showPageTitle}
      drawerWidth={drawerWidth}
      openDrawer={mobileOpen}
      onToggleDrawer={handleDrawerToggle}
      breadcrumbs={breadcrumbs}
    >
      {children}
    </LayoutPresenter>
  );
};
