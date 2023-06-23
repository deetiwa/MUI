import './App.css';
import React, {useState} from 'react';
import {Typography, AppBar,Tabs, Tab, Toolbar} from "@mui/material";
import Respons from './Respons';
// import DrawerMenu from './DrawerMenu';
// import Accord from './Accord';
// import ListsComponent from './ListsComponent';
// import Cards from './Card';
// import Form from './components/Form';
// import Modals from './Modals';
// import Containers from './Containers';


function App() {
  const [value, setvalue] = useState (0)
  return (
    <div>
      <AppBar>
        <Toolbar>
        <Typography variant='h4'>LOGO</Typography>
        <Tabs sx={{marginLeft:"auto"}}
        value={value}
        onChange={(e, val) => setvalue(val)} 
        textColor='inherit'
         indicatorColor='secondary'>
          <Tab label="Home"/>
          <Tab label="About"/>
          <Tab label="Contact"/>
        </Tabs>
        </Toolbar>
      </AppBar>

      {/* <Form/> */}
      <div style={{marginTop:100}} >
        {/* <Cards /> */}
        {/* <Modals /> */}
        {/* <Containers /> */}
        {/* <ListsComponent /> */}
        {/* <Accord /> */}
        {/* <DrawerMenu/> */}
        <Respons />
      </div>
      
    </div>
  );
}

export default App;
