import React, {useState} from "react";
import {TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, RadioGroup, FormLabel, Radio} from "@mui/material";

const Form = () => {
    const [inputs, setInputs] = useState ({
        name:'',
        email:'',
        password:'',
        courses:'',
        gender:"",
        terms:false
    });

    // Input Change Function

    const handleChange = (e) => {

        setInputs(prevState => ({
            ...prevState,[e.target.name]:[e.target.value]
        }));
    };

    // form handling

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputs);
    }

    return (
      <>
       <form onSubmit={handleSubmit}>

       <TextField 
       type="text" 
       name="name"
        variant="outlined"
         placeholder="Enter Name" 
         value={inputs.name}
         onChange={handleChange}
          sx={{margin:'20px'}} />
          <br></br>

        <TextField
         type="email"
          name="email"
           variant="outlined"
            placeholder="Enter Email"
             value={inputs.email}
             onChange={handleChange}
              sx={{margin:'20px'}} />
              <br></br>

          <TextField 
          type="password" 
            name="password"
             variant="outlined"
              placeholder="Enter Password"
               value={inputs.password}
               onChange={handleChange}
                sx={{margin:'20px'}} />
                <br></br>
                <FormControl fullWidth>
                  <InputLabel id="menu">Courses</InputLabel>
                  <Select labelId="menu" id="menu-list" label="courses" value={inputs.courses} onChange={handleChange} name="courses">
                    <MenuItem value={"mongodb"} >MongoDB</MenuItem>
                    <MenuItem value={"express"} >Express</MenuItem>
                    <MenuItem value={"node"} >Node</MenuItem>
                    <MenuItem value={"react"} >React</MenuItem>
                  </Select>
                </FormControl>
                <br></br>
                <FormGroup sx={{margin:'20px'}}>
                    <FormControlLabel
                     label="I Agree T&C."
                      control={<Checkbox
                      onChange={()=>setInputs(prevState => ({
                        ...prevState, terms: !inputs.terms
                      }))}
                      />}/>  
                </FormGroup>
                <br></br>
                <FormControl>
                <FormLabel>Gender</FormLabel>
                    <RadioGroup name="gender" onChange={handleChange}>
                   <FormControlLabel value={'male'} label="Male" control={<Radio />}/>
                   <FormControlLabel value={'female'} label="Female" control={<Radio />}/>
                   <FormControlLabel value={'other'} label="Other" control={<Radio />}/>
                    </RadioGroup>
                </FormControl>
                <br></br>
         <Button type="submit">Submit</Button>
        </form> 
        
      </>
    );
  }
  
  export default Form;