import React from "react";
import Styles from "../styles.module.scss";
// @mui
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";

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

//* [hCaptcha]
/// hCaptcha -> [START]
const captchaRef = React.useRef(null);
const hCaptchaKey = "e77af3f6-a0e3-44b7-82f8-b7c098d38022";
const [verification, setVerification] = React.useState(false);
/// hCaptcha -> [END]

//* [Regex]
/// Regex Validate Email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

//* Recovery
/// Main Function of Recovery
//? Isolate logicGate<reset> 
//? Isolate logicGate<recover>
const Recovery = ({
  url_reset_password = "https://api.kbve.com/api/auth/reset-password",
  url_forgot_password = "https://api.kbve.com/api/auth/forgot-password",
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
/// UX/UI -> [STOP]


// //! Core -> [START] -> EOF
//* handleForm
  const handleJWT = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: email,
        token: verification,
      }),
    }).then(async (r) => {
      // Login Confirmation Error
      if (!r.ok) {
        setIsLoading(false);
        console.error(
          `\tGrabProfile::An Error Occurred (${r.statusText})`
        );
        console.log(`Error: ${r}`);
        return new Error(r.statusText);
      }
      const res = await r.json().then(data => {
        console.log('Data:', data);
        console.log('JWT', data.jwt);
        console.log('User', data.user);
        const _cookie = new Promise((resolve, reject) => {
          resolve(handleCookie(data.jwt, data.user));
        }).then(  window.location = 'https://kbve.com/profile' )
      })

      // Success upon Registering
      console.log(
        `\tGrabProfile::Success:\n${JSON.stringify(res, null, 2)}`
      );
    });
  };
  /// Core -> [END]

//* Recover
  const recover = () => (
      <Stack direction="column" alignItems="center">
        <Paper variant="outlined">
          <Box component="form" maxWidth="sm">
            <Stack
              direction="column"
              justifyContent="center"
              spacing={2}
              p={2}
              sx={{ flex: 1 }}
            >
              <TextField
                id={`email-input`}
                type="email"
                label="Email"
                value={email}
                error={email !== "" && !validateEmail(email)}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              
              <HCaptcha
                ref={captchaRef}
                sitekey={hCaptchaKey}
                onVerify={(token, eKey) => handleVerificationSuccess(token, eKey)}
              />
              <Collapse in={!!verification}>
                <Stack direction="column" alignItems="flex-end">
                  <Button variant="contained" fullWidth onClick={handleConfirm} disabled={isLoading}>
                    Recover
                  </Button>
                </Stack>
              </Collapse>
            </Stack>
          </Box>
        </Paper>
      </Stack>
  );


//* Reset
const reset = () => (
  <Stack direction="column" alignItems="center">
    <Paper variant="outlined">
      <Box component="form" maxWidth="sm">
        <Stack
          direction="column"
          justifyContent="center"
          spacing={2}
          p={2}
          sx={{ flex: 1 }}
        >
          <TextField
            id={`email-input`}
            type="email"
            label="Email"
            value={email}
            error={email !== "" && !validateEmail(email)}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          
          <HCaptcha
            ref={captchaRef}
            sitekey={hCaptchaKey}
            onVerify={(token, eKey) => handleVerificationSuccess(token, eKey)}
          />
          <Collapse in={!!verification}>
            <Stack direction="column" alignItems="flex-end">
              <Button variant="contained" fullWidth onClick={handleConfirm} disabled={isLoading}>
                Recover
              </Button>
            </Stack>
          </Collapse>
        </Stack>
      </Box>
    </Paper>
  </Stack>
);


//* Logic <Gate>
  if(cookies.user)
  {
    return reset();
  } else {
    return recover();
  }
};

export default Recovery;
