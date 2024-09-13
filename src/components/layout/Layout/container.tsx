import { LayoutPresenter } from "@src/components/layout/Layout/presenter";
import { type ReactNode, useState } from "react";

type Props = {
  pageTitle: string;
  showPageTitle?: boolean;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
  children: ReactNode;
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
      siteTitleText="Vite Example"
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
