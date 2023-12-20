import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({ drawerWidth }) => {
  return (
    <AppBar
      position="fixed" //va a estar fijo siempre
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` }, //si es sm va a ser el 100% menos el drawerWidth
        ml: { sm: `${drawerWidth}px` }, //si es sm va a ser el drawerWidth
      }}
    >
      {/* Toolbar */}
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" noWrap component='div' >Journal App</Typography>

          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
