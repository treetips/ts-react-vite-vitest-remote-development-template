import { Alert, AlertTitle, Box } from "@mui/material";

type Props = {
  statusCode?: number;
};

export const ErrorPagePresenter: React.FC<Props> = ({ statusCode = 404 }) => {
  const component = ((code: number) => {
    switch (code) {
      case 404:
        return (
          <Alert severity="warning">
            <AlertTitle>404 Not Found</AlertTitle>
          </Alert>
        );
      default:
        return (
          <Alert severity="error">
            <AlertTitle>500 Internal Server Error</AlertTitle>
          </Alert>
        );
    }
  })(statusCode);
  return <Box>{component}</Box>;
};
