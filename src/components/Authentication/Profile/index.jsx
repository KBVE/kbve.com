import React from "react";
import Styles from "../styles.module.scss";
// @mui
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


// Cookies - 10/7/2022
import {  useCookies  } from 'react-cookie';


// Logic
// {1}    =>    IF! Cookie(User)   -> redirect       ->    /login/
// {2}    =>    IF Cookie(User)    -> fetch($_GET)   ->    data()    ->  render ProfileCard(data) ?
// {3}    =>        ^             -> !fetch         ->    redirect  ->  /login/


const Profile = ({
  url = "https://api.kbve.com/api/users/me",
  display = true,
}) => {


/// Cookie -> [START]
  const [cookies, setCookie] = useCookies(['member']);
  const handleCookie = (data) => {
    setCookie('user', data, { path: '/', domain: '.kbve.com' });

  }
/// Cookie -> [STOP]

/// UX/UI -> [START]
const [expanded, setExpanded] = React.useState(false);
const [isLoading, setIsLoading] = React.useState(false);

const handleExpandClick = () => {
  setExpanded(!expanded);
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


/// UX/UI -> [STOP]

// //! Core -> [START] -> EOF
//   const handleJWT = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     await fetch(url, {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         identifier: email,
//         password,
//         token: verification,
//       }),
//     }).then(async (r) => {
//       // Login Confirmation Error
//       if (!r.ok) {
//         setIsLoading(false);
//         console.error(
//           `\tGrabProfile::An Error Occurred (${r.statusText})`
//         );
//         console.log(`Error: ${r}`);
//         return new Error(r.statusText);
//       }
//       const res = await r.json().then(data => {
//         console.log('Data:', data);
//         console.log('JWT', data.jwt);
//         console.log('User', data.user);
//         const _cookie = new Promise((resolve, reject) => {
//           resolve(handleCookie(data.jwt, data.user));
//         }).then(  window.location = 'https://kbve.com/profile' )
//       })

//       // Success upon Registering
//       console.log(
//         `\tGrabProfile::Success:\n${JSON.stringify(res, null, 2)}`
//       );
//     });
//   };
  /// Core -> [END]


  const profile = () => (
    <Stack direction="column" alignItems="center">
      <Paper variant="outlined">
          <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {cookies.user.username}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`${cookies.user.username}'s Profile`}
            subheader="Your Profile"
          />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            
              
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Public Key:</Typography>
              <Typography paragraph>
              {cookies.user.public_key}
              </Typography>
              <Typography paragraph>
                Extra Paragraph from React?
              </Typography>
              <Typography paragraph>
                Making me hungry.
                Add rice and stir very gently to distribute. Top with artichokes ...
                ...
                minutes more. (Discard any mussels that don&apos;t open.)
              </Typography>
              <Typography>
                Email: {cookies.user.email}
              </Typography>
              <Typography>
                Join: {cookies.user.createdAt}
              </Typography>
              <Typography>
                Update: {cookies.user.updatedAt}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Paper>
    </Stack>
  );

  if(!cookies.user)
  {
    window.location = 'https://kbve.com/login/';
  } else {
  return profile();
  }
};

export default Profile;
