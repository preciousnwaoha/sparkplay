import React from 'react'
import PaddedContainer from '../Layout/PaddedContainer'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import DarkModeModal from './DarkModeModal'

const GeneralSettings = () => {

    const [openDarkModal, setOpenDarkModal] = React.useState(false)

    const handleOpenDarkModal = () => { 
        setOpenDarkModal(true)
    }

    const handlCloseDarkModal = () => { 
        setOpenDarkModal(false)
    }

  return (
    <PaddedContainer>
        <Typography varaint="h3" sx={{
            fontSize: "1.25rem",
            fontWeight: 700,
            mt: 2,
        }}>General</Typography>

        <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "2px solid",
            borderColor: "grey.gray4",
            borderRadius: 2,
            my: 1,
            p: 2,
        }}>
        <Typography varaint="bosy1" sx={{
            fontSize: "1rem",
            fontWeight: 500,
        }}>Dark mode</Typography>
        <Typography varaint="bosy1" onClick={handleOpenDarkModal} sx={{
            fontSize: "1rem",
            fontWeight: 500,
            color: "color1.main",
            cursor: "pointer",
        }}>Off</Typography>
        </Box>
        <DarkModeModal open={openDarkModal} onClose={handlCloseDarkModal} />
    </PaddedContainer>
  )
}

export default GeneralSettings