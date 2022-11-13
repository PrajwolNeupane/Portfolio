import { Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';



gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {

    const Navigate = useNavigate();

    useEffect(() => {
        gsap.to(".color", {
            keyframes: {
                "0%": { color: "rgb(245, 81, 209)" },
                "25%": { color: "rgb(81,138,245)" },
                "50%": { color: "rgb(81, 245, 166)" },
                "75%": { color: "rgb(127, 245, 81)" },
                "100%": { color: "rgb(245, 81, 209)" },
            },
            duration: 45,
            delay: 0.6,
            repeat: -1,
        })
    }, []);

    return (
        <>
            <Stack sx={{ flexDirection: {sm:"row",xs:"column"}, display: "flex", padding: { lg: "30px 7%", md: "30px 5%", sm: "30px 3%" }, alignItems: "center", justifyContent: "space-between", width: {lg:"86%",md:"90%",sm:"94%"}, position: "sticky", top: "0px", backgroundColor: "white", zIndex: 2 }}>
                <Typography variant='h3' sx={{ fontSize: "40px", transform: "rotate(0deg)", cursor: "pointer" ,color:"transparent"}} onClick={() => {
                    Navigate("/");
                }} className="color">PN</Typography>
                <Stack sx={{ flexDirection: "row", gap: { lg: "10%", xs: "4%" }, width: {lg:"50%",md:"60%",sm:"70%",sx:"80%",xs:"90%"}, marginLeft: {lg:"40%",md:"30%",sm:"20%",xs:"auto"} }}>
                    <Stack sx={{ alignItems: "center" }}>
                        <Link to="home" spy={true} smooth={true} offset={-65} duration={500}><Typography variant='h4' sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer" }}>HOME</Typography></Link>
                    </Stack>
                    <Stack sx={{ alignItems: "center" }}>
                        <Link to="about" spy={true} smooth={true} offset={-65} duration={500}> <Typography variant='h4' sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer" }}>ABOUT ME</Typography></Link>

                    </Stack>
                    <Stack sx={{ alignItems: "center" }}>
                        <Link to="skill" spy={true} smooth={true} offset={-65} duration={500}><Typography variant='h4' sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer" }}>SKILLS</Typography></Link>

                    </Stack>
                    <Stack sx={{ alignItems: "center" }}>
                        <Link to="project" spy={true} smooth={true} offset={-65} duration={500}> <Typography variant='h4' sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer" }}>PROJECT</Typography></Link>
                    </Stack>
                    <Stack sx={{ alignItems: "center" }}>
                        <Link to="contact" spy={true} smooth={true} offset={-65} duration={500}> <Typography variant='h4' sx={{ fontSize: "14px", color: "primary.light", cursor: "pointer" }} >CONTACT</Typography></Link>

                    </Stack>
                </Stack>
                <Stack sx={{ flexDirection: "row", gap: "20%", display: { lg: "flex", xs: "none" } }}>
                    <a href='https://github.com/PrajwolNeupane' target={"_blank"} rel="noreferrer"><GitHubIcon sx={{ fontSize: "26px", color: "primary.main" }} /></a>
                    <a href="https://www.linkedin.com/in/prajwol-neupane-b64418208/" target={"_blank"} rel="noreferrer"><LinkedInIcon sx={{ fontSize: "26px", color: "primary.main" }} /></a>
                    <a href="https://www.facebook.com/prajwolxhettry/" target={"_blank"} rel="noreferrer"><FacebookIcon sx={{ fontSize: "26px", color: "primary.main" }} /></a>
                </Stack>
            </Stack>
        </>
    )
}
