import { Box, Stack, Typography } from '@mui/material'
import React from 'react';

export default function SingleMessage({message,name}) {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", padding: "8px 10px" ,zIndex: "3",backgroundColor:"white"}}>
            <Stack sx={{ flexDirection: "row",justifyContent:"space-between" }}>
                <Typography variant='h3' sx={{fontSize:"19px",overflow:"hidden"}}>{name}</Typography>
            </Stack>
            <div style={{width:"100%",height:"1px",backgroundColor:"gray",margin:"5px 0px"}}></div>
            <Typography variant='h5' sx={{fontSize:"17px",overflow:"hidden"}}>{message}</Typography>
        </Box>
    )
}
