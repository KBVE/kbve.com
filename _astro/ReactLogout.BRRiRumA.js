import{j as e}from"./jsx-runtime.CzgMDNMm.js";import{r as t}from"./index.DQ2WTIsS.js";import{k as c,e as n}from"./npchandler.6lM6j_9q.js";import"./preload-helper.ygWHROA3.js";import"./index.CFX5TIQh.js";import"./index.BH1EYZ08.js";const x=()=>{const[s,r]=t.useState(!1),[o,a]=t.useState(null),i=async()=>{r(!0);try{await c.removeProfile(),n.emit("redirectUser",{location:"/login",replace:!0})}catch(l){console.error("Failed to log out:",l),a("An error occurred during logout. Please try again.")}finally{r(!1)}};return t.useEffect(()=>{i()},[]),e.jsx("div",{className:"flex flex-col items-center justify-center h-screen",children:s?e.jsx("p",{className:"text-lg",children:"Logging out..."}):o?e.jsx("p",{className:"text-red-500",children:o}):e.jsx("p",{className:"text-lg",children:"Redirecting..."})})};export{x as default};