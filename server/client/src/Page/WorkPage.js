import { Stack, Typography, Box } from '@mui/material'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, Power4 } from 'gsap/all';
import '../style.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


gsap.registerPlugin(ScrollTrigger);


export default function WorkPage() {

    const Navigate = useNavigate();
    const { project } = useSelector((state) => state.Project);

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
        gsap.fromTo(".fade", {
            translateY: 20,
            opacity: 0,
        }, {
            translateY: 0,
            opacity: 1,
            duration: 1.25,
            delay: .6,
            ease: Power4.easeOut,
            scrollTrigger: {
                trigger: ".fade"
            }
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


    return (
        <Stack sx={{ width: {md:"70%",sm:"80%"}, padding: {md:"50px 15%",sm:"50px 5%",xs:"50px 5%"}, backgroundColor: "white", minHeight: "400px" }} id="project">
            <Typography variant='h4' sx={{ fontSize: "13px", letterSpacing: "3px", position: "absolute", left: "4%", top: "2260px", transform: "rotate(-90deg)", zIndex: 2, color: "primary.main",display:{md:"block",sm:"none",xs:"none"} }} >PROJECTS //</Typography>
            <Box sx={{ backgroundColor: "#e3e3e3", width: "20px", height: "60px", position: "absolute", left: "7.1%", top: "2260px", zIndex: "1", opacity: "0" ,display:{md:"block",sm:"none",xs:"none"}}} ref={boxRef}></Box>
            <Typography variant='h3' sx={{ fontSize: "30px" }} ref={aboutRef} className="fade">PROJECT</Typography>
            <div className='project-div'>
                {
                    project?.map((curr, indx) => (
                        <div className='project-container' key={indx} ref={addSlideUp} onClick={() => {
                            Navigate(`/${curr?._id}`);
                        }}>
                            <img src={curr?.image} className="project-image" alt='phot' />
                            <h4 className='project-name'>
                                {curr?.name}
                            </h4>
                        </div>
                    ))
                }
            </div>
        </Stack>
    )
}
