import{R as i,r as d}from"./index.39e0ea27.js";import{_ as B}from"./preload-helper.101896b7.js";import{u as Z,f as H,b as V,p as O}from"./appwrite.120d4d43.js";import{u as L}from"./index.a4c6d265.js";import{T as F}from"./react.b149197b.js";import{j as e}from"./jsx-runtime.e181d7ea.js";import"./_commonjsHelpers.87174ba5.js";function k(){return k=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var t=arguments[s];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},k.apply(this,arguments)}function P(e,s){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],!(s.indexOf(t)>=0)&&(l[t]=e[t]);return l}function q(e){d.useEffect(e,[])}function M(e,s){void 0===s&&(s={});var t=s,a=t.volume,l=void 0===a?1:a,r=t.playbackRate,n=void 0===r?1:r,o=t.soundEnabled,c=void 0===o||o,d=t.interrupt,x=void 0!==d&&d,u=t.onload,h=P(t,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),m=i.useRef(null),f=i.useRef(!1),p=i.useState(null),j=p[0],g=p[1],v=i.useState(null),w=v[0],b=v[1],y=function(){"function"==typeof u&&u.call(this),f.current&&g(1e3*this.duration()),b(this)};q((function(){return B((()=>import("./howler.967063d6.js").then((e=>e.h))),["_astro/howler.967063d6.js","_astro/_commonjsHelpers.87174ba5.js"]).then((function(s){var t;f.current||(m.current=null!==(t=s.Howl)&&void 0!==t?t:s.default.Howl,f.current=!0,new m.current(k({src:Array.isArray(e)?e:[e],volume:l,rate:n,onload:y},h)))})),function(){f.current=!1}})),i.useEffect((function(){m.current&&w&&b(new m.current(k({src:Array.isArray(e)?e:[e],volume:l,onload:y},h)))}),[JSON.stringify(e)]),i.useEffect((function(){w&&(w.volume(l),w.rate(n))}),[l,n]);var N=i.useCallback((function(e){typeof e>"u"&&(e={}),w&&(c||e.forceSoundEnabled)&&(x&&w.stop(),e.playbackRate&&w.rate(e.playbackRate),w.play(e.id))}),[w,c,x]),A=i.useCallback((function(e){w&&w.stop(e)}),[w]),L=i.useCallback((function(e){w&&w.pause(e)}),[w]);return[N,{sound:w,stop:A,pause:L,duration:j}]}const I=s=>e.jsx("span",{children:e.jsx(F,{onInit:e=>{e.typeString(s).callFunction((()=>{console.log("Typing String")})).start()}})}),R=({width:s=100,height:t=24})=>e.jsx("div",{className:`w-[${s}px] h-[${t}px] rounded bg-gray-300 animate-pulse inline-flex ml-2 mr-2`});function D(e,s,t){try{return e.match(new RegExp(`${s}(.*)${t}`))[1]}catch{return}}const U=()=>{const s=L(Z),t=L(H),a=L(V),[l,r]=d.useState(!0),[n,o]=d.useState(""),[c,i]=d.useState("hover:animate-pulse hover:scale-110 hover:cursor-grab"),[x,u]=d.useState("ඞ Type a question below loser!"),h=d.useRef(null),[m]=M("https://conch.kbve.com/yes.ogg"),[f]=M("https://conch.kbve.com/no.ogg"),p=()=>{const e=x.toLocaleLowerCase().includes("yes"),s=x.toLocaleLowerCase().includes("no");return e?m():s&&f(),I(x)};async function j(){if(a)return;o(h.current.value);const e=JSON.stringify({question:`${h.current.value}. Answer this question with a yes or no! No neither!`});await O("6479653d74613fd2766e",e)}return d.useEffect((()=>{a?(i("grayscale animate-spin"),u("...Slowly rubbing the shell, bringing it closer to climax")):i("hover:animate-pulse hover:scale-110 hover:cursor-grab"),t&&(console.log("Found Function"),200===t.statusCode&&(u(D(t.response,'{"content":"','","role"').replace(/\n/g,"<br />")),r(!1)),500===t?.statusCode&&console.log("500 Error"))}),[a,t]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md text-gray-100",children:[e.jsxs("div",{className:"flex space-x-4 bg-offset p-4 rounded-lg",children:[e.jsx("img",{alt:"",src:"https://source.unsplash.com/100x100/?portrait",className:"object-cover w-12 h-12 rounded-full shadow bg-gray-500"}),e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("a",{rel:"noopener noreferrer",href:"/tools/conch/",target:"_blank",className:"text-sm font-semibold",children:"Shadow Conch of Darkness"}),e.jsx("span",{className:"text-xs flex content-center",children:"v0.2"}),e.jsxs("span",{className:"text-xs flex content-center",children:["Welcome ",s?.name||e.jsx(R,{})]}),e.jsxs("span",{className:"text-xs flex content-center",children:["UserID:  ",s?.$id||e.jsx(R,{})]})]})]}),e.jsx("div",{className:"flex flex-wrap justify-center items-center bg-fit bg-center bg-cover overflow-auto",children:e.jsxs("div",{className:"flex flex-col items-center w-full",children:[e.jsx("div",{className:"flex flex-row justify-center",children:e.jsx("img",{src:"/assets/img/conch/conch_shell.png",className:c,alt:"Magic Shell",onClick:j,disabled:a})}),e.jsx("div",{}),e.jsxs("div",{className:"flex flex-col w-full",children:[x&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col items-center w-full",children:e.jsx("div",{className:"flex flex-row justify-center bg-gray-900 p-4 rounded-xl",children:e.jsx("span",{children:e.jsx(p,{})})})})}),l?e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col w-full",children:e.jsx("span",{className:"text-3xl font-semibold text-center gradient-text py-2",children:e.jsx("textarea",{ref:h,rows:"3",placeholder:"Type your magic message here and click the shell below...",className:"p-4 rounded-md resize text-gray-600 w-1/2",spellCheck:"false"})})})}):e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col items-center w-full space-y-4 mt-4",children:e.jsxs("div",{className:"flex flex-row justify-center bg-gray-900 p-4 rounded-xl",children:[e.jsxs("span",{className:"text-2xl gradient-text",children:["Ask: ",n]}),e.jsx("a",{href:"/tools/conch/?new",children:e.jsxs("button",{type:"button",className:"relative px-8 py-4 ml-4 overflow-hidden font-semibold rounded bg-gray-100 text-gray-900",children:["Ask Again?",e.jsx("span",{className:"absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-orange-400",children:"Ask"})]})})]})})})]})]})}),e.jsxs("div",{className:"bg-offset p-4 m-4 rounded-lg",children:[e.jsx("h2",{className:"text-xl font-semibold",children:"Many years ago, in a dark universe within the shadow realm..."}),e.jsx("p",{className:"text-sm ",children:"There was a magical but dangerous shell. Shall you use it for personal power? Help society? Or something far more evil."}),a&&e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-row justify-center",children:e.jsx("img",{alt:"",src:"https://media.tenor.com/bpTjf2rCGJQAAAAC/sponge-bob-patrick-star.gif",className:"object-cover w-100 h-100 rounded-full shadow bg-gray-500"})})}),e.jsx("p",{className:"text-sm"})]}),e.jsxs("div",{className:"flex flex-wrap justify-between bg-offset p-4 m-4 rounded-lg",children:[e.jsxs("div",{className:"space-x-2",children:[e.jsx("button",{"aria-label":"Share this post",type:"button",className:"p-2 text-center",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-4 h-4 fill-current dark:text-violet-400",children:[e.jsx("title",{children:"Share Button"}),e.jsx("path",{d:"M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"})]})}),e.jsx("button",{"aria-label":"Bookmark this post",type:"button",className:"p-2",children:e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:"w-4 h-4 fill-current dark:text-violet-400",children:[e.jsx("title",{children:"Bookmark Button"}),e.jsx("path",{d:"M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"})]})})]}),e.jsxs("div",{className:"flex space-x-2 text-sm dark:text-gray-400",children:[e.jsxs("button",{type:"button",className:"flex items-center p-1 space-x-1.5",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","aria-label":"Number of comments",className:"w-4 h-4 fill-current dark:text-violet-400",children:[e.jsx("title",{children:"Comments"}),e.jsx("path",{d:"M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"}),e.jsx("path",{d:"M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"})]}),e.jsx("span",{children:" 30"})]}),e.jsxs("button",{type:"button",className:"flex items-center p-1 space-x-1.5",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512","aria-label":"Number of likes",className:"w-4 h-4 fill-current dark:text-violet-400",children:[e.jsx("title",{children:"Likes"}),e.jsx("path",{d:"M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"}),e.jsx("path",{d:"M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"})]}),e.jsx("span",{children:"283"})]})]})]})]})})};export{U as default};