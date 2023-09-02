import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography';
import { userState } from "../../store/atoms/user";
import { isUserLoading } from "../../store/slelectors/isUserLoading";
import { userEmailState } from "../../store/slelectors/userEmail";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

function AppBar1({}) {
    const navigate = useNavigate();
    const userEmail = useRecoilValue(userEmailState);
    const isLoading = useRecoilValue(isUserLoading);
    const setUser = useSetRecoilState(userState);
    
    if(isLoading){
        return <div style={{marginTop: 400 , display: "flex", justifyContent: "center"}}>
            <CircularProgress />
        </div>
    }

    if (userEmail) {

        return (
            <div style={{ display: 'flex', justifyContent: "space-between", backgroundColor: "black", height: 40, padding: 10 }}>
               <div style={{display: "flex" , flexDirection: "row"}}>
           <div style={{ width: '10vw', cursor: "pointer" }} onClick={()=>{
                    navigate("/");
                }}>
                    <Typography variant={"h4"} color={"white"}>Coursii</Typography>
                </div >
                
                <div style={{ width: '8vw', cursor: "pointer", marginTop: 17 }} onClick={()=>{
                    navigate("/about");
                }}>
                    <Typography variant={"h7"} color={"white"}>Add Course</Typography>
                </div>
                <div style={{ width: '8vw', cursor: "pointer", marginTop: 17 }} onClick={()=>{
                    navigate("/courses");
                }}>
                    <Typography variant={"h7"} color={"white"}>Your Courses</Typography>
                </div>
              </div>  
              <Card varint={"outlined"} style={{ display: 'flex',flexDirection: "row-reverse", width: '50vw', backgroundColor:  '#28282B', padding: 5 }}>
              <div>
                <Button size="small" variant="contained"
                        onClick={() => {
                            localStorage.setItem("token", null);
                            setUser({
                                isLoading: false,
                                userEmail: null
                            })
                            navigate("/");
                        }
                        }> LogOut</Button>
                    </div>
                    <div style={{display: "flex", justifyContent:"row", marginRight: 10}}>
                 <Typography variant={"h6"} color={"white"}>
                            {userEmail}
                        </Typography>
                        </div>
                <div >
                
                </div>
            </Card>
            </div>
        )
    }
    return (
        <div style={{ display: 'flex', justifyContent: "space-between", backgroundColor: "black", height: 40, padding: 10 }}>
            <div style={{display: "flex" , flexDirection: "row"}}>
           <div style={{ width: '10vw', cursor: "pointer" }} onClick={()=>{
                    navigate("/");
                }}>
                    <Typography variant={"h4"} color={"white"}>Coursii</Typography>
                </div >
              </div>  
             <Card varint={"outlined"} style={{ display: 'flex', width: '50vw', backgroundColor:  '#28282B', padding: 5 }}>
                <div style={{display: "flex", justifyContent:"row", marginLeft: "39vw"}}>
                <div style={{marginRight: 10}}>
                <Button size="small" variant="contained" onClick={() => {
                    navigate("/");
                }}> SignIn</Button>
                </div>
                <div >
                <Button size="small" variant="contained" onClick={() => {
                    navigate("/Signup");
                }}> SignUp</Button>
                </div>
                </div>
            </Card>
        </div>
    )
}

export default AppBar1;