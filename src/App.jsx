import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import AppBar1 from "./components/AppBar";
import CreateCourse from './components/CreateCourse';
import Signup from './components/Signup';
import Courses from './components/Courses';
import Course from './components/Course';
import { RecoilRoot, useSetRecoilState } from 'recoil';
import axios from 'axios';
import { useEffect } from 'react';
import {userState} from '../store/atoms/user';


function App() {
    return (
        <RecoilRoot>
            <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}>
                

                <Router>
                    <InitUser />
                    <AppBar1 />
                    <Routes>
                        <Route path="/" element={<Landing />} />

                        <Route path="/Signup" element={<Signup />} />
                        <Route path="/about" element={<CreateCourse />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/courses/:courseId" element={<Course />} />
                    </Routes>
                </Router>

            </div>
        </RecoilRoot>
    );
}

function InitUser() {
    const setUsername = useSetRecoilState(userState);
    const init = async () => {
        try {
            const response = await axios.get('http://localhost:3000/admin/me', {

                headers: {
                    "Authorization": "bearer " + localStorage.getItem("token")
                }
            })

            if (response.data.username) {
                setUsername({
                    isLoading: false,
                    userEmail: response.data.username
                })
            } else {
                setUsername({
                    isLoading: false,
                    userEmail: null
                })
            }
        }
        catch (e) {
            setUsername({
                isLoading: false,
                userEmail: null
            })
        }
    };

    useEffect(()=>{
        init()
    } , []);

    return <></>
}
export default App;