import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { json } from "react-router-dom";


/// File is incomplete. You need to add input boxes to take input for users to login.

function Signup() {
    const [username , setUsername] = useState();
    const [password , setPassword] = useState();

    return( 
    <div style={{ display:"flex", flexDirection:"column"}}>
        
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 150,
                marginBottom: 5,
                
            }}>
                <Typography variant={'h6'}>Welcome to course selling website!</Typography>
            </div>
        
         <div style={{display:"flex",justifyContent:"center"}}>
            <Card varint={"outlined"} style= {{ display:"flex",flexDirection:"column", width:400, padding: 20}}>
                <TextField fullWidth={true}
                 label="Username" 
                 variant="outlined" 
                 onChange={(e)=>{
                    setUsername(e.target.value);
                    }} />
                <br/><br/>
                <TextField fullWidth={true} 
                label="Password"
                 variant="outlined"
                 onChange={(e)=>{
                    setPassword(e.target.value);
                    }} />
                <br/><br/>
                <Button variant ="contained"
                
                onClick={()=> {
                  
                  function callback1(data){
                      localStorage.setItem("token",data.token);
                  }

                  fetch("http://localhost:3000/admin/signup" , {
                    method : "POST",
                    body: JSON.stringify({
                        username : username,
                        password : password
                    }),
                    headers: {
                        "Content-Type" : "application/json"    
                    } 
                  }).then(
                    (res) => {
                        res.json().then(callback1);
                    }
                  )
                    
            }
        }>SignUp</Button>
                <br />
                
            </Card>
        </div>
    </div>
    )
}

export default Signup;