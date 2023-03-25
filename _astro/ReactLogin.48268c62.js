import{R as s}from"./index.254df4da.js";import{B as b,T as f,H as k,a as E}from"./TextField.aa1b9a2f.js";import{j as t}from"./jsx-runtime.1f80f1dd.js";import{u as L}from"./useCookies.8cfb0a43.js";import{S as l,P as T,y as P}from"./ButtonBase.a8f62b1d.js";import"./index.ba9402f5.js";const R=e=>String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),D=({url:e="https://api.kbve.com/api/auth/local/",display:o=!0})=>{const a=s.useRef(null),[n,r]=s.useState(!1),[i,c]=s.useState(""),[d,u]=s.useState(""),[m,p]=L(["user"]),[h,j]=s.useState(!1);s.useState(!1);return t.jsx(l,{direction:"column",alignItems:"center",children:t.jsx(T,{variant:"outlined",children:t.jsx(b,{component:"form",maxWidth:"sm",children:t.jsxs(l,{direction:"column",justifyContent:"center",spacing:2,p:2,sx:{flex:1},children:[t.jsx(f,{id:"email-input",type:"email",label:"Email",value:i,error:""!==i&&!R(i),onChange:e=>c(e.target.value),disabled:h}),t.jsx(f,{id:"password-input",type:"password",label:"Password",value:d,error:""!==d,onChange:e=>u(e.target.value),disabled:h}),t.jsx(k,{ref:a,sitekey:"e77af3f6-a0e3-44b7-82f8-b7c098d38022",onVerify:(e,t)=>((e,t)=>{console.log({token:e,eKey:t}),r(e)})(e,t)}),t.jsx(P,{in:!!n,children:t.jsx(l,{direction:"column",alignItems:"flex-end",children:t.jsx(E,{variant:"contained",fullWidth:!0,onClick:async t=>{t.preventDefault(),j(!0),await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier:i,password:d,token:n})}).then((async e=>{if(!e.ok)return j(!1),a.current?.resetCaptcha(),console.error(`\tLoginConfirmation::An Error Occurred (${e.statusText})`),console.log(`Error: ${e}`),new Error(e.statusText);const t=await e.json().then((e=>{console.log("Data:",e),console.log("JWT",e.jwt),console.log("User",e.user),new Promise(((t,s)=>{t((e=>{p("user",e,{path:"/",domain:".kbve.com",secure:!0,sameSite:"strict"})})(e.user))})).then(window.location="https://kbve.com/profile")}));console.log(`\tLoginConfirmation::Success:\n${JSON.stringify(t,null,2)}`)}))},disabled:h,children:"Login"})})})]})})})})};export{D as default};