import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import Card from '@mui/material/Card';
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function ShowCourses() {
    const [courses, setCourses] = React.useState([]);

   useEffect(()=>{
    fetch("http://localhost:3000/admin/courses" , {
        headers : {
            "Content-Type" : "application/json", 
            "Authorization" : "Bearer " + localStorage.getItem("token") 
        }
    }).then((res)=>{
        res.json().then((data)=>{
            setCourses(data.courses);
        })
    })
   },[]);

   return <div style={{display:"flex" , flexWrap: "wrap" , justifyContent: "center"}}>
   
   {courses.map(course => {
       return <Course course = {course}/>
   })}
</div>
}

export function Course({course}){
    const navigate = useNavigate();
    return <Card style= {{ margin:10, width:400, minHieght : 200}}>
        <img src={course.imageLink} alt="NA" width={400} />
        <br/>
        <Typography textAlign={"center"} variant={"h4"}>{course.title}</Typography>
        
        <Typography textAlign={"center"} variant={"subtitle1"}>{course.description}</Typography>
        
        
        <div style={{display: "flex" , justifyContent: "center", marginTop: 20 , marginBottom: 20}}>
        <Button variant="contained"
             onClick={()=>{
             navigate("/courses/" + course._id);
            }
             }>Update</Button>
         </div>    
        </Card>
        
    
}




export default ShowCourses;