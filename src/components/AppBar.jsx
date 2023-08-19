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

function AppBar({}) {
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
                <div style={{ width: '50vw', cursor: "pointer" }} onClick={()=>{
                    navigate("/");
                }}>
                    <Typography variant={"h4"} color={"white"}>Coursii</Typography>
                </div>
                <Card varint={"outlined"} style={{ display: 'flex', flexDirection: 'row-reverse', width: '50vw', backgroundColor: '#28282B', padding: 5 }}>
                    <Button variant="contained"
                        onClick={() => {
                            localStorage.setItem("token", null);
                            setUser({
                                isLoading: false,
                                userEmail: null
                            })
                            navigate("/");
                            

                        }
                        }> LogOut</Button>
                    <div>
                        <Typography variant={"h6"} color={"white"}>
                            {userEmail}
                        </Typography>

                    </div>

                </Card>
            </div>
        )
    }
    return (
        <div style={{ display: 'flex', justifyContent: "space-between", backgroundColor: "black", height: 40, padding: 10 }}>
            <div style={{ width: '50vw' , cursor: "pointer"}} onClick={()=>{
                    navigate("/");
                    }}>
                <Typography color={"white"} variant={"h4"}>Coursii</Typography>
            </div>
            <Card varint={"outlined"} style={{ display: 'flex', flexDirection: 'row-reverse', width: '50vw', backgroundColor:  '#28282B', padding: 5 }}>

                <Button variant="contained" onClick={() => {
                    navigate("/");
                }}> SignIn</Button>
                <Button variant="contained" onClick={() => {
                    navigate("/Signup");
                }}> SignUp</Button>
            </Card>
        </div>
    )
}

export default AppBar;