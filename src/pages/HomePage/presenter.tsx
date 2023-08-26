import { Alert, AlertTitle, Box, Card, Link, Typography } from "@mui/material";

export const HomePagePresenter = () => {
  const features = [
    { title: "TypeScript", href: "https://www.typescriptlang.org/" },
    { title: "React", href: "https://react.dev/" },
    { title: "Vite", href: "https://vitejs.dev/" },
    { title: "MUI", href: "https://mui.com/" },
    { title: "React Router", href: "https://reactrouter.com/en/main" },
    { title: "React Hook Form", href: "https://www.react-hook-form.com/" },
    { title: "Valibot", href: "https://valibot.dev/" },
  ] satisfies { title: string; href: string }[];

  return (
    <Card elevation={5}>
      <Alert variant="filled" severity="success">
        <AlertTitle>Form Example !!</AlertTitle>
        <Box component="ul" my={0} ml={-3}>
          {features.map((feature, index) => (
            <li key={index}>
              <Link
                href={feature.href}
                color="inherit"
                target="_blank"
                rel="noopener"
              >
                <Typography component="span">{feature.title}</Typography>
              </Link>
            </li>
          ))}
        </Box>
      </Alert>
    </Card>
  );
};
