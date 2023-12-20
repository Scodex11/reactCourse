import { BtnFlotant, ImageGallery } from "../components"
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{ mb: 1 }}>

        <Grid item>
            <Typography fontSize={38} fontWeight='light'> 19 de Diciembre, 2023</Typography>    
        </Grid>

        <Grid item>
            <Button>
                <SaveOutlined sx={{fontSize: 30, mr: 1}}/>
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                label="Título"
                variant="filled"
                fullWidth
                placeholder="Título de la nota"
                sx={{border: 'none', mb: 1 }}
            />
            
            <TextField
                type="text"
                label="Contenido"
                variant="filled"
                fullWidth
                placeholder="Contenido de la nota"
                multiline
                rows={10}
                sx={{border: 'none' }}
            />
        </Grid>

        <ImageGallery />

        <BtnFlotant/>
    </Grid>
  )
}
