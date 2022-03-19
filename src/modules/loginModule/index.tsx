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
import { setLoggedIn, setUser } from "../../store/account";

import { Box } from "@mui/system";
import { ProfileLayout } from "../../components/layouts";
import { loginApi } from "./../../services/login";
import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { usersApi } from "../../services/users";

interface State {
  password: string;
  showPassword: boolean;
}

const LoginModule = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });

  const [fetchLogin] = loginApi.endpoints.login.useLazyQuery();
  const [fetchUser] = usersApi.endpoints.fetchUser.useLazyQuery();

  let navigate = useNavigate();

  const dispatch = useAppDispatch();

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

  const handleLogin = async () => {
    const loginResponse = await fetchLogin({ email: "", password: "" });
    localStorage.setItem("token", loginResponse.status);
    // TODO: UID should be get from login API
    const uid = "21344j23hjl";
    // TODO: Save UID in account slice
    dispatch(setLoggedIn(true));

    const user = {
      uid: uid,
      name: "Cristian",
      lastName: "Franco",
      email: "cfrancobedoya@gmail.com",
      address: "Carrera 45",
    };
    dispatch(setUser(user));

    navigate("/");
  };

  return (
    <>
      <ProfileLayout page="login-page">
        <div className={classes.root}>
          <Card
            sx={{
              minWidth: "450px",
            }}
          >
            <CardHeader
              title="CARPETA CIUDADANA"
              sx={{
                mt: 6,
                display: "flex",
                flexDirection: "column",
              }}
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
              <Button
                variant="contained"
                sx={{ m: 3, mb: 8 }}
                onClick={handleLogin}
              >
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
