import React from "react";
import Styles from "../styles.module.scss";
// @mui
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import Button from '@mui/material/Button';


import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

//* Cookies
import {  useCookies  } from 'react-cookie';


//* Logic - Init <Gate> for Recovery
//* {1}    =>    IF Cookie(User)     -> render()->reset()        ->    message()   
//* {2}    =>    IF! Cookie(User)    -> render()->recover()      ->    message()

//? Migrating the Recovery concept into two isolated functional components.
//? So Recovery will offer two buttons:
//? [Button 1] -> Forgotten Password -> link to /forgot-password/
//? [Button 2] -> Reset Password -> link to /reset-password/



//* Recovery
/// Main Function of Recovery
//? Isolate logicGate<forgot>
//? Isolate logicGate<reset> 

const Recovery = ({
  link_reset_password = "https://kbve.com/reset-password",
  link_forgot_password = "https://kbve.com/forgot-password",
  display = true,
}) => {



//* Recover
  const recover = () => (
      <Stack direction="column" alignItems="center" spacing={5}>
        <Paper variant="outlined" elevation={3}>
          
            <Button variant="contained" href={link_forgot_password}>Forgot Password</Button>
            <Button variant="contained" disabled>
              Change Email
            </Button>
            <Button variant="contained" disabled>
              Report Error
            </Button>
            <Button variant="contained" href={link_reset_password}>
              Reset Password
            </Button>

        </Paper>
      </Stack>
  );



//* Logic <Gate>
 return recover();
};

export default Recovery;
