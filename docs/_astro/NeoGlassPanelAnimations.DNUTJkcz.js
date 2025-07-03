import{r as f}from"./react.CvslfkeK.js";import"./@react-three.B-wTPXHf.js";class C{static animateTextTransition(e,r,o=300){return new Promise(d=>{const m=e.parentElement;if(!m){e.textContent=r,d();return}const g=e.style.position,u=e.style.width,v=e.style.height,a=e.getBoundingClientRect(),y=m.getBoundingClientRect(),l=e.cloneNode(!0);l.textContent=r,l.style.position="absolute",l.style.top=`${a.top-y.top}px`,l.style.left=`${a.left-y.left}px`,l.style.width=`${a.width}px`,l.style.height=`${a.height}px`,l.style.opacity="0",l.style.transform="scale(0.95)",l.style.zIndex="1";const w=getComputedStyle(m).position;w==="static"&&(m.style.position="relative"),m.appendChild(l),e.classList.add("transition-all","duration-300"),e.style.opacity="0",e.style.transform="scale(0.95)",setTimeout(()=>{l.style.transition="all 300ms ease-out",l.style.opacity="1",l.style.transform="scale(1)",setTimeout(()=>{e.textContent=r,e.style.opacity="1",e.style.transform="scale(1)",e.style.position=g,e.style.width=u,e.style.height=v,m.removeChild(l),e.classList.remove("transition-all","duration-300"),w==="static"&&(m.style.position=""),d()},o)},o/2)})}static createParticle(e){const r=document.createElement("div");return r.style.cssText=`
      position: absolute;
      width: ${e.size}px;
      height: ${e.size}px;
      background: ${e.color};
      border-radius: 50%;
      opacity: ${e.opacity};
      left: ${Math.random()*100}%;
      top: ${Math.random()*100}%;
      pointer-events: none;
      z-index: 1;
      filter: blur(0.5px);
      animation: float-particle ${e.duration}s infinite ease-in-out ${e.delay}s;
      will-change: transform, opacity;
    `,r}static applyMagneticEffect(e,r=.1,o=100){const d=g=>{const u=e.getBoundingClientRect(),v=u.left+u.width/2,a=u.top+u.height/2;if(Math.sqrt(Math.pow(g.clientX-v,2)+Math.pow(g.clientY-a,2))<o){const l=(g.clientX-v)*r,w=(g.clientY-a)*r;e.style.transform=`translate(${l}px, ${w}px)`}},m=()=>{e.style.transform="translate(0px, 0px)"};return document.addEventListener("mousemove",d),e.addEventListener("mouseleave",m),()=>{document.removeEventListener("mousemove",d),e.removeEventListener("mouseleave",m)}}static applyParallaxEffect(e,r=.5){const o=()=>{const d=e.getBoundingClientRect(),g=(Math.max(0,Math.min(1,(window.innerHeight-d.top)/window.innerHeight))-.5)*r*50;e.style.transform=`translateY(${g}px)`};return window.addEventListener("scroll",o,{passive:!0}),()=>{window.removeEventListener("scroll",o)}}static applyGlowEffect(e,r){let o,d;const m=g=>{d||(d=g);const v=(g-d)%r.pulseDuration/r.pulseDuration,a=r.intensity*(.5+.5*Math.sin(v*Math.PI*2));e.style.filter=`drop-shadow(0 0 ${a*20}px ${r.color})`,o=requestAnimationFrame(m)};return o=requestAnimationFrame(m),()=>{cancelAnimationFrame(o)}}static createVisibilityObserver(e,r=.3){return new IntersectionObserver(o=>{o.forEach(d=>{e(d.isIntersecting)})},{threshold:r})}static debounce(e,r){let o;return(...d)=>{clearTimeout(o),o=window.setTimeout(()=>e(...d),r)}}static throttle(e,r){let o;return(...d)=>{o||(e(...d),o=!0,setTimeout(()=>o=!1,r))}}static injectAnimationStyles(){if(document.querySelector("#neoglass-animation-styles"))return;const e=`
      @keyframes float-particle {
        0%, 100% { 
          transform: translateY(0px) rotate(0deg); 
          opacity: var(--start-opacity, 0.3);
        }
        25% { 
          transform: translateY(-15px) rotate(90deg); 
          opacity: var(--mid-opacity, 0.6);
        }
        50% { 
          transform: translateY(-30px) rotate(180deg); 
          opacity: var(--max-opacity, 0.8);
        }
        75% { 
          transform: translateY(-15px) rotate(270deg); 
          opacity: var(--mid-opacity, 0.6);
        }
      }

      @keyframes glow-pulse {
        0%, 100% { filter: drop-shadow(0 0 5px var(--glow-color)); }
        50% { filter: drop-shadow(0 0 20px var(--glow-color)); }
      }

      @keyframes text-shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }

      .neoglass-text-shimmer {
        background: linear-gradient(
          90deg, 
          transparent, 
          rgba(34, 211, 238, 0.4), 
          transparent
        );
        background-size: 200% 100%;
        animation: text-shimmer 2s infinite;
        -webkit-background-clip: text;
        background-clip: text;
      }

      /* Layout stability classes */
      .neoglass-fixed-layout {
        contain: layout;
      }
      
      .neoglass-text-container {
        contain: layout style;
        will-change: auto;
      }
      
      [data-neoglass-title],
      [data-neoglass-subtitle],
      [data-neoglass-description],
      [data-neoglass-badge] {
        contain: style;
        word-break: break-word;
        overflow-wrap: break-word;
        text-overflow: ellipsis;
      }

      /* Prevent layout shifts during animations */
      .neoglass-animating {
        contain: layout style paint;
      }

      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        .neoglass-text-container {
          contain: layout;
        }
      }
    `,r=document.createElement("style");r.id="neoglass-animation-styles",r.textContent=e,document.head.appendChild(r)}}const A={textRotation:{titles:["Tech & Gaming Excellence with KBVE","Code, Game, Create with KBVE","Build Your Digital Empire","Master the Art of Development"],subtitles:["Flow with serene access and deep-blue level features.","Where innovation meets gaming passion.","Crafting tomorrow's digital experiences.","Elevate your skills to the next level."],descriptions:["Whether you're diving into containerization, mastering Node.js, pushing for Diamond in League, or raiding in WoW, our community is here to support your journey. Share knowledge, form teams, and achieve your goals together.","Join our vibrant community of developers and gamers. From React mastery to epic gaming sessions, we're building the future together.","Discover cutting-edge tools, participate in collaborative projects, and connect with like-minded creators who share your passion for excellence.","Transform your ideas into reality with our comprehensive resources, expert guidance, and supportive community ecosystem."],badges:["Memes","Tech","Gaming","Community"],interval:5e3},particles:{count:6,colors:["#22d3ee","#06b6d4","#0891b2","#0e7490"]},glowEffect:{intensity:.4,color:"#22d3ee"}},F=({config:I={}})=>{const[e,r]=f.useState(0),[o,d]=f.useState(!1),[m,g]=f.useState("idle"),[u,v]=f.useState(!1),a=f.useRef({panel:null,title:null,subtitle:null,description:null,badge:null,glow:null,particles:null,background:null,decoration:null,magnetic:null}),y=f.useRef([]),l=f.useRef(null),w=f.useRef(null),x=f.useRef([]),h=f.useMemo(()=>({...A,...I}),[I]);f.useEffect(()=>{const t=window.matchMedia("(prefers-reduced-motion: reduce)");v(t.matches);const i=s=>{v(s.matches)};return t.addEventListener("change",i),y.current.push(()=>t.removeEventListener("change",i)),()=>t.removeEventListener("change",i)},[]),f.useEffect(()=>{C.injectAnimationStyles();try{if(a.current={panel:document.querySelector("[data-neoglass-panel]"),title:document.querySelector("[data-neoglass-title]"),subtitle:document.querySelector("[data-neoglass-subtitle]"),description:document.querySelector("[data-neoglass-description]"),badge:document.querySelector("[data-neoglass-badge]"),glow:document.querySelector("[data-neoglass-glow]"),particles:document.querySelector("[data-neoglass-particles]"),background:document.querySelector("[data-neoglass-bg]"),decoration:document.querySelector("[data-neoglass-decor]"),magnetic:document.querySelector("[data-neoglass-magnetic]")},a.current.panel){const t=C.createVisibilityObserver(d,.1);t.observe(a.current.panel),y.current.push(()=>t.disconnect())}}catch(t){console.warn("Failed to initialize NeoGlass elements:",t)}return()=>{y.current.forEach(t=>t()),y.current=[],l.current&&clearInterval(l.current),w.current&&cancelAnimationFrame(w.current),x.current.forEach(t=>clearTimeout(t)),x.current=[]}},[]);const R=f.useCallback(async t=>{const{title:i,subtitle:s,description:n,badge:c}=a.current,{titles:p,subtitles:b,descriptions:M,badges:T}=h.textRotation;if(u){i&&(i.textContent=p[t]),s&&(s.textContent=b[t]),n&&(n.textContent=M[t]),c&&(c.textContent=T[t]);return}const E=[];try{i&&E.push(C.animateTextTransition(i,p[t])),s&&E.push(C.animateTextTransition(s,b[t])),n&&E.push(C.animateTextTransition(n,M[t])),c&&E.push(C.animateTextTransition(c,T[t])),await Promise.all(E)}catch(S){console.warn("Animation failed, using fallback:",S),i&&(i.textContent=p[t]),s&&(s.textContent=b[t]),n&&(n.textContent=M[t]),c&&(c.textContent=T[t])}},[h.textRotation,u]);return f.useEffect(()=>{if(!o||m==="paused"||u)return;const t=async()=>{if(m==="animating")return;g("animating");const i=(e+1)%h.textRotation.titles.length;try{await R(i),r(i)}catch(s){console.warn("Text rotation failed:",s)}finally{g("idle")}};return l.current=window.setInterval(t,h.textRotation.interval),()=>{l.current&&(clearInterval(l.current),l.current=null)}},[o,e,m,h.textRotation.interval,R,u]),f.useEffect(()=>{if(!o||!a.current.particles||u)return;const t=()=>{try{const n=C.createParticle({size:Math.random()*3+1,color:h.particles.colors[Math.floor(Math.random()*h.particles.colors.length)],opacity:Math.random()*.5+.2,duration:Math.random()*3+2,delay:Math.random()*.5});a.current.particles?.appendChild(n);const c=window.setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n);const p=x.current.indexOf(c);p>-1&&x.current.splice(p,1)},6e3);x.current.push(c)}catch(n){console.warn("Failed to create particle:",n)}},i=Math.min(h.particles.count,10);for(let n=0;n<i;n++){const c=window.setTimeout(()=>t(),n*500);x.current.push(c)}const s=window.setInterval(t,2e3);return y.current.push(()=>clearInterval(s)),()=>{clearInterval(s),x.current.forEach(n=>clearTimeout(n)),x.current=[]}},[o,h.particles,u]),f.useEffect(()=>{if(!o||!a.current.glow||u)return;const t=a.current.glow;if(!t)return;const i=()=>{try{const n=h.glowEffect.intensity,c=h.glowEffect.color;t.style.setProperty("--glow-intensity",n.toString()),t.style.setProperty("--glow-color",c),t.style.animation="glow-pulse 2s ease-in-out";const p=window.setTimeout(()=>{t.style.animation=""},2e3);x.current.push(p)}catch(n){console.warn("Glow animation failed:",n)}};i();const s=window.setInterval(i,4e3);return y.current.push(()=>clearInterval(s)),()=>{clearInterval(s)}},[o,h.glowEffect,u]),f.useEffect(()=>{if(u)return;let t=!1;const i=()=>{t||(w.current=requestAnimationFrame(()=>{try{if(!a.current.panel)return;const s=a.current.panel.getBoundingClientRect(),n=Math.max(0,Math.min(1,(window.innerHeight-s.top)/window.innerHeight)),c=a.current.background;if(c){const b=(n-.5)*20;c.style.transform=`translateY(${b}px)`}const p=a.current.decoration;if(p){const b=n*15;p.style.transform=`rotate(${b}deg)`}}catch(s){console.warn("Parallax scroll failed:",s)}t=!1}),t=!0)};return window.addEventListener("scroll",i,{passive:!0}),y.current.push(()=>window.removeEventListener("scroll",i)),()=>{window.removeEventListener("scroll",i),w.current&&cancelAnimationFrame(w.current)}},[u]),f.useEffect(()=>{if(u)return;let t=null;const i=c=>{t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{try{if(!a.current.panel)return;const p=a.current.panel.getBoundingClientRect(),b=c.clientX-p.left,M=c.clientY-p.top,T=p.width/2,E=p.height/2,S=.1,k=(b-T)*S,$=(M-E)*S,L=a.current.magnetic;L&&(L.style.transform=`translate(${k}px, ${$}px)`)}catch(p){console.warn("Magnetic effect failed:",p)}})},s=()=>{t&&(cancelAnimationFrame(t),t=null),requestAnimationFrame(()=>{try{const c=a.current.magnetic;c&&(c.style.transform="translate(0px, 0px)")}catch(c){console.warn("Magnetic reset failed:",c)}})},n=a.current.panel;return n&&(n.addEventListener("mousemove",i,{passive:!0}),n.addEventListener("mouseleave",s,{passive:!0}),y.current.push(()=>{n.removeEventListener("mousemove",i),n.removeEventListener("mouseleave",s)})),()=>{n&&(n.removeEventListener("mousemove",i),n.removeEventListener("mouseleave",s)),t&&cancelAnimationFrame(t)}},[u]),null};export{F as default};
