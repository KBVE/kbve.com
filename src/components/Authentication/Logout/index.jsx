//! IMPORT -> [START]
///
//* Import React
import * as React from "react";
//* Import React Cookie
import { useCookies } from "react-cookie";
///
//* Logout
/// 
function Logout() {
//* React Cookie
  const [cookies, setCookie, removeCookie] = useCookies(["member"]);
  
  const deleteCookie = (data) => {
    
      const _cookie = new Promise((resolve, reject) => {
          removeCookie(data);
      }).then((window.location = "https://kbve.com/login"));
  
    };

  deleteCookie("user");

}
///
export default Logout;
