import { Stack, Typography, Box, InputBase, TextField, Button } from '@mui/material'
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
import axios from 'axios';

export default function ContactPage() {

    const allRef = useRef([]);
    allRef.current = [];
    const aboutRef = useRef();
    const boxRef = useRef();
    const [messageData, setMessageData] = useState({
        email: "",
        message: ""
    });

    const onChange = (e) => {
        setMessageData({
            ...messageData,
            [e.target.name]: e.target.value,
        });
    }

    const sendMessage = async () => {
        try {
            const res = await axios.post("http://localhost:8000/message/?api_key=mero-54321-app", messageData);
            setMessageData({});

        } catch (e) {
            console.log(e);
        }
    }

    const addSlideUp = el => {
        if (el && !allRef.current.includes(el)) {
            allRef.current.push(el);
        }
    }
    useEffect(() => {

        gsap.to(aboutRef.current, {
            keyframes: {
                "0%": { color: "rgb(245, 81, 209)" },
                "25%": { color: "rgb(81,138,245)" },
                "50%": { color: "rgb(81, 245, 166)" },
                "75%": { color: "rgb(127, 245, 81)" },
                "100%": { color: "rgb(245, 81, 209)" },
            },
            duration: 45,
            repeat: -1,
        })
        gsap.to(boxRef.current, {
            keyframes: {
                "0": { opacity: 1, y: 0 },
                "50": { opacity: 1, y: 25 },
                "100": { opacity: 1, y: 0 }
            },
            duration: 10,
            repeat: -1,
            delay: 1
        });
        {
            allRef.current.forEach((el) => {
                gsap.fromTo(el, {
                    translateY: 20,
                    opacity: 0,
                }, {
                    translateY: 0,
                    opacity: 1,
                    duration: 1.25,
                    delay: .6,
                    ease: Power4.easeOut,
                    scrollTrigger: {
                        trigger: el
                    }
                })
            })
        }

    }, []);


    return (
        <Stack sx={{ width: "70%", padding: "50px 15%", backgroundColor: "primary.main", minHeight: "500px", gap: "10px" }} id="contact">
            <Typography variant='h4' sx={{ fontSize: "13px", letterSpacing: "3px", position: "absolute", left: "4%", top: "2960px", transform: "rotate(-90deg)", zIndex: 2 ,display:{md:"block",sm:"none",xs:"none"}}} ref={aboutRef}>CONTACT //</Typography>
            <Box sx={{ backgroundColor: "primary.light", width: "20px", height: "60px", position: "absolute", left: "7.1%", top: "2960px", zIndex: "1", opacity: "0" ,display:{md:"block",sm:"none",xs:"none"}}} ref={boxRef}></Box>
            <Typography variant='h3' sx={{
                fontSize: "30px", color: "white",
            }} ref={addSlideUp}>CONTACT</Typography>
            <input type={"email"} placeholder='Email' style={{ backgroundColor: "white", fontSize: "15px", padding: "5px 10px", width: "60%", marginTop: "80px", outline: "none" }} onChange={onChange} name="email" value={messageData.email} ref={addSlideUp} />
            <textarea placeholder='Message' style={{ resize: "none", width: "80%", height: "150px", fontSize: "15px", padding: "0px 10px", outline: "none" }} onChange={onChange} name="message" ref={addSlideUp} />
            <Button sx={{
                marginTop: "10px",
                width: { lg: "150px", md: "150px", sm: "150px", xs: "150px" },
                padding: "10px 0px",
                backgroundColor: "white",
                color: "primary.light", "&:hover": {
                    backgroundColor: "white",
                    color: "primary.main",
                }, fontSize: "16px", borderRadius: "0", zIndex: "3", fontWeight: 500
            }} onClick={() => {
                sendMessage();
            }} ref={addSlideUp}>
                Message
            </Button>
        </Stack>
    )
}
