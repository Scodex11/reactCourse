import { Box,AppBar, Drawer, Grid, IconButton, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { LogoutOutlined, MenuOutlined, TurnedInNot } from "@mui/icons-material";

const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box 
      component = 'nav'
      sx = {{
        width: { sm: `${drawerWidth}px` },
        flexShrink: { sm: 0 },
      }}
    >
        <Drawer
          variant="permanent"
          open
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >

          <Toolbar>
            <Typography variant="h6" noWrap component='div' >Facundo Rodriguez</Typography>
          </Toolbar>
          <Divider />

          <List>
            {
              [1,2,3,4,5,6,7,8,9,10].map( text => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <TurnedInNot />
                    </ListItemIcon>

                    <Grid container >
                      <ListItemText primary = {text} />
                      <ListItemText secondary ={longText.slice(0, 30) + '...'}/>

                    </Grid>

                  </ListItemButton>
                </ListItem>
              ))
            }
          </List>


        </Drawer>
    </Box>
  );
};
