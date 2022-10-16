//! IMPORT -> [START]
///
//* Import React
import React from "react";
//* Import React Cookie
import { useCookies } from "react-cookie";
///
//! IMPORT -> [END]
///
//* Logout
/// 
function Logout() {
//* React Cookie
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
//* Logic <Gate> remove cookie -> then().redirect -> path(login)
  const deleteCookie = () => {    
    removeCookie('user', { domain: '.kbve.com', path: '/' });
    if(!cookies.user)
    { window.location = "https://kbve.com/login"}
    };

  deleteCookie();

}
///
export default Logout;
