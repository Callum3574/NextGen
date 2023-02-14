import * as React from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useSignIn } from "react-auth-kit";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        NextGen Solutions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function LoginPage({ setLoginStatus, setUserSignedIn }) {
  const [currentCredentials, setCurrentCredentials] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    message: "",
    type: "",
  });

  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleCredentials = (e) => {
    setCurrentCredentials((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(currentCredentials),
      });
      const data = await res.json();

      if (!data.auth) {
        setErrorMessage({
          message: data.message,
          type: "error",
        });
        setLoginStatus(false);
      } else {
        setErrorMessage({
          message: data.message,
          type: "success",
        });
        setLoginStatus(true);
        console.log(data.result);
        setUserSignedIn(data.result);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }

      signIn({
        token: data.token,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: { name: data.result },
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("expiresIn", 3600);
      localStorage.setItem("tokenType", "Bearer");
      localStorage.setItem("authState", JSON.stringify({ name: data.result }));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAlerts = (message, type) => {
    return <Alert severity={type}>{message}</Alert>;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img alt="logo" src="images/logo/NEXTGEN_LOGO.png"></img>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleCredentials}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleCredentials}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Grid item xs={12}>
              {Object.keys(errorMessage).length > 0 &&
                handleAlerts(errorMessage.message, errorMessage.type)}
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>

              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
export default LoginPage;
