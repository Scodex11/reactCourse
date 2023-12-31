import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { checkingAuth, startGoogleLogin } from "../../store/storeAuth/thunks";

export const LoginPage = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'fernando@gmail.com',
    password: '123456',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(checkingAuth())
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleLogin())
  }


  return (
    <AuthLayout title="Iniciar sesión">
      <form onSubmit={onSubmit}>
        <Grid container>
          {/* Textfields */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="correo@gmail.com"
              name="email"
              value={email}
              onChange={onInputChange}
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="********"
              name="password"
              value={password}
              onChange={onInputChange}
              fullWidth
            ></TextField>
          </Grid>

          {/* Botones */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
              onClick={onGoogleSignIn}
              variant="contained" 
              fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          {/* Link -> Crear cuenta */}

          <Grid container direction={"row"} justifyContent={"end"}>
            <Link component={RouterLink} color="inherit" to="/auth/register">
              ¡Regístrate!
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
