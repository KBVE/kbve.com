import{p as d,a as f}from"./index.B59itue1.js";import{t as u}from"./index.BH1EYZ08.js";const l="/api/v1/",h=f(""),y=d("kbve:"),m=async s=>{u(async()=>{h.set(s),console.log(`[LOG] ${h.get()}`)})},E=async(s,e)=>{u(async()=>{m(`Storing ${e} into locker for ${s}`),y.setKey(s,e)})},O="5ba581fa-b6fc-4bb0-8222-02fcd6a59e35",j="https://js.hcaptcha.com/1/api.js",b="auth/register",S="auth/login",$="graceful/profile";async function J(s){return new Promise(e=>setTimeout(e,s))}class i{constructor(e,r,t){this.status=e,this.error=e<200||e>=300,this.message=r,this.data=t}display(){console.log(`Status: ${this.status}, Message: ${this.message}, Error: ${this.error}, Data: ${JSON.stringify(this.data)}`)}scope(){try{return JSON.stringify(this.data)}catch(e){return console.error("Parsing error:",e),"Error: Unable to parse data"}}extractField(e){if(this.data&&typeof this.data=="object"&&e in this.data)return this.data[e];try{if(typeof this.message=="string"){const r=JSON.parse(this.message);if(r&&typeof r=="object"&&e in r)return r[e]}}catch(r){console.error("Parsing error when checking message:",r)}return null}extractError(){if(typeof this.message=="string")try{const e=JSON.parse(this.message);if(e&&typeof e=="object"&&"error"in e)return e.error}catch(e){console.error("Parsing error:",e)}return"Error: Unable to parse error message"}token(){if(typeof this.message=="string")try{const e=JSON.parse(this.message);if(e&&typeof e=="object"&&"token"in e)return e.token}catch(e){console.error("Parsing error:",e)}return"Error: Unable to parse token"}async serialize(){try{return JSON.stringify({status:this.status,error:this.error,message:this.message,data:this.data})}catch(e){return console.error("Serialization error:",e),JSON.stringify({status:500,error:!0,message:"Internal Server Error: Unable to serialize response",data:{}})}}static async deserialize(e){try{const r=JSON.parse(e);return new i(r.status,r.message,r.data)}catch(r){return console.error("Deserialization error:",r),new i(500,"Internal Server Error: Unable to deserialize response",{})}}}async function g(s,e,r){try{const t=await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",...r},body:JSON.stringify(e),credentials:"include"}),a=await t.json(),o=!t.ok;let n=t.ok?"Success":"Error";typeof a.message=="object"&&a.message!==null&&(n=JSON.stringify(a.message));const c=o&&a.error?{error:a.error}:a;return new i(t.status,n,c)}catch(t){return console.error("Request failed:",t),new i(500,"Internal Server Error: Request failed",{})}}async function k(s,e,r){try{const t=new URLSearchParams(e).toString(),a=`${s}?${t}`,o=await fetch(a,{method:"GET",headers:{...r},credentials:"include"}),n=await o.json(),c=n.message||(o.ok?"Success":"Error"),p=n.data||n;return new i(o.status,c,p)}catch(t){return console.error("Request failed:",t),new i(500,"Internal Server Error: Request failed",{})}}async function U(s,e,r,t,a){const o=`${s}${l}${b}`;return g(o,{username:e,email:r,password:t,token:a},{"x-kbve-shieldwall":"auth-register"})}async function z(s,e,r){const t=`${s}${l}${S}`;return g(t,{email:e,password:r},{"x-kbve-shieldwall":"auth-login"})}async function N(s,e){const r=`${s}${l}${$}`,t={Authorization:`Bearer ${e}`,"x-kbve-shieldwall":"auth-profile"};return k(r,{},t)}export{E as a,j as b,O as h,y as k,z as l,N as p,U as r,J as s};