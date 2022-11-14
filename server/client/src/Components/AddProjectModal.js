import React, { useRef, useState } from 'react';
import { Modal, Box, Typography, InputBase, Button, TextField } from '@mui/material';
import axios from 'axios';


export default function AddProjectModal({ open, setOpen, setProjectUpload }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  };



  const nameRef = useRef();
  const linkRef = useRef();
  const tagLineRef = useRef();
  const descriptionRef = useRef();
  const [img, setImg] = useState([]);


  function selectImage(e) {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  }

  const uploadProject = async () => {
    try {
      const res = await axios.post("/project/?api_key=mero-54321-app", {
        name: nameRef.current.value,
        description: descriptionRef.current.value,
        link: linkRef.current.value,
        tagline: tagLineRef.current.value,
        image: img
      }, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setProjectUpload(true);
    } catch (e) {

    }
  }



  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <Box sx={style}>
        <Typography variant="h2" sx={{ textAling: "center", overflow: "hidden", color: "primary.main", fontSize: "30px" }}>
          Add Project
        </Typography>
        <Box sx={{ backgroundColor: "secondary.light", borderRadius: "5px", padding: "2px 5px" }}>
          <InputBase placeholder="Name (i.e Corona Tracker)" type={"text"} fullWidth inputRef={nameRef} />
        </Box>
        <Box sx={{ backgroundColor: "secondary.light", borderRadius: "5px", padding: "2px 5px" }}>
          <InputBase placeholder="Tagline" type={"text"} fullWidth inputRef={tagLineRef} />
        </Box>
        <Box sx={{ backgroundColor: "secondary.light", borderRadius: "5px", padding: "2px 5px" }}>
          <InputBase placeholder="Link (i.e www.corona-tracker.com)" type={"url"} fullWidth inputRef={linkRef} />
        </Box>
        <TextField placeholder='Description' fullWidth multiline maxRows={4} inputRef={descriptionRef} />
        <input type={"file"} onChange={selectImage} id="button" />
        <Button sx={{
          backgroundColor: "secondary.light", "&:hover": {
            backgroundColor: "secondary.light",
          }, color: "secondary.main", fontSize: "16px", borderRadius: "0"
        }} onClick={() => {
          uploadProject();
        }}>
          Post
        </Button>
      </Box>
    </Modal>
  )
}
