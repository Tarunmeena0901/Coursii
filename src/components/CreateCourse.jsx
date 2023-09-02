import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

function CreateCourse() {
    const [title, setTitle] = useState();
    const [description , setDec] = useState();
    const [imageLink , setImage] = useState();
    const navigate = useNavigate();

    return ( 
        <div >
        
        
    
      <div style={{display:"flex",justifyContent:"center" , marginTop: 100}}>
       <Card varint={"outlined"} style= {{ display:"flex",flexDirection:"column-reverse", width:400, padding: 20, height: "400px" , border:"3px solid black"}}>
       
             <Button variant="contained"
             onClick={()=>{
             fetch("http://localhost:3000/admin/courses" , {
                method : "POST",
                body: JSON.stringify({
                    title : title,
                    description : description,
                    imageLink: imageLink,
                    published : true
                }),
                headers: {
                    "Content-Type" : "application/json", 
                    "Authorization" : "Bearer " + localStorage.getItem("token") 
                }
             }).then(()=>{
                navigate("/courses");
             })
            alert("Course Added");
            }
             
             }>Create</Button>
             <br />
             <TextField fullWidth={true}
             
             label="Image Link"
             variant="outlined"
             onChange={(e)=> {
                setImage(e.target.value);
             }} />
            
            <br/><br/>
            <TextField fullWidth={true}
            label="description" 
            variant="outlined"
            onChange={(e)=>{
                setDec(e.target.value);
            }} />
<br/><br/>
            <TextField fullWidth={true}
             
             label="title"
             variant="outlined"
             onChange={(e)=> {
                setTitle(e.target.value);
             }} />
        <br/><br/>
        <Typography variant={'h4'}>Add New Course</Typography>
        
           
            
            
        </Card>
    </div>
</div>
    )
}
export default CreateCourse;