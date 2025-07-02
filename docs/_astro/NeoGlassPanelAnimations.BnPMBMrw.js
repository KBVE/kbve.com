import{r as y}from"./react.CvslfkeK.js";import"./@react-three.B-wTPXHf.js";class w{static animateTextTransition(t,n,o=300){return new Promise(i=>{const c=t.parentElement;if(!c){t.textContent=n,i();return}const p=t.style.position,a=t.style.width,m=t.style.height,f=t.getBoundingClientRect(),u=c.getBoundingClientRect(),l=t.cloneNode(!0);l.textContent=n,l.style.position="absolute",l.style.top=`${f.top-u.top}px`,l.style.left=`${f.left-u.left}px`,l.style.width=`${f.width}px`,l.style.height=`${f.height}px`,l.style.opacity="0",l.style.transform="scale(0.95)",l.style.zIndex="1";const e=getComputedStyle(c).position;e==="static"&&(c.style.position="relative"),c.appendChild(l),t.classList.add("transition-all","duration-300"),t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>{l.style.transition="all 300ms ease-out",l.style.opacity="1",l.style.transform="scale(1)",setTimeout(()=>{t.textContent=n,t.style.opacity="1",t.style.transform="scale(1)",t.style.position=p,t.style.width=a,t.style.height=m,c.removeChild(l),t.classList.remove("transition-all","duration-300"),e==="static"&&(c.style.position=""),i()},o)},o/2)})}static createParticle(t){const n=document.createElement("div");return n.style.cssText=`
      position: absolute;
      width: ${t.size}px;
      height: ${t.size}px;
      background: ${t.color};
      border-radius: 50%;
      opacity: ${t.opacity};
      left: ${Math.random()*100}%;
      top: ${Math.random()*100}%;
      pointer-events: none;
      z-index: 1;
      filter: blur(0.5px);
      animation: float-particle ${t.duration}s infinite ease-in-out ${t.delay}s;
      will-change: transform, opacity;
    `,n}static applyMagneticEffect(t,n=.1,o=100){const i=p=>{const a=t.getBoundingClientRect(),m=a.left+a.width/2,f=a.top+a.height/2;if(Math.sqrt(Math.pow(p.clientX-m,2)+Math.pow(p.clientY-f,2))<o){const l=(p.clientX-m)*n,e=(p.clientY-f)*n;t.style.transform=`translate(${l}px, ${e}px)`}},c=()=>{t.style.transform="translate(0px, 0px)"};return document.addEventListener("mousemove",i),t.addEventListener("mouseleave",c),()=>{document.removeEventListener("mousemove",i),t.removeEventListener("mouseleave",c)}}static applyParallaxEffect(t,n=.5){const o=()=>{const i=t.getBoundingClientRect(),p=(Math.max(0,Math.min(1,(window.innerHeight-i.top)/window.innerHeight))-.5)*n*50;t.style.transform=`translateY(${p}px)`};return window.addEventListener("scroll",o,{passive:!0}),()=>{window.removeEventListener("scroll",o)}}static applyGlowEffect(t,n){let o,i;const c=p=>{i||(i=p);const m=(p-i)%n.pulseDuration/n.pulseDuration,f=n.intensity*(.5+.5*Math.sin(m*Math.PI*2));t.style.filter=`drop-shadow(0 0 ${f*20}px ${n.color})`,o=requestAnimationFrame(c)};return o=requestAnimationFrame(c),()=>{cancelAnimationFrame(o)}}static createVisibilityObserver(t,n=.3){return new IntersectionObserver(o=>{o.forEach(i=>{t(i.isIntersecting)})},{threshold:n})}static debounce(t,n){let o;return(...i)=>{clearTimeout(o),o=setTimeout(()=>t(...i),n)}}static throttle(t,n){let o;return(...i)=>{o||(t(...i),o=!0,setTimeout(()=>o=!1,n))}}static injectAnimationStyles(){if(document.querySelector("#neoglass-animation-styles"))return;const t=`
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
    `,n=document.createElement("style");n.id="neoglass-animation-styles",n.textContent=t,document.head.appendChild(n)}}const L={textRotation:{titles:["Tech & Gaming Excellence with KBVE","Code, Game, Create with KBVE","Build Your Digital Empire","Master the Art of Development"],subtitles:["Flow with serene access and deep-blue level features.","Where innovation meets gaming passion.","Crafting tomorrow's digital experiences.","Elevate your skills to the next level."],descriptions:["Whether you're diving into containerization, mastering Node.js, pushing for Diamond in League, or raiding in WoW, our community is here to support your journey. Share knowledge, form teams, and achieve your goals together.","Join our vibrant community of developers and gamers. From React mastery to epic gaming sessions, we're building the future together.","Discover cutting-edge tools, participate in collaborative projects, and connect with like-minded creators who share your passion for excellence.","Transform your ideas into reality with our comprehensive resources, expert guidance, and supportive community ecosystem."],badges:["Memes","Tech","Gaming","Community"],interval:5e3},particles:{count:6,colors:["#22d3ee","#06b6d4","#0891b2","#0e7490"]},glowEffect:{intensity:.4,color:"#22d3ee"}},I=({config:M={}})=>{const[t,n]=y.useState(0),[o,i]=y.useState(!1),[c,p]=y.useState("idle"),a=y.useRef({panel:null,title:null,subtitle:null,description:null,badge:null,glow:null,particles:null,background:null,decoration:null,magnetic:null}),m=y.useRef([]),f=y.useRef(null),u={...L,...M};y.useEffect(()=>{if(w.injectAnimationStyles(),a.current={panel:document.querySelector("[data-neoglass-panel]"),title:document.querySelector("[data-neoglass-title]"),subtitle:document.querySelector("[data-neoglass-subtitle]"),description:document.querySelector("[data-neoglass-description]"),badge:document.querySelector("[data-neoglass-badge]"),glow:document.querySelector("[data-neoglass-glow]"),particles:document.querySelector("[data-neoglass-particles]"),background:document.querySelector("[data-neoglass-bg]"),decoration:document.querySelector("[data-neoglass-decor]"),magnetic:document.querySelector("[data-neoglass-magnetic]")},a.current.panel){const e=w.createVisibilityObserver(i);e.observe(a.current.panel),m.current.push(()=>{e.disconnect()})}return()=>{m.current.forEach(e=>e()),m.current=[]}},[]),y.useEffect(()=>{if(!o||c==="paused")return;const e=async()=>{p("animating");const s=(t+1)%u.textRotation.titles.length;await l(s),n(s),p("idle")};return f.current=setInterval(e,u.textRotation.interval),()=>{f.current&&clearInterval(f.current)}},[o,t,c,u.textRotation.interval]);const l=async e=>{const{title:s,subtitle:r,description:d,badge:g}=a.current,{titles:x,subtitles:h,descriptions:b,badges:E}=u.textRotation,v=[];try{s&&v.push(w.animateTextTransition(s,x[e])),r&&v.push(w.animateTextTransition(r,h[e])),d&&v.push(w.animateTextTransition(d,b[e])),g&&v.push(w.animateTextTransition(g,E[e])),await Promise.all(v)}catch(C){console.warn("Animation failed, using fallback:",C),s&&(s.textContent=x[e]),r&&(r.textContent=h[e]),d&&(d.textContent=b[e]),g&&(g.textContent=E[e])}};return y.useEffect(()=>{if(!o||!a.current.particles)return;const e=()=>{const r=w.createParticle({size:Math.random()*3+1,color:u.particles.colors[Math.floor(Math.random()*u.particles.colors.length)],opacity:Math.random()*.5+.2,duration:Math.random()*3+2,delay:Math.random()*.5});a.current.particles?.appendChild(r),setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},6e3)};for(let r=0;r<u.particles.count;r++)setTimeout(()=>e(),r*500);const s=setInterval(e,2e3);return m.current.push(()=>clearInterval(s)),()=>{clearInterval(s)}},[o,u.particles]),y.useEffect(()=>{if(!o||!a.current.glow)return;const e=a.current.glow;if(!e)return;const s=()=>{const d=u.glowEffect.intensity,g=u.glowEffect.color;e.style.setProperty("--glow-intensity",d.toString()),e.style.setProperty("--glow-color",g),e.classList.add("animate-pulse"),setTimeout(()=>{e.classList.remove("animate-pulse")},2e3)};s();const r=setInterval(s,4e3);return m.current.push(()=>clearInterval(r)),()=>{clearInterval(r)}},[o,u.glowEffect]),y.useEffect(()=>{const e=()=>{if(!a.current.panel)return;const r=a.current.panel.getBoundingClientRect(),d=Math.max(0,Math.min(1,(window.innerHeight-r.top)/window.innerHeight)),g=a.current.background;if(g){const h=(d-.5)*20;g.style.transform=`translateY(${h}px)`}const x=a.current.decoration;if(x){const h=d*15;x.style.transform=`rotate(${h}deg)`}},s=w.throttle(e,16);return window.addEventListener("scroll",s,{passive:!0}),m.current.push(()=>window.removeEventListener("scroll",s)),()=>window.removeEventListener("scroll",s)},[]),y.useEffect(()=>{const e=d=>{if(!a.current.panel)return;const g=a.current.panel.getBoundingClientRect(),x=d.clientX-g.left,h=d.clientY-g.top,b=g.width/2,E=g.height/2,v=.1,C=(x-b)*v,T=(h-E)*v,S=a.current.magnetic;S&&(S.style.transform=`translate(${C}px, ${T}px)`)},s=()=>{const d=a.current.magnetic;d&&(d.style.transform="translate(0px, 0px)")},r=a.current.panel;return r&&(r.addEventListener("mousemove",e),r.addEventListener("mouseleave",s),m.current.push(()=>{r.removeEventListener("mousemove",e),r.removeEventListener("mouseleave",s)})),()=>{r&&(r.removeEventListener("mousemove",e),r.removeEventListener("mouseleave",s))}},[]),null};export{I as default};
