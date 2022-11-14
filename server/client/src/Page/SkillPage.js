import { Stack, Typography, Box, Avatar, Tooltip, Fade } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
import { useSelector } from 'react-redux';
import '../style.css';

gsap.registerPlugin(ScrollTrigger);


export default function SkillPage() {

    const { skill } = useSelector((state) => state.Skill);

    const aboutRef = useRef();
    const boxRef = useRef();
    const allRef = useRef([]);
    allRef.current = [];

    const addSlideUp = el => {
        if (el && !allRef.current.includes(el)) {
            allRef.current.push(el);
        }
    }

    useEffect(() => {

        setTimeout(function () {
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
        }, 2000)

    }, []);
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

    }, []);




    return (
        <Stack sx={{ width: { md: "70%", sm: "80%" }, padding: { md: "50px 15%", sm: "50px 10%", xs: "50px 10%" }, backgroundColor: "primary.main", minHeight: "400px" }} id="skill">
            <Typography variant='h4' sx={{ fontSize: "13px", letterSpacing: "3px", position: "absolute", left: "5%", top: "1760px", transform: "rotate(-90deg)", zIndex: 2, display: { md: "block", sm: "none", xs: "none" } }} ref={aboutRef}>SKILLS //</Typography>
            <Box sx={{ backgroundColor: "primary.light", width: "20px", height: "60px", position: "absolute", left: "7.1%", top: "1760px", zIndex: "1", opacity: "0", display: { md: "block", sm: "none", xs: "none" } }} ref={boxRef}></Box>
            <Typography variant='h3' sx={{
                fontSize: "30px", color: "white", "&:hover": {
                    transform: "scale(1.1)"
                },
            }} ref={addSlideUp}>SKILLS</Typography>
            <div className="skill-div">
                {
                    skill?.map((curr, indx) => (
                        <Tooltip TransitionComponent={Fade} title={<Typography sx={{fontSize:"13px"}}>{curr?.description}</Typography>} key={indx} enterDelay={1000} leaveDelay={200} placement="bottom-end" >
                            <Stack sx={{
                                flexDirection: "row", alignItems: "center", gap: "10px", padding: "10px", borderRadius: "10px", cursor: "pointer", transition: "1s", ":hover": {
                                    backgroundColor: "primary.light"
                                }
                            }} >
                                <Avatar src={curr?.image} sx={{ width: { sm: "50px", xs: "40px" }, height: { sm: "50px", xs: "40px" } }} ref={addSlideUp} />
                                <Stack>
                                    <Typography variant='h4' sx={{ color: "white", fontSize: { md: "18px", sm: "16px", xs: "16px" } }} ref={addSlideUp}>
                                        {curr?.name}
                                    </Typography>
                                    <Typography variant='h5' sx={{ color: "#e3e3e3", fontSize: { md: "16px", sm: "14px", xs: "12px" } }} ref={addSlideUp}>
                                        {curr?.type}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Tooltip>
                    ))
                }
            </div>
        </Stack>
    )
}
