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
  const [cookies, setCookie, removeCookie] = useCookies(["member"]);
//* Logic <Gate> remove cookie -> then().redirect -> path(login)
  const deleteCookie = (data) => {    
      const _cookie = new Promise((resolve, reject) => {
          removeCookie(data);
      }).then((window.location = "https://kbve.com/login"));
    };

  deleteCookie("user");

}
///
export default Logout;
