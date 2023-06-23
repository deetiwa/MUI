import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const ListsComponent = () => {
    const courses =["react", "node", "mern"]
    return (
        <div>
        <List sx={{width:250, background:'gray'}}>
            {courses.map(courses => (
          <ListItem>
            <ListItemButton>{'>'}</ListItemButton>
            <ListItemText primary={courses}/>
          </ListItem>
          ) )}
        </List>
        </div>
    )
}
export default ListsComponent;