import * as React from 'react';
import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  maxwidth: 400,
  bgcolor: 'background.paper',
  borderRadius: "2px",
  boxShadow: 24,
  p: 3,
  outline: "none",
  border: "none",
};

export default function DarkModeModal({open, onClose, }) {

  const isDarkMode = useSelector(state => state.ui.darkMode);
  
  const handleClose = () => onClose();

  console.log({isDarkMode})

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h4" sx={{
                mt: 0,
            }}>
              Dark mode
            </Typography>

            <Typography id="transition-modal-title" variant="body1"  sx={{
                mt: 0,
            }}>
              Feature Coming Soon!
            </Typography>
            

            <Grid container item justifyContent="flex-end">
            <Button variant="text" onClick={handleClose} sx={{
                fontSize: "1rem",
                color: "text.primary",
            }}>cancel</Button>
            </Grid>
            
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}