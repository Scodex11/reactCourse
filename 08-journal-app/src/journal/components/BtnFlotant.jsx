import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";

export const BtnFlotant = () => {
    return (
        <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 16, right: 16 }}>
          <Add />
        </Fab>
      );
}
