import{r as l,j as o}from"./react.DlFtjPNG.js";import{e as i}from"./react-unity-webgl.DEo2E-nf.js";import{a as d}from"./nanostores.qAfxXu-z.js";import{z as s}from"./zod.D6aOmuMC.js";import"./@react-three.Dfy-3Ok6.js";const c=d(null),m=s.enum(["success","blocked"]),n=s.object({type:s.literal("deployable"),status:m,prefab:s.string()});s.discriminatedUnion("type",[n]);const p={success:{emoji:"✅",color:"#22c55e",message:t=>`Deployed <strong>${t}</strong>`},blocked:{emoji:"❌",color:"#ef4444",message:t=>`Deployment blocked: <strong>${t}</strong>`}};function u(t,r){const e=p[r];return`
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
  `}function y(){if(window.unityBridge){console.warn("[UnityBridge] Already registered.");return}window.unityBridge=t=>{try{const r=JSON.parse(t),e=n.parse(r);c.set(e);const a=u(e.prefab,e.status);window.kbve?.uiux?.openPanel?.("right",{rawHtml:a})}catch(r){console.error("[UnityBridge] Invalid deployable message:",r)}}}function g(){delete window.unityBridge}function x(){const{unityProvider:t,loadingProgression:r,isLoaded:e}=i.useUnityContext({loaderUrl:"https://unity.rareicon.com/Build/WebGL.loader.js",dataUrl:"https://unity.rareicon.com/Build/WebGL.data",frameworkUrl:"https://unity.rareicon.com/Build/WebGL.framework.js",codeUrl:"https://unity.rareicon.com/Build/WebGL.wasm",streamingAssetsUrl:"https://unity.rareicon.com/StreamingAssets"});return l.useEffect(()=>(y(),g),[]),o.jsxs(o.Fragment,{children:[!e&&o.jsxs("p",{children:["Loading Application... ",Math.round(r*100),"%"]}),o.jsx(i.Unity,{unityProvider:t,style:{visibility:e?"visible":"hidden",width:"100%",height:"100%"}})]})}export{x as default};
