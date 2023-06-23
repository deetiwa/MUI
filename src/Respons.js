import { Grid } from "@mui/material";
import React from "react";

const Respons = () => {
    return (
       <Grid container>
         <Grid item xs={12}
          sm={8}
           md={6}
            lg={3}
             xl={1} 
             sx={{background: 'red'}}>
            Content A
         </Grid>
         <Grid item xs={12}
          sm={8} 
          md={6} 
          lg={3} 
          xl={1}
           sx={{background: 'yellow'}}>
            Content B
         </Grid>
       </Grid>
    )
}
export default Respons;