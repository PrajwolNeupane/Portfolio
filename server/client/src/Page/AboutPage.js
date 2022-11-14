import { Stack, Typography, useMediaQuery } from '@mui/material'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
import { Box } from '@mui/system';
import photo from '../image/prajwol.jpg';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import '../style.css';


gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {

    let image = useRef(null);
    let container = useRef(null);
    const title = useRef(null);
    const content = useRef(null);
    const aboutRef = useRef();
    const boxRef = useRef();

    const xsmall = useMediaQuery('(min-width:600px)');
    const small = useMediaQuery('(min-width:1200px)');



    useEffect(() => {
        gsap.fromTo(image.current, {
            scale: "0",
        }, {
            scale: "1", duration: 1.75,
            delay: .25,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: image.current
            }
        })
        gsap.fromTo(content.current, {
            opacity: 0
        }, {
            opacity: 1, duration: 0.8,
            delay: 1.2,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: content.current
            }
        })
        gsap.fromTo(title.current, {
            translateY: "150%",
            opacity: 0, scale: "0"
        }, {
            opacity: 1,
            duration: 1,
            scale: "1",
            translateY: "0%",
            delay: .2,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: title.current
            }
        })

        gsap.to(aboutRef.current, {
            keyframes: {
                "0": { opacity: 0 },
                "100": { opacity: 1 }
            },
            duration: .25,
            delay: 1
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
        gsap.to(".line", {
            keyframes: {
                "0%": { backgroundColor: "rgb(245, 81, 209)" },
                "25%": { backgroundColor: "rgb(81,138,245)" },
                "50%": { backgroundColor: "rgb(81, 245, 166)" },
                "75%": { backgroundColor: "rgb(127, 245, 81)" },
                "100%": { backgroundColor: "rgb(245, 81, 209)" },
            },
            duration: 45,
            delay: 0.6,
            repeat: -1,
        })
    }, []);

    useEffect(() => {
        // if (xsmall === true) {
        //     gsap.fromTo(container.current, {
        //         width: "0%",
        //         scale: "0.9",
        //         padding: "0px 0px"
        //     }, {
        //         scale: "1",
        //         width: "30%", padding: "60px 30px", duration: 1.5,
        //         delay: .2,
        //         ease: Power4.easeOut,
        //         scrollTrigger: {
        //             trigger: container.current
        //         }
        //     })
        // }
        // else if (small === true) {
        //     gsap.fromTo(container.current, {
        //         width: "0%",
        //         scale: "0.9",
        //         padding: "0px 0px"
        //     }, {
        //         scale: "1",
        //         width: "100%", padding: "30px 15px", duration: 1.5,
        //         delay: .2,
        //         ease: Power4.easeOut,
        //         scrollTrigger: {
        //             trigger: container.current
        //         }
        //     })
        // }
        // else {
        //     gsap.fromTo(container.current, {
        //         width: "0%",
        //         scale: "0.9",
        //         padding: "0px 0px"
        //     }, {
        //         scale: "1",
        //         width: "100%", padding: "60px 30px", duration: 1.5,
        //         delay: .2,
        //         ease: Power4.easeOut,
        //         scrollTrigger: {
        //             trigger: container.current
        //         }
        //     })

        // }
        if (xsmall && small) {
            gsap.fromTo(container.current, {
                width: "0%",
                scale: "0.9"
            }, {
                scale: "1",
                width: "30%", duration: 1.5,
                delay: .2,
                padding: "60px 30px",
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: container.current
                }
            })
        } else if (small === false && xsmall === true) {
            gsap.fromTo(container.current, {
                width: "0%",
                scale: "0.9"
            }, {
                scale: "1",
                width: "30%", duration: 1.5,
                delay: .2,
                padding: "20px 20px",
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: container.current
                }
            })
        } else if (small === false && xsmall === false) {
            gsap.fromTo(container.current, {
                width: "0%",
                scale: "0.9"
            }, {
                scale: "1",
                width: "310px", duration: 1.5,
                delay: .2,
                padding: "20px 15px",
                ease: Power4.easeOut,
                scrollTrigger: {
                    trigger: container.current
                }
            })
        }

    }, [xsmall, small]);


    return (
        <Stack sx={{ width: "86%", margin: "80px auto", gap: "60px", alignItems: "center", height: "100%" }} id="about">
            <Stack sx={{ width: { md: "80%", sm: "100%" }, margin: "0px auto" }}>
                <Typography variant='h4' sx={{ fontSize: "13px", color: "primary.main", letterSpacing: "3px", position: "absolute", left: "5%", top: "1160px", transform: "rotate(-90deg)", opacity: 0, display: { sm: "block", xs: "none" } }} ref={aboutRef}>ABOUT //</Typography>
                <Box sx={{ backgroundColor: "#e3e3e3", width: "20px", height: "60px", position: "absolute", left: "7.1%", top: "1160px", zIndex: "-1", opacity: "0", display: { lg: "block", sm: "none" } }} ref={boxRef}></Box>
                <img src={photo} ref={image} className="about-image" />
                <Box sx={{ width: { lg: "100%", md: "25%", sm: "20%" }, height: { lg: "400px", md: "400px", sm: "400px" }, backgroundColor: "#e3e3e3", position: { sm: "absolute", xs: "relative" }, top: { sm: "860px", xs: "0px" }, left: { sm: "50%", xs: "0px" } }} ref={container} >
                    <Stack ref={content} sx={{ height: "100%", gap: { lg: "20px", md: "10px", sm: "5px", xs: "5px" } }}>
                        <Typography variant='h3' sx={{ fontSize: { md: "30px", sm: "20px", xs: "16px" }, textAlign: "center", color: "primary.main" }} >ABOUT ME</Typography>
                        <Box sx={{ width: "135px", height: "3px", position: "absolute", top: "25%", zIndex: "-1", left: "19.5%", display: { lg: "block", md: "none",sm:"none",xs:"none" } }} className="line"></Box>
                        <Typography variant='h5' sx={{ color: "primary.main", fontSize: { md: "16px", sm: "14px", xs: "12px" } }} >Hi, I am Prajwol Neupane. I have been coding since 2020. Throughout my coding journey, I learn Java, Javascript, and different frameworks which you can see in the Skill Section of this website. I love creating websites and apps, you can see projects I have made in Project Section. Besides creating sites and apps, I found solving coding questions quite interesting.</Typography>
                        <Stack sx={{ flexDirection: "row", gap: "1%" }}>
                            < EmailIcon sx={{ fontSize: { md: "22px", sm: "18px", xs: "14px" }, color: "primary.main" }} />
                            <a href='mailto: prajwolneuapne68@example.com' style={{ textDecoration: "none" }}><Typography variant='h4' sx={{ color: "primary.main", fontSize: { md: "16px", sm: "14px", xs: "12px" } }} >prajwolneupane68@gmail.com</Typography></a>
                        </Stack>
                        <Stack sx={{ flexDirection: "row", gap: "1%" }}>
                            < PhoneIcon sx={{ fontSize: { md: "22px", sm: "18px", xs: "14px" }, color: "primary.main" }} />
                            <a href="tel:+9779865464114" style={{ textDecoration: "none" }}><Typography variant='h4' sx={{ color: "primary.main", fontSize: { md: "16px", sm: "14px", xs: "12px" } }}>9865464114</Typography></a>
                        </Stack>
                        <Stack sx={{ flexDirection: "row", gap: "1%" }}>
                            < LocationOnIcon sx={{ fontSize: { md: "22px", sm: "18px", xs: "14px" }, color: "primary.main" }} />
                            <a href="https://maps.google.com/maps?q=Kalanki,Kathmandu" target={"_blank"} rel="noreferrer" style={{ textDecoration: "none" }}><Typography variant='h4' sx={{ color: "primary.main", fontSize: { md: "16px", sm: "14px", xs: "12px" } }}>Kalanki,Kathmandu</Typography></a>
                        </Stack>
                        <Stack sx={{ flexDirection: "row", gap: "1%" }}>
                            < SchoolIcon sx={{ fontSize: { md: "22px", sm: "18px", xs: "14px" }, color: "primary.main" }} />
                            <a href="https://heraldcollege.edu.np/bachelors-in-computer-science" target={"_blank"} rel="noreferrer" style={{ textDecoration: "none" }}><Typography variant='h4' sx={{ color: "primary.main", fontSize: { md: "16px", sm: "14px", xs: "12px" } }}>BIT(Hons)</Typography></a>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}
