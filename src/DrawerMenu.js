import AirplayRoundedIcon from '@mui/icons-material/AirplayRounded';
import React, {useState} from "react";
import { Alert, Button, CircularProgress, Drawer, IconButton, LinearProgress,List, ListItemButton, ListItemText, Rating, Snackbar, Typography } from "@mui/material"

const DrawerMenu = () => {
    const courses =["react", "node", "mern", "Mongoose", "MongoDB"]
    const [value, setValue] = useState()
    const [open, setOpen] = useState(false)
    return (
        <div>
          <Button variant="contained" onClick={() => setOpen(true)}>Open</Button>
          <Drawer open={open} onClose={() => setOpen(false)}>
           <List>
            {
                courses.map(courses =>(
                    <ListItemButton onClick={() => setOpen(false)}>
                        <ListItemText primary = {courses}/>
                    </ListItemButton>
                ))
            }
           </List>
          </Drawer>

          <br></br>
             
             {/* Snackbar */}

          <Snackbar open={true} autoHideDuration={2000}>
            <Alert severity="success">This is Alert Snackbar</Alert>
          </Snackbar>

          <br></br>

          {/* Spinner or Progress */}

          <CircularProgress color="secondary" value={75}></CircularProgress>
          <LinearProgress></LinearProgress>
          <br></br>

          <Rating value={value} onChange={(e, val) => setValue(val)} size="large" precision={0.5}/>
            <Typography>
                Rated{value !== undefined ? value: 2.5} stars
            </Typography>
          <br></br>
          <IconButton onClick={() => Alert("Icon BTN")}>
           <AirplayRoundedIcon color='secondary'/>
           </IconButton>
        </div>
    )
}
export default DrawerMenu;