import{r as m,j as n}from"./react.CvslfkeK.js";import{e as a}from"./react-unity-webgl.Bx0-kAlA.js";import{a as g}from"./nanostores.Bo9-_MAV.js";import{z as s}from"./zod.D6aOmuMC.js";import"./@react-three.B-wTPXHf.js";const u=g(null),y=s.enum(["success","blocked"]),p=s.object({type:s.literal("deployable"),status:y,prefab:s.string()}),b=s.object({type:s.literal("background-shift"),key:s.string()}),f=s.discriminatedUnion("type",[p,b]),h={success:{emoji:"✅",color:"#22c55e",message:t=>`Deployed <strong>${t}</strong>`},blocked:{emoji:"❌",color:"#ef4444",message:t=>`Deployment blocked: <strong>${t}</strong>`}};function w(t,r){const e=h[r];return`
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
  `}function k(){if(window.unityBridge){console.warn("[UnityBridge] Already registered.");return}window.unityBridge=t=>{try{const r=JSON.parse(t),e=f.parse(r);switch(e.type){case"deployable":{const o=w(e.prefab,e.status);u.set(e),window.kbve?.uiux?.openPanel?.("right",{rawHtml:o});break}case"background-shift":{const o=document.getElementById("kbve-body");if(o){const i={forest:"bg-green-900",desert:"bg-yellow-800",map:"bg-sky-900",default:"bg-stone-950"},l=Array.from(o.classList).filter(d=>d.startsWith("bg-"));o.classList.remove(...l);const c=i[e.key]||i.default;o.classList.add(c)}break}default:console.warn("[UnityBridge] Unknown message type:",e)}}catch(r){console.error("[UnityBridge] Invalid unity message:",r)}}}function U(){delete window.unityBridge}function S(){const{unityProvider:t,loadingProgression:r,isLoaded:e}=a.useUnityContext({loaderUrl:"https://unity.rareicon.com/Build/WebGL.loader.js",dataUrl:"https://unity.rareicon.com/Build/WebGL.data",frameworkUrl:"https://unity.rareicon.com/Build/WebGL.framework.js",codeUrl:"https://unity.rareicon.com/Build/WebGL.wasm",streamingAssetsUrl:"https://unity.rareicon.com/StreamingAssets"});return m.useEffect(()=>(k(),U),[]),n.jsxs(n.Fragment,{children:[!e&&n.jsxs("p",{children:["Loading Application... ",Math.round(r*100),"%"]}),n.jsx(a.Unity,{unityProvider:t,style:{visibility:e?"visible":"hidden",width:"100%",height:"100%"}})]})}export{S as default};
