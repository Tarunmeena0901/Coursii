import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseState } from "../../store/atoms/course";
import { courseDescription, courseDetail, courseImage, isCourseLoading } from "../../store/slelectors/courseSelectors";
import { courseTitle } from "../../store/slelectors/courseSelectors";

function Course() {
    const setCourse = useSetRecoilState(courseState);
    const courseLoading = useRecoilValue(isCourseLoading);

    let { courseId } = useParams();


    const init = async () => {
        const response = await axios.get("http://localhost:3000/admin/courses/" + courseId, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })

        if(response.data.course){
            setCourse({
                isLoading: false,
                course: response.data.course
            });
        }
    };

    useEffect(()=>{
        init()
    },[])



    if (courseLoading) {
        return<div style={{marginTop: 300 , display: "flex", justifyContent: "center"}}>
        <CircularProgress />
    </div>
    }
    return <div>
        <Graytopper />
        <Grid container>
            <Grid item lg={8} md={12} sm={12}>
                <UpdatedCourse />
            </Grid>
            <Grid item lg={4} md={12} sm={12}>
                <CourseCard  />
            </Grid>
        </Grid>
    </div>
}

function CourseCard() {
    const title = useRecoilValue(courseTitle);
    const imageLink = useRecoilValue(courseImage);
    const description = useRecoilValue(courseDescription);
    
    return <Card style={{ margin: 10, width: 400, minHieght: 200 , border: "2px solid #28282B"}}>
        <img src={imageLink} alt="NA" width={400} />
        <Typography textAlign={"center"} variant={"h4"}>{title}</Typography>

        <Typography textAlign={"center"} variant={"subtitle1"}>{description}</Typography>


    </Card>
}

function UpdatedCourse() {
    const [courseDetail , setCourse] = useRecoilState(courseState);
    const [title, setTitle] = useState(courseDetail.course.title);
    const [description, setDec] = useState(courseDetail.course.Description);
    const [imageLink, setImage] = useState(courseDetail.course.imageLink);
    let { courseId } = useParams();

    return <div style={{ display: "flex", justifyContent: "center" }}>

        <Card varint={"outlined"} style={{ padding: 10, width: 500, marginTop: 100 , border: "2px solid #28282B" }}>
            <TextField fullWidth={true}
                value={title}
                label="title"
                variant="outlined"
                
                onChange={(e) => {
                    setTitle(e.target.value);
                }} />

            <br /><br />
            <TextField fullWidth={true}
                value={description}
                label="description"
                variant="outlined"
                onChange={(e) => {
                    setDec(e.target.value);
                }} />
            <br /><br/>
            
            <TextField fullWidth={true}
                value={imageLink}
                label="Image Link"
                variant="outlined"
                onChange={(e) => {
                    setImage(e.target.value);
                }} />
            <br /><br/>
            <Button variant="contained"
                onClick={async () => {
                    await axios.put("http://localhost:3000/admin/courses/" + courseId, {
                        method: "PUT",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            imageLink: imageLink,
                            published: true
                        }),
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    })
                    alert("course updated");
                    
                }
                }>Update</Button>





        </Card>
    </div>
}

function Graytopper() {
    const title = useRecoilValue(courseTitle);
    return <div style={{ backgroundColor: "#A020F0", width: "100vw", marginBottom: -150, height: 250, zIndex: 0 , top: 0 , border: "2px solid #28282B" }}>
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", height: 250 }}>
            <div>
                <Typography variant="h3" textAlign={"center"} style={{ fontWeight: 600, color: "white" }}>
                    {title}
                </Typography>
            </div>
        </div>

    </div>
}

export default Course;