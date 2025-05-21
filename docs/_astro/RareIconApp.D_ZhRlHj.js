import{r as l,j as i}from"./react.DlTOZz3w.js";import{e as s}from"./react-unity-webgl.CANpJGmc.js";import{a as m}from"./nanostores.Bo9-_MAV.js";import{z as o}from"./zod.D6aOmuMC.js";import"./@react-three.Ck9Sp3Iy.js";import"./three.Ga6J2dPR.js";import"./react-use-measure.BL_PlT8A.js";import"./its-fine.zliSf007.js";import"./react-reconciler.19LmHG8m.js";import"./react-dom.DmziSIKl.js";import"./scheduler.C323NY8X.js";import"./@babel.CF3RwP-h.js";import"./three-stdlib.C120A-Vd.js";import"./zustand.BejR9DWA.js";const d=m(null),p=o.enum(["success","blocked"]),n=o.object({type:o.literal("deployable"),status:p,prefab:o.string()});o.discriminatedUnion("type",[n]);const c={success:{emoji:"✅",color:"#22c55e",message:t=>`Deployed <strong>${t}</strong>`},blocked:{emoji:"❌",color:"#ef4444",message:t=>`Deployment blocked: <strong>${t}</strong>`}};function u(t,r){const e=c[r];return`
    <div style="
      padding: 1rem;
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${e.color};
    ">
      <span style="font-size: 1.4rem;">${e.emoji}</span>
      <span>${e.message(t)}</span>
    </div>
  `}function y(){if(window.unityBridge){console.warn("[UnityBridge] Already registered.");return}window.unityBridge=t=>{try{const r=JSON.parse(t),e=n.parse(r);d.set(e);const a=u(e.prefab,e.status);window.kbve?.uiux?.openPanel?.("right",{rawHtml:a})}catch(r){console.error("[UnityBridge] Invalid deployable message:",r)}}}function g(){delete window.unityBridge}function A(){const{unityProvider:t,loadingProgression:r,isLoaded:e}=s.useUnityContext({loaderUrl:"https://unity.rareicon.com/Build/WebGL.loader.js",dataUrl:"https://unity.rareicon.com/Build/WebGL.data",frameworkUrl:"https://unity.rareicon.com/Build/WebGL.framework.js",codeUrl:"https://unity.rareicon.com/Build/WebGL.wasm",streamingAssetsUrl:"https://unity.rareicon.com/StreamingAssets"});return l.useEffect(()=>(y(),g),[]),i.jsxs(i.Fragment,{children:[!e&&i.jsxs("p",{children:["Loading Application... ",Math.round(r*100),"%"]}),i.jsx(s.Unity,{unityProvider:t,style:{visibility:e?"visible":"hidden",width:"100%",height:"100%"}})]})}export{A as default};
