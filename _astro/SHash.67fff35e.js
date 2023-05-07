import{p as e}from"./purify.es.0c4e1f83.js";//!     Search Hash Module
const o=({})=>{//!     There might be security issues, so I will only keep this light.
const o=new URL(window.location.href).hash;let t=e.sanitize(o,{USE_PROFILES:{html:!1,mathMl:!1,svg:!1}});t&&(t=t.slice(1),window.location=`https://kbve.com/search/?q=${t}`)};export{o as default};