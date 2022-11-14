import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

export default function SingleAdminSkill({name,img}) {
  return (
    <Stack sx={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", backgroundColor: "white", padding: "4px 12px",width:"70%",borderRadius:"10px" }}>
    <Avatar src={img} />
    <Typography variant='h3' sx={{ fontSize: "20px", color: "primary.main", overflow: "hidden" }}>
      {name}
    </Typography>
  </Stack>
  )
}
