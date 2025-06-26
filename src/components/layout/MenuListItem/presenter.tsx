import {
  Box,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import type { MenuListItem } from "@src/components/layout/MenuListItem/container";
import type { ComponentPropsWithoutRef } from "react";
import { NavLink } from "react-router-dom";

type Props = ComponentPropsWithoutRef<typeof MenuListItem>;

export const MenuListItemPresenter = ({ url, text, icon }: Props) => {
  return (
    <Box>
      <ListItem disablePadding={true} component={NavLink} to={url}>
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </Box>
  );
};
