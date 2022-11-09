//* React Register
//? SWUP has some issues with how we are creating the register element.
///
//! [IMPORT] -> [START]
///
//* Import React
import React from "react";
import * as ReactDOM from 'react-dom';
//* Import hCaptcha
import HCaptcha from "@hcaptcha/react-hcaptcha";
//* Import @mui
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
//import Container from '@mui/material/Container';

///
//* Import React Cookies
import { useCookies  } from 'react-cookie';
///
//! [IMPORT] -> [END]
///
///
//* Regex Validate Email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


//! [CORE] -> [START]
///
//* ReactRegister
//? [Function] -> [ReactRegister]
///

///   url = "https://api.kbve.com/api/auth/local/register",
//  display = true,
// const appRoot = document.getElementById('register');


function useAsync(asyncFn, onSuccess) {
  React.useEffect(() => {
    let isActive = true;
    asyncFn().then(data => {
      if (isActive) onSuccess(data)
      else console.log("aborted setState on unmounted component")
    });
    return () => {
      isActive = false;
    };
  }, [asyncFn, onSuccess]);
}

const Child = () => {
  const [state, setState] = React.useState("loading (4 sec)...");
  useAsync(simulateFetchData, setState);
  return <ConstReactRegister />;
};

const Parent = () => {
  const [mounted, setMounted] = React.useState(true);
  return (
    <div>
      {<Child />}
    </div>
  );
};

const simulateFetchData = () => new Promise(
  resolve => setTimeout(() => resolve("data fetched"), 4000));

class ReactRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      load: false,  
      hasError: false, 
      captchaRef: null };
    this.listRef = React.createRef();
  }
  

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentWillUnmount() {
    this.state.load = false;
  }


  componentDidMount() {
    this.state.load = true;
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
   
    return (<Parent />)

  }
}



///
//* Function ReactRegister
///
const ConstReactRegister = ({
  url = "https://api.kbve.com/api/auth/local/register",
  display = true,
}) => {
//* hCaptcha
/// hCaptcha -> [START]
  const captchaRef = React.useRef(null);
  const hCaptchaKey = "e77af3f6-a0e3-44b7-82f8-b7c098d38022";
  const [verification, setVerification] = React.useState(false);
  const handleVerificationSuccess = (token, eKey) => {
    console.log({ token, eKey });
    setVerification(token);
  };
/// hCaptcha -> [END]
///
//* Register Variables
/// Register (var) -> [START]
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
/// Register (var) -> [END]
///
//* Cookie Integration
/// Cookie -> [START]
  const [cookies, setCookie] = useCookies(['user']);
  const handleCookie = (data) => {
    setCookie('user', data, { path: '/', domain: '.kbve.com',  secure: true, sameSite: 'strict'  });
  }
/// Cookie -> [END]
///
//* UX/UI
/// UX/UI -> [START]
const [isLoading, setIsLoading] = React.useState(false);
//? TODO: Spinner
///
/// UX/UI -> [STOP]
///
///
///

//! Core -> [START] -> EOF
  const handleConfirm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
      // Register Confirmation Error
      if (!r.ok) {
        setIsLoading(false);
        captchaRef.current?.resetCaptcha();
        console.error(
          `\tRegisterConfirmation::An Error Occurred (${r.statusText})`
        );
        console.log(`Error: ${r}`);
        return new Error(r.statusText);
      }
      const res = await r.json().then(data => {
        // console.log('Data:', data);
        // console.log('JWT', data.jwt);
        // console.log('User', data.user);
        //handleCookie(data.jwt, data.user);
        const _cookie = new Promise((resolve, reject) => {
          resolve(handleCookie(data.user));
        }).then(  window.location = 'https://kbve.com/profile' )
      })

      // Success upon Registering
      console.log(
        `\tRegisterConfirmation::Success:\n${JSON.stringify(res, null, 2)}`
      );
    });
  };
///
//! [CORE] -> {Function} -> [ReactRegister] -> [END]
///
///
//* Render Component
///
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
              disabled={isLoading}
            />
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
              error={password !== "" && password !== confirmPassword}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoading}
            />
            <TextField
              id={`confirm-password-input`}
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              error={confirmPassword !== "" && password !== confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
                  Sign Up
                </Button>
              </Stack>
            </Collapse>
          </Stack>
        </Box>
      </Paper>
    </Stack>
  )
};




export default ReactRegister;
