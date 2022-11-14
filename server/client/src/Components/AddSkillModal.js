import React, { useRef, useState } from 'react';
import { Modal, Box, Typography, InputBase, Button } from '@mui/material';
import axios from 'axios';


export default function AddSkillModal({ open, setOpen, setSkillUpload }) {

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

  const [img, setImg] = useState();

  function selectImage(e) {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  }


  const nameRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();

  const uploadSkill = async () => {
    try {
      const res = await axios.post("/skill/?api_key=mero-54321-app", {
        name: nameRef.current.value,
        type:typeRef.current.value,
        image: img,
        description:descriptionRef.current.value
      }, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setSkillUpload(true);
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
          Add Skill
        </Typography>
        <Box sx={{ backgroundColor: "secondary.light", borderRadius: "5px", padding: "2px 5px" }}>
          <InputBase placeholder="Name (i.e React JS,Flutter)" type={"text"} fullWidth inputRef={nameRef} />
        </Box>
        <Box sx={{ backgroundColor: "secondary.light", borderRadius: "5px", padding: "2px 5px" }}>
          <InputBase placeholder="Type" type={"text"} fullWidth inputRef={typeRef} />
        </Box>
        <Box sx={{ backgroundColor: "secondary.light", borderRadius: "5px", padding: "2px 5px" }}>
          <InputBase placeholder="Description" type={"text"} fullWidth inputRef={descriptionRef} />
        </Box>
        <input type={"file"} onChange={selectImage} />
        <Button sx={{
          backgroundColor: "secondary.light", "&:hover": {
            backgroundColor: "secondary.light",
          }, color: "secondary.main", fontSize: "16px", borderRadius: "0"
        }} onClick={() => {
          uploadSkill();
        }}>
          Post
        </Button>
      </Box>
    </Modal>
  )
}
