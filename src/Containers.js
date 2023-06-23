import React from "react";
import { Typography, Container } from "@mui/material";
const Containers = () => {
    return (
        <div>
            <br></br>
            <Container sx={{background:'yellow'}} maxWidth="xs">
                <Typography variant="body2">
                    This is Extra Small
                </Typography>
            </Container>
            <br></br>
            <Container sx={{background:'yellow'}} maxWidth="sm">
                <Typography variant="body2">
                    This is Small
                </Typography>
            </Container>
            <br></br>
            <Container sx={{background:'yellow'}} maxWidth="md">
                <Typography variant="body2">
                    This is Medium
                </Typography>
            </Container>
            <br></br>
            <Container sx={{background:'yellow'}} maxWidth="lg">
                <Typography variant="body2">
                    This is Large
                </Typography>
            </Container>
            <br></br>
            <Container sx={{background:'yellow'}} maxWidth="xl">
                <Typography variant="body2">
                    This is Extra Large
                </Typography>
            </Container>
        </div>
    )
}

export default Containers;