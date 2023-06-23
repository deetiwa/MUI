import React, {useState} from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";

const Cards = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
             <Card style={{width:'200px'}}>
                <CardMedia component={'img'}
                height='140'
                 image="https://picsum.photos/200/300"
                 alt="test image" />
                 <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Web Design
                    </Typography>
                    <Typography variant="body2">
                    Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts.
                    </Typography>
                 </CardContent>
                 <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary" onClick={() => setOpen(true)}>Delete</Button>
                 </CardActions>
             </Card>
             <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Are You Sure ?</DialogTitle>
              <DialogContent>
                <DialogContentText>Are You Sure to delete this product ?</DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button>Delete</Button>
              </DialogActions>
             </Dialog>
        </div>
    )
}

export default Cards