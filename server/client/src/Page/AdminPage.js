import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Stack, Typography, Snackbar } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import SingleAdminSkill from '../Components/SingleAdminSkill';
import AddIcon from '@mui/icons-material/Add';
import AddSkillModal from '../Components/AddSkillModal';
import AddProjectModal from '../Components/AddProjectModal';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SingleMessage from '../Components/SingleMessage.js';
import { useSelector,useDispatch} from 'react-redux';
import Cookies from 'js-cookie';
import { addUser } from '../State Management/Features/User/UserSlice';



export default function AdminPage() {

  const { project } = useSelector((state) =>  state.Project );
  const { skill } = useSelector((state) =>  state.Skill );
  const { message } = useSelector((state) =>  state.Message );

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [skillOpen, setSkillOpen] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [skillUpload, setSkillUpload] = useState(false);
  const [projectUpload, setProjectUpload] = useState(false);

  const LogOut = () => {
    Cookies.remove("user");
    dispatch(addUser(null));
  }


  return (
    <>
      <Box sx={{ backgroundColor: "secondary.main", minHeight: "100vh" }}>
        <Stack sx={{ flexDirection: "row" }}>
          {
            isMessage === true ? <Stack sx={{ margin: "20px 20px 20px 22%", width: "100%", gap: "40px" }}>
              <Typography variant='h2' sx={{ fontSize: "40px", color: "primary.main" }}>
                Messages
              </Typography>
              <Stack gap="20px">
                {
                message?.map((curr, indx) => {
                  return <SingleMessage key={indx}  message={curr.message} name={curr?.email}/>
                })
              }
              </Stack>
            </Stack> : <Stack sx={{ margin: "20px 0px 20px 22%", width: "100%", gap: "40px" }}>
              <Typography variant='h2' sx={{ fontSize: "40px", color: "primary.main" }}>
                Admin Dashboard
              </Typography>
              <Typography variant='h3' sx={{ fontSize: "30px", color: "primary.main", overflow: "hidden" }}>
                Skills
              </Typography>
              <div className="admin-grid" style={{display:"grid",gridTemplateColumns:"auto auto auto auto",gridRowGap:"10px"}}>
                {
                  skill?.map((curr, indx) => {
                    return <SingleAdminSkill key={indx} name={curr.name} img={curr.image} />
                  })
                }
              </div>
              <Typography variant='h3' sx={{ fontSize: "30px", color: "primary.main", overflow: "hidden" }}>
                Project
              </Typography>
              <Stack sx={{ gap: "10px" }}>
                {
                  project?.map((curr, indx) => (
                    <Typography variant='h4' sx={{ fontSize: "30px", color: "primary.main", overflow: "hidden" }} key={indx}>{curr?.name}</Typography>
                  ))
                }

              </Stack>

            </Stack>
          }
          <Stack sx={{ backgroundColor: "primary.main", width: "18%", padding: "20px 1%", gap: "20px", height: "93.8vh", position: "fixed" }}>
            {isMessage === true ? <Typography variant='h2' sx={{ fontSize: "30px", overflow: "hidden", color: "white", cursor: "pointer" }} onClick={() => {
              setIsMessage(false);
            }}>Hello, Prajwol</Typography> : <Typography variant='h2' sx={{ fontSize: "30px", overflow: "hidden", color: "secondary.main", cursor: "pointer" }} onClick={() => {
              setIsMessage(false);
            }}>Hello, Prajwol</Typography>}
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10px" }}>
              <Avatar src={"https://portfolio-f40a8.web.app/static/media/prajwol.fb0313815dd2a7bec948.jpg"} sx={{ width: "40px", height: "40px" }} />
              <Typography variant='h3' sx={{ fontSize: "18px", overflow: "hidden", color: "white" }}>Prajwol Neupane</Typography>
            </Stack>
            <Typography variant='h4' sx={{ fontSize: "14px", overflow: "hidden", color: "white" }}>{"prajwolneupane68@gmail.com"}</Typography>
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10%", overflow: "hidden" }} >
              <LogoutIcon sx={{ fontSize: "25px", color: "white" }} />
              <Typography variant='h3' sx={{ fontSize: "18px", overflow: "hidden", color: "white", overflow: "hidden", cursor: "pointer" }} onClick={() => {
                LogOut();
              }}>LogOut</Typography>
            </Stack>
            {skillOpen === true ? <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10%", overflow: "hidden" }}>
              <AddIcon sx={{ fontSize: "25px", color: "secondary.main" }} />
              <Typography variant='h3' sx={{ fontSize: "18px", overflow: "hidden", color: "secondary.main", overflow: "hidden", cursor: "pointer" }} onClick={() => {
                setSkillOpen(true);
              }}>Add Skills</Typography>
            </Stack> : <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10%", overflow: "hidden" }}>
              <AddIcon sx={{ fontSize: "25px", color: "white" }} />
              <Typography variant='h3' sx={{ fontSize: "18px", overflow: "hidden", color: "white", overflow: "hidden", cursor: "pointer" }} onClick={() => {
                setSkillOpen(true);
              }}>Add Skills</Typography>
            </Stack>}
            {projectOpen === true ? <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10%", overflow: "hidden" }}>
              <AddIcon sx={{ fontSize: "25px", color: "secondary.main" }} />
              <Typography variant='h3' sx={{ fontSize: "18px", overflow: "hidden", color: "secondary.main", overflow: "hidden", cursor: "pointer" }} onClick={() => {
                setProjectOpen(true);
              }}>Add Project</Typography>
            </Stack> : <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10%", overflow: "hidden" }}>
              <AddIcon sx={{ fontSize: "25px", color: "white" }} />
              <Typography variant='h3' sx={{ fontSize: "18px", overflow: "hidden", color: "white", cursor: "pointer" }} onClick={() => {
                setProjectOpen(true);
              }}>Add Project</Typography>
            </Stack>}
            {isMessage === true ? <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10%", overflow: "hidden" }}>
              <ChatBubbleOutlineIcon sx={{ fontSize: "25px", color: "secondary.main" }} />
              <Typography variant='h3' sx={{ fontSize: "18px", overflow: "hidden", color: "secondary.main", cursor: "pointer" }} onClick={() => {
                setIsMessage(true);
              }}>Messages</Typography>
            </Stack> : <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "10%", overflow: "hidden" }}>
              <ChatBubbleOutlineIcon sx={{ fontSize: "25px", color: "white" }} />
              <Typography variant='h3' sx={{ fontSize: "18px", color: "white", overflow: "hidden", cursor: "pointer" }} onClick={() => {
                setIsMessage(true);
              }}>Messages</Typography>
            </Stack>}
          </Stack>
        </Stack>
        <AddSkillModal open={skillOpen} setOpen={setSkillOpen} setSkillUpload={setSkillUpload} />
        <AddProjectModal open={projectOpen} setOpen={setProjectOpen} setProjectUpload={setProjectUpload} />
        <Snackbar
          open={skillUpload}
          autoHideDuration={6000}
          onClose={() => {
            setSkillUpload(false);
          }}
          message="Skill Upload Successfully"
        />
        <Snackbar
          open={projectUpload}
          autoHideDuration={6000}
          onClose={() => {
            setProjectUpload(false);
          }}
          message="Project Upload Successfully"
        />
      </Box>
    </>
  )
}
