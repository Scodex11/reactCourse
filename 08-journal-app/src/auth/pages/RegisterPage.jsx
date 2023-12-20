import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Crear cuenta">
      <form>
        <Grid container>
          {/* Textfields */}
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id="fullname"
              label="Nombre completo"
              type="text"
              placeholder="Nombre y apellidos"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id="email"
              label="Email"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id="password"
              label="Password"
              type="password"
              placeholder="********"
              fullWidth
            />
          </Grid>

          {/* Botones */}
          <Grid container spacing={3} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                <Typography>Crear cuenta </Typography>
              </Button>
            </Grid>
          </Grid>

          {/* Link -> Iniciar sesión */}
          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ¡Inicia sesión!
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
