//!
//! BROKEN - LEFT ON READ.
//! 
//! 
//! 
//! 
//! 
//! 
//! 
import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Styles from "../styles.module.scss";
// @mui
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

// Cookies - 10/5/2022
import {  useCookies  } from 'react-cookie';

// Regex Validate Email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Profile = ({
  url = "https://api.kbve.com/api/auth/local/",
  display = true,
}) => {

/// hCaptcha -> [START]
  const hCaptchaKey = "e77af3f6-a0e3-44b7-82f8-b7c098d38022";
  const [verification, setVerification] = React.useState(false);

  const handleVerificationSuccess = (token, eKey) => {
    console.log({ token, eKey });
    setVerification(token);
  };

/// hCaptcha -> [END]

/// Login (var) -> [START]
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
/// Login (var) -> [END]

/// Cookie -> [START]
  const [cookies, setCookie] = useCookies(['member']);
  const handleCookie = (jwt, data) => {
    setCookie('jwt', jwt, { path: '/', domain: '.kbve.com' });
    setCookie('user', data, { path: '/', domain: '.kbve.com' });

  }
/// Cookie -> [STOP]

/// UX/UI -> [START]
const [isLoading, setIsLoading] = useState(false);
//? TODO: STATUS DIV -> Spinner
//? TODO: STATUS DIV -> Error Message
/// UX/UI -> [STOP]

//! Core -> [START] -> EOF
  const handleConfirm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: email,
        password,
        token: verification,
      }),
    }).then(async (r) => {
      // Login Confirmation Error
      if (!r.ok) {
        setIsLoading(false);
        console.error(
          `\tLoginConfirmation::An Error Occurred (${r.statusText})`
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
        `\tRegisterConfirmation::Success:\n${JSON.stringify(res, null, 2)}`
      );
    });
  };
  /// Core -> [END]


  return (
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
            <TextField
              id={`password-input`}
              type="password"
              label="Password"
              value={password}
              error={password !== ""}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <HCaptcha
              sitekey={hCaptchaKey}
              onVerify={(token, eKey) => handleVerificationSuccess(token, eKey)}
            />
            <Collapse in={!!verification}>
              <Stack direction="column" alignItems="flex-end">
                <Button variant="contained" fullWidth onClick={handleConfirm} disabled={ඞ}>
                  Sign Up
                </Button>
              </Stack>
            </Collapse>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  );
};

export default Profile;
