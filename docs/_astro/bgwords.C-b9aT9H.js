import{j as r}from"./jsx-runtime.CzgMDNMm.js";import{r as n}from"./index.DQ2WTIsS.js";import{c as w}from"./clsx.B-dksMZM.js";import{a as P,f as $,M as H,u as k,P as F,L as K,b as O}from"./motion.D_ORTAyZ.js";function L(){const e=n.useRef(!1);return P(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function U(){const e=L(),[a,t]=n.useState(0),o=n.useCallback(()=>{e.current&&t(a+1)},[a]);return[n.useCallback(()=>$.postRender(o),[o]),a]}class B extends n.Component{getSnapshotBeforeUpdate(a){const t=this.props.childRef.current;if(t&&a.isPresent&&!this.props.isPresent){const o=this.props.sizeRef.current;o.height=t.offsetHeight||0,o.width=t.offsetWidth||0,o.top=t.offsetTop,o.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function T({children:e,isPresent:a}){const t=n.useId(),o=n.useRef(null),m=n.useRef({width:0,height:0,top:0,left:0}),{nonce:c}=n.useContext(H);return n.useInsertionEffect(()=>{const{width:l,height:d,top:x,left:f}=m.current;if(a||!o.current||!l||!d)return;o.current.dataset.motionPopId=t;const s=document.createElement("style");return c&&(s.nonce=c),document.head.appendChild(s),s.sheet&&s.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${l}px !important;
            height: ${d}px !important;
            top: ${x}px !important;
            left: ${f}px !important;
          }
        `),()=>{document.head.removeChild(s)}},[a]),r.jsx(B,{isPresent:a,childRef:o,sizeRef:m,children:n.cloneElement(e,{ref:o})})}const M=({children:e,initial:a,isPresent:t,onExitComplete:o,custom:m,presenceAffectsLayout:c,mode:l})=>{const d=k(V),x=n.useId(),f=n.useMemo(()=>({id:x,initial:a,isPresent:t,custom:m,onExitComplete:s=>{d.set(s,!0);for(const i of d.values())if(!i)return;o&&o()},register:s=>(d.set(s,!1),()=>d.delete(s))}),c?[Math.random()]:[t]);return n.useMemo(()=>{d.forEach((s,i)=>d.set(i,!1))},[t]),n.useEffect(()=>{!t&&!d.size&&o&&o()},[t]),l==="popLayout"&&(e=r.jsx(T,{isPresent:t,children:e})),r.jsx(F.Provider,{value:f,children:e})};function V(){return new Map}function W(e){return n.useEffect(()=>()=>e(),[])}const h=e=>e.key||"";function G(e,a){e.forEach(t=>{const o=h(t);a.set(o,t)})}function _(e){const a=[];return n.Children.forEach(e,t=>{n.isValidElement(t)&&a.push(t)}),a}const A=({children:e,custom:a,initial:t=!0,onExitComplete:o,exitBeforeEnter:m,presenceAffectsLayout:c=!0,mode:l="sync"})=>{const d=n.useContext(K).forceRender||U()[0],x=L(),f=_(e);let s=f;const i=n.useRef(new Map).current,C=n.useRef(s),g=n.useRef(new Map).current,j=n.useRef(!0);if(P(()=>{j.current=!1,G(f,g),C.current=s}),W(()=>{j.current=!0,g.clear(),i.clear()}),j.current)return r.jsx(r.Fragment,{children:s.map(u=>r.jsx(M,{isPresent:!0,initial:t?void 0:!1,presenceAffectsLayout:c,mode:l,children:u},h(u)))});s=[...s];const R=C.current.map(h),b=f.map(h),S=R.length;for(let u=0;u<S;u++){const p=R[u];b.indexOf(p)===-1&&!i.has(p)&&i.set(p,void 0)}return l==="wait"&&i.size&&(s=[]),i.forEach((u,p)=>{if(b.indexOf(p)!==-1)return;const E=g.get(p);if(!E)return;const X=R.indexOf(p);let y=u;if(!y){const Z=()=>{i.delete(p);const N=Array.from(g.keys()).filter(v=>!b.includes(v));if(N.forEach(v=>g.delete(v)),C.current=f.filter(v=>{const I=h(v);return I===p||N.includes(I)}),!i.size){if(x.current===!1)return;d(),o&&o()}};y=r.jsx(M,{isPresent:!1,onExitComplete:Z,custom:a,presenceAffectsLayout:c,mode:l,children:E},h(E)),i.set(p,y)}s.splice(X,0,y)}),s=s.map(u=>{const p=u.key;return i.has(p)?u:r.jsx(M,{isPresent:!0,presenceAffectsLayout:c,mode:l,children:u},h(u))}),r.jsx(r.Fragment,{children:i.size?s:s.map(u=>n.cloneElement(u))})},z={enter:e=>({transform:`perspective(600px) ${e>0?"rotateY(90deg)":"rotateY(-90deg)"} rotateX(0deg) translateZ(0px)`,opacity:0,scale:.75}),center:{transform:"perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0px)",zIndex:1,opacity:1,scale:1},exit:e=>({transform:`perspective(600px) ${e<0?"rotateY(90deg)":"rotateY(-90deg)"} rotateX(0deg) translateZ(0px)`,zIndex:0,opacity:0,scale:.75})},D=({components:e})=>{const[[a,t],o]=n.useState([0,0]),[m,c]=n.useState(!1),l=i=>{o([a+i,i])};n.useEffect(()=>{const i=setInterval(()=>{m||l(1)},1e4);return()=>clearInterval(i)},[a,m]);const d=a%e.length,{Component:x,animation:f}=e[d],s={enter:f?.enter||z.enter(t),center:f?.center||z.center,exit:f?.exit||z.exit(t)};return r.jsxs("div",{className:"relative w-full h-96 overflow-hidden",onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),children:[r.jsx(A,{initial:!1,custom:t,children:r.jsx(O.div,{custom:t,variants:s,initial:"enter",animate:"center",exit:"exit",transition:{transform:{duration:1.2,ease:[.68,-.55,.265,1.55]},opacity:{duration:.8,ease:"easeOut"}},className:w("absolute w-full h-full"),children:r.jsx(x,{})},a)}),r.jsx("button",{className:w("absolute top-1/2 left-5 transform -translate-y-1/2 z-20","bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"),onClick:()=>l(-1),children:"←"}),r.jsx("button",{className:w("absolute top-1/2 right-5 transform -translate-y-1/2 z-20","bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"),onClick:()=>l(1),children:"→"})]})},q=()=>r.jsx("div",{className:"flex items-center justify-center h-full bg-cyan-500/[.30]",children:"Component 1"}),J=()=>r.jsx("div",{className:"flex items-center justify-center h-full bg-cyan-500/[.30]",children:"Component 2"}),Q=()=>{const e=[{Component:q,animation:{enter:{transform:"perspective(600px) rotateY(90deg) rotateX(0deg) translateZ(0px)",opacity:0,scale:.9},center:{transform:"perspective(600px) rotateY(0deg) rotateX(0deg) translateZ(0px)",opacity:1,scale:1},exit:{transform:"perspective(600px) rotateY(-90deg) rotateX(0deg) translateZ(0px)",opacity:0,scale:.9}}},{Component:J,animation:{enter:{transform:"perspective(600px) rotateX(90deg) rotateY(0deg) translateZ(0px)",opacity:0,scale:.9},center:{transform:"perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)",opacity:1,scale:1},exit:{transform:"perspective(600px) rotateX(-90deg) rotateY(0deg) translateZ(0px)",opacity:0,scale:.9}}}];return r.jsx("div",{className:"LanderHero",children:r.jsx(D,{components:e})})},Y=["Hello","World","React","Animation","Raining"],se=()=>{const[e,a]=n.useState([]),[t,o]=n.useState(!1);return n.useEffect(()=>{const m=Y.map((c,l)=>{const d=c.split("").map((f,s)=>r.jsx("div",{className:"text-cyan-700 opacity-90",style:{fontSize:"20px",position:"relative"},children:f},s)),x={left:`${5+l*(100/Y.length)}%`,top:"-10vh",animation:`rain ${Math.random()*5+5}s infinite linear`,position:"absolute"};return r.jsx("div",{style:x,children:d},l)});a(m),setTimeout(()=>{const c=document.getElementById("herolanding_loader");c&&(c.classList.add("fade-out"),c.addEventListener("animationend",()=>{c.style.display="none",o(!0)}))},1e3)},[]),t?r.jsxs("div",{className:"w-full h-screen flex flex-col justify-center items-center overflow-hidden relative",children:[r.jsx("div",{className:"flex items-center justify-center h-12",children:r.jsx("div",{className:"text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-rose-200 to-cyan-500",children:"Welcome to Next Generation Software Development Community"})})," ",r.jsx("div",{className:"absolute top-0 w-full h-full z-0",children:e}),r.jsx("div",{className:"z-10 w-full",children:r.jsx(Q,{})})]}):null};export{se as default};