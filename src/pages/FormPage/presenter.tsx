import { Box, Button, Card, Stack, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FormState, UseFormRegisterReturn } from "react-hook-form";
import { FormType } from "./schema";

type Props = {
  validator: {
    lastName: UseFormRegisterReturn;
    firstName: UseFormRegisterReturn;
    age: UseFormRegisterReturn;
  };
  formState: FormState<FormType>;
  onSubmit: () => Promise<void>;
  onCancel: () => void;
};

export const FormPagePresenter = ({
  validator,
  formState: { errors, isDirty, isValid },
  onSubmit,
  onCancel,
}: Props) => {
  return (
    <Box display="flex" justifyContent="center">
      <Card elevation={5} sx={{ width: "70%" }}>
        <Box component="form" onSubmit={onSubmit} m={2}>
          <Stack spacing={2}>
            <TextField
              variant="standard"
              defaultValue="John"
              label="Last Name"
              placeholder="John"
              helperText={errors.lastName?.message}
              error={!!errors.lastName}
              {...validator.lastName}
            />

            <TextField
              variant="standard"
              label="First Name"
              placeholder="Does"
              helperText={errors.firstName?.message}
              error={!!errors.firstName}
              {...validator.firstName}
            />

            <TextField
              variant="standard"
              label="Age"
              placeholder="20"
              helperText={errors.age?.message}
              error={!!errors.age}
              {...validator.age}
            />

            <Grid2 container>
              <Grid2 xs={4}>
                <Button
                  variant="outlined"
                  color="error"
                  disabled={!isDirty}
                  onClick={onCancel}
                  fullWidth
                >
                  reset
                </Button>
              </Grid2>
              <Grid2 xs={4}></Grid2>
              <Grid2 xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!isDirty || !isValid}
                  fullWidth
                >
                  execute
                </Button>
              </Grid2>
            </Grid2>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
