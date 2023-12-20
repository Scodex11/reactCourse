import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Iniciar sesión">
      <form>
        <Grid container>
          {/* Textfields */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="********"
              fullWidth
            ></TextField>
          </Grid>

          {/* Botones */}
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Typography>Login</Typography>
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
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
