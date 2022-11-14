import React,{useState} from 'react';
import { Stack, Typography, Button } from '@mui/material'
import axios from 'axios';
import setCookie from '../hooks/setCookie.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../State Management/Features/User/UserSlice.js';

export default function LogInPage() {

        const [logData,setLogData] = useState({});
        const dispatch = useDispatch();

        const onChange = (e) => {
            setLogData({
                ...logData,
                [e.target.name] : e.target.value
            })
        }

        const logIn = async () => {
            try{
                const res = await axios.post("/user/login/?api_key=mero-54321-app",logData);
                if(res.data.token){
                    setCookie("user",res.data.token);
                    dispatch(addUser(res.data.token));
                }else{
                    alert(res.data.message);
                }
            }catch(e){
                console.log(e);
            }
        }

    return (
        <>
            <Stack sx={{ backgroundColor: "secondary.main", width: "30%", padding: "50px 2.5%", margin: "100px auto", gap: "30px" }}>
                <Typography variant='h3' sx={{ fontSize: "25px", color: "primary.main" }}>Log in</Typography>
                <input type={"email"} placeholder="Email" name='email' style={{ outline: "none", border: "none", padding: "10px 5px" }} onChange={onChange}/>
                <input type={"password"} placeholder="Password" name='password' style={{ outline: "none", border: "none", padding: " 10px 5px" }} onChange={onChange}/>
                <Button sx={{
                    color:"white",
                    backgroundColor: "primary.light", "&:hover": {
                        backgroundColor: "primary.main",
                    }, fontSize: "16px", borderRadius: "0", fontWeight: 500
                }} onClick={() => {
                    logIn();
                }}>
                    Log in
                </Button>
            </Stack>
        </>
    )
}
