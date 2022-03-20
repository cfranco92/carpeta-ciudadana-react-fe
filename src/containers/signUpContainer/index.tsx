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
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { setLoggedIn, setUser } from "../../store/account";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Box } from "@mui/system";
import { ProfileLayout } from "../../components/layouts";
import { User } from "../../models/user";
import { loginApi } from "../../services/login";
import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { usePostUserMutation } from "../../services/users";
import useStyles from "./styles";
import { usersApi } from "../../services/users";

interface State {
  email: string;
  password: string;
  showPassword: boolean;
  name: string;
  lastName: string;
  address: string;
}

const SignUpContainer = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    name: "",
    lastName: "",
    address: "",
    showPassword: false,
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [fetchLogin] = loginApi.endpoints.login.useLazyQuery();
  const [fetchUser] = usersApi.endpoints.fetchUser.useLazyQuery();

  const [postUser, result] = usePostUserMutation();

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

  const handleSignUp = async () => {
    const loginResponse = await fetchLogin({ email: "", password: "" });
    localStorage.setItem("token", loginResponse.status);
    // TODO: UID should be get from login API
    const uid = "21344j23hjl";
    dispatch(setLoggedIn(true));

    const user: User = {
      uid: uid,
      name: values.name,
      lastName: values.lastName,
      email: values.email,
      address: values.address,
    };
    dispatch(setUser(user));
    postUser({ user });

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
              avatar={
                <>
                  <IconButton
                    aria-label="Example"
                    onClick={() => navigate("/")}
                  >
                    <ArrowBackRoundedIcon />
                  </IconButton>
                </>
              }
              title={
                <>
                  <Typography variant="h5" component="div">
                    CARPETA CIUDADANA
                  </Typography>
                </>
              }
              sx={{
                ml: 2,
                mt: 6,
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
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
                <FormControl sx={{}} variant="standard">
                  <InputLabel htmlFor="standard-name">Nombre</InputLabel>
                  <Input
                    id="standard-name"
                    type="text"
                    value={values.name}
                    onChange={handleChange("name")}
                  />
                </FormControl>
                <FormControl sx={{}} variant="standard">
                  <InputLabel htmlFor="standard-lastName">Apellido</InputLabel>
                  <Input
                    id="standard-lastName"
                    type="text"
                    value={values.lastName}
                    onChange={handleChange("lastName")}
                  />
                </FormControl>
                <FormControl sx={{}} variant="standard">
                  <InputLabel htmlFor="standard-address">Dirección</InputLabel>
                  <Input
                    id="standard-address"
                    type="text"
                    value={values.address}
                    onChange={handleChange("address")}
                  />
                </FormControl>
              </Box>
              <Button
                variant="contained"
                sx={{ m: 3, mb: 8 }}
                onClick={handleSignUp}
              >
                Registrar
              </Button>
            </CardContent>
          </Card>
        </div>
      </ProfileLayout>
    </>
  );
};

export default SignUpContainer;
