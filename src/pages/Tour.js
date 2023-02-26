import React from 'react';
import  Container  from '@mui/material/Container';
import { Box, Typography } from '@mui/material';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordions from '../components/Accordion';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/Modal';



const Tour = () => {
  return (
    <Container sx={{width: 900}}>
    <Typography variant='h4' component='h3'marginTop={3} >
       Fall in love with vegas
    </Typography>
    <Box marginTop={3} sx={{display: 'flex'}}>
       <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt=""  height={325}/>
       <ImageCollage />
    </Box>
    <Box>
    <Typography variant='h6' component='h3'marginTop={3} >
       About this ticket
    </Typography>
    <Typography variant='paragraph' component='p'marginTop={3} >
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </Typography>
    </Box>

    <Box marginBottom={15}>
    <Typography variant='h6' component='h3' marginTop={3} marginBottom={2} >
       Frequently Asked Questions
    </Typography>
     <CustomizedAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour