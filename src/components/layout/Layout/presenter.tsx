import { Home as HomeIcon, Menu as MenuIcon } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Breadcrumbs,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import { ContentHeader } from "@src/components/layout/ContentHeader/container";
import type { Layout } from "@src/components/layout/Layout/container";
import { MenuListItem } from "@src/components/layout/MenuListItem/container";
import type { ComponentProps } from "react";
import { VscDebug as VscDebugIcon } from "react-icons/vsc";
import { Link } from "react-router-dom";

type Props = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  siteTitleText: string;
  drawerWidth: number;
  openDrawer: boolean;
  onToggleDrawer: () => void;
} & Pick<
  ComponentProps<typeof Layout>,
  "pageTitle" | "showPageTitle" | "breadcrumbs" | "children"
>;

export const LayoutPresenter = ({
  window,
  siteTitleText,
  pageTitle,
  showPageTitle,
  drawerWidth,
  openDrawer,
  onToggleDrawer,
  breadcrumbs,
  children,
}: Props) => {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List disablePadding={true}>
        <MenuListItem url="/" text="Home" icon={<HomeIcon />} />
        <MenuListItem
          url="/404"
          text="Debug 404"
          icon={<VscDebugIcon size={25} />}
        />
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onToggleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap={true} component="div">
            {siteTitleText}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={openDrawer}
          onClose={onToggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open={true}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          {showPageTitle === true && (
            <Box>
              <ContentHeader pageTitle={pageTitle} />
            </Box>
          )}

          {breadcrumbs && (
            <Box mt={1} mx={2}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">Home</Link>
                {breadcrumbs.map((breadcrumb) => (
                  <Link key={breadcrumb.href} to={breadcrumb.href}>
                    {breadcrumb.label}
                  </Link>
                ))}
              </Breadcrumbs>
            </Box>
          )}

          <Box p={2} textAlign="left">
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
