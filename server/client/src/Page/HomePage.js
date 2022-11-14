import { Stack, Typography, Button } from '@mui/material'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
import { Link } from "react-scroll";


gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {

    const slideUp = useRef([]);
    slideUp.current = [];

    const addSlideUp = el => {
        if (el && !slideUp.current.includes(el)) {
            slideUp.current.push(el);
        }
    }

    useEffect(() => {

        slideUp.current.forEach((el) => {
            gsap.fromTo(el, {
                translateY: 20,
                opacity: 0,
            }, {
                translateY: 0,
                opacity: 1,
                duration: 1,
                delay: .6,
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: el
                }
            })
        })

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
        <Stack sx={{ width: "86%", margin: "0px auto", height: "580px", justifyContent: "center" }} id="home">
            <Typography variant='h4' sx={{ color: "primary.light", fontSize: {md:"60px",sm:"40px"}, lineHeight: {md:"60px",sm:"40px"} }} ref={addSlideUp}>
                I'm a
            </Typography>
            <Typography variant='h3' sx={{ fontSize: {md:"120px",sm:"100px"}, lineHeight: {md:"120px",sm:"100px"}}} ref={addSlideUp} className="color">
                Web
            </Typography>
            <Typography variant='h3' sx={{ fontSize: {md:"120px",sm:"100px"}, lineHeight: {md:"120px",sm:"100px"} }} ref={addSlideUp} className="color">
                Developer
            </Typography>
            <Link to="contact" spy={true} smooth={true} offset={-65} duration={500}> <Button sx={{
                marginTop: "10px",
                width: { lg: "150px", md: "150px", sm: "150px", xs: "150px" },
                padding: "0px",
                backgroundColor: "primary.light", "&:hover": {
                    backgroundColor: "primary.main",
                }, color: "white", fontSize: "20px", borderRadius: "0", zIndex: "3"
            }} ref={addSlideUp}>
                CONTACT ME
            </Button></Link>
        </Stack>
    )
}
