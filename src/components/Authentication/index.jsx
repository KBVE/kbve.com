import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Styles from "./styles.module.scss";
// @mui
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Register = ({
  url = "https://dev.api.kbve.com/api/auth/local/register",
  display = true,
}) => {
  const hCaptchaKey = "e77af3f6-a0e3-44b7-82f8-b7c098d38022";

  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [verification, setVerification] = React.useState(false);

  const handleVerificationSuccess = (token, eKey) => {
    console.log({ token, eKey });
    setVerification(token);
  };

  const handleConfirm = async (e) => {
    e.preventDefault();

    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        token: verification,
      }),
    }).then(async (r) => {
      if (!r.ok) {
        console.error(
          `\tRegisterConfirmation::An Error Occurred (${r.statusText})`
        );
        return new Error(r.statusText);
      }
      const res = await r.json();
      console.log(
        `\tRegisterConfirmation::Success:\n${JSON.stringify(res, null, 2)}`
      );
    });
  };

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
              id={`username-input`}
              type="username"
              label="Username"
              value={username}
              error={username !== ""}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              id={`email-input`}
              type="email"
              label="Email"
              value={email}
              error={email !== "" && !validateEmail(email)}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id={`password-input`}
              type="password"
              label="Password"
              value={password}
              error={password !== "" && password !== confirmPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              id={`confirm-password-input`}
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              error={confirmPassword !== "" && password !== confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <HCaptcha
              sitekey={hCaptchaKey}
              onVerify={(token, eKey) => handleVerificationSuccess(token, eKey)}
            />
            <Collapse in={!!verification}>
              <Stack direction="column" alignItems="flex-end">
                <Button variant="contained" fullWidth onClick={handleConfirm}>
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

export default Register;
