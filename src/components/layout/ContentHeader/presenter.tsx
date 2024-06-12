import { Card, Typography } from "@mui/material";
import { Layout } from "@src/components/layout/Layout";
import { ComponentProps } from "react";

type Props = Pick<ComponentProps<typeof Layout>, "pageTitle">;

export const ContentHeaderPresenter = ({ pageTitle }: Props) => {
  return (
    <Card
      elevation={8}
      sx={{
        paddingTop: (theme) => theme.spacing(4),
        paddingBottom: (theme) => theme.spacing(4),
        bgcolor: (theme) => theme.palette.primary.main,
        color: (theme) => theme.palette.primary.contrastText,
      }}
    >
      <Typography variant="h3">{pageTitle}</Typography>
    </Card>
  );
};
