import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginApi, useLoginMutation } from "./../../services/login";
import { setLoggedIn, setUser } from "../../store/account";

import { Box } from "@mui/system";
import { ProfileLayout } from "../../components/layouts";
import React from "react";
import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { usersApi } from "../../services/users";

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const LoginContainer = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [fetchLogin, { isLoading: isFetchLoginLoading }] = useLoginMutation();
  const [fetchUser, { isLoading: isFetchUserLoading }] =
    usersApi.endpoints.fetchUser.useLazyQuery();

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
    localStorage.setItem("token", String(loginResponse));
    // TODO: UID should be get from login API
    const uid = "21344j23hjl";
    dispatch(setLoggedIn(true));

    const userResponse = await fetchUser({ uid });
    console.log(userResponse);
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
          {isFetchUserLoading || isFetchLoginLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
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
                    <FormControl sx={{}} variant="standard">
                      <InputLabel htmlFor="standard-email">Email</InputLabel>
                      <Input
                        id="standard-email"
                        type="text"
                        value={values.email}
                        onChange={handleChange("email")}
                      />
                    </FormControl>
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
                    sx={{ ml: 3, mr: 3 }}
                    onClick={handleLogin}
                  >
                    Iniciar Sesión
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ m: 3, mb: 8 }}
                    onClick={() => navigate("/signup")}
                  >
                    Registrar Usuario
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </ProfileLayout>
    </>
  );
};

export default LoginContainer;
