import{u as c,l as r}from"./appwrite.b6070051.js";import"./core.astro_astro_type_script_index_0_lang.18466d55.js";import"./nav.astro_astro_type_script_index_0_lang.a40e6ab5.js";import"./ThemeSwitch.astro_astro_type_script_index_0_lang.a91d9298.js";import"./sdk.0b15df0d.js";import"./_commonjsHelpers.87174ba5.js";const n=document.querySelector("#accountLoginLink"),l=document.querySelector("#accountUser");function s(e){let o=document.querySelector(e);o&&(o.style.display="none")}function t(e,o){let i=document.querySelector(e);i?i.innerHTML=o:console.log(`Cant Find ${e} `)}c.subscribe(e=>{!n||!l||(e?(n.style.display="none",l.style.display="block",document.querySelector("#accountUserDetail")&&(console.log(e),s("#loader"),t("#username",e.name),t("#email",e.email),t("#phone",e.phone||"Phone is not set!"),e.prefs.admin&&t("#title","Admin"),t("#data",JSON.stringify(e)))):(n.style.display="block",l.style.display="none"))});const a=document.querySelector("#account-logout");a?.addEventListener("click",e=>{r()});