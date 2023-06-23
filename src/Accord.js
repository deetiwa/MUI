import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, TextField, Typography } from "@mui/material";

const Accord = () => {
    const courses =["react", "node", "mern", "Mongoose", "MongoDB"]
    return (
        <div>
          <Accordion>
            <AccordionSummary expandIcon={'>'}>
                <Typography variant="h6">
               What is Mern Stack?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Dummy Summary
                </Typography>
            </AccordionDetails>
          </Accordion>
          {/* autocomplete */}

          <Autocomplete sx={{width:200}}
          options={courses}
          renderInput={(params) => <TextField {...params} label = 'Select Courses'/>}
          />
        </div>
    )
}
export default Accord;