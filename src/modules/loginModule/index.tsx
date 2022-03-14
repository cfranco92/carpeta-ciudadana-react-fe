import React from "react";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Box } from "@mui/system";
import { ProfileLayout } from "../../components/layouts";
import useStyles from "./styles";

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const LoginModule = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <ProfileLayout page="login-page">
        <div className={classes.root}>
          <Card sx={{ minWidth: "450px" }}>
            <CardHeader
              title="CARPETA CIUDADANA"
              subheader="Iniciar Sesión"
              sx={{ mt: 5 }}
            />
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  m: 3,
                  "& > :not(style)": { mb: 3 },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
                <FormControl sx={{}} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <Button variant="contained" sx={{ m: 3, mb: 8 }}>
                Iniciar Sesión
              </Button>
            </CardContent>
          </Card>
        </div>
      </ProfileLayout>
    </>
  );
};

export default LoginModule;
