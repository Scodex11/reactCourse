import { Box, Grid, Paper, Typography } from "@mui/material";

export const NothingSelectedView = () => {
    return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: 'calc(100vh - 100px)', backgroundColor: "primary.main" }}
        >
          <Paper elevation={3} sx={{ padding: 3, borderRadius: 2, maxWidth: 400 }}>
            <Box textAlign="center">
              <Typography variant="h4" sx={{ mb: 2 }}>
                ¡Selecciona una nota!
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Haz clic en una nota para ver su contenido.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      );
}
