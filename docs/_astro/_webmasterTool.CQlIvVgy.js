import{j as e}from"./jsx-runtime.CzgMDNMm.js";import{r as p}from"./index.DQ2WTIsS.js";const x=()=>{const[o,r]=p.useState(""),l=a=>{r(a.target.value)},n=a=>{let t;a.indexOf("//")>-1?t=a.split("/")[2]:t=a.split("/")[0],t=t.split(":")[0],t=t.split("?")[0];const s=t.split(".").reverse();return s!=null&&s.length>1&&(t=s[1]+"."+s[0],s.length>2&&s[1].length<4&&(t=s[2]+"."+t)),t},d={google:"https://www.google.com/search?q=site:{url}",bing:"https://www.bing.com/search?q=site:{url}",yahoo:"https://search.yahoo.com/search?p=site:{url}",ahrefs:"https://ahrefs.com/backlink-checker/?input={url}&mode=subdomains",googleconsole:"https://search.google.com/search-console/index?resource_id=sc-domain%3A{root}",pagespeeddev:"https://developers.google.com/speed/pagespeed/insights/?url={url}"},i=a=>{if(!o){alert("Please enter a URL.");return}const t=n(o);let s=d[a];s=s.replace("{url}",encodeURIComponent(o)),s=s.replace("{root}",encodeURIComponent(t)),window.open(s,"_blank")},c=[{name:"PageSpeed Web Dev Test",type:"pagespeeddev"},{name:"Google Search Index",type:"google"},{name:"Google WebMaster Console",type:"googleconsole"},{name:"Bing Search Index",type:"bing"},{name:"Yahoo Search Index",type:"yahoo"},{name:"Ahrefs Backlink Check",type:"ahrefs"}];return e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"p-4",children:e.jsx("input",{type:"text",value:o,onChange:l,placeholder:"Enter website URL",className:"text-sm p-2 border rounded-md w-full"})}),e.jsx("div",{className:"-m-1.5 overflow-x-auto",children:e.jsx("div",{className:"p-1.5 min-w-full inline-block align-middle",children:e.jsx("div",{className:"overflow-hidden",children:e.jsxs("table",{className:"!min-w-full divide-y divide-gray-200 dark:divide-neutral-700",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Operation"}),e.jsx("th",{scope:"col",className:"px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500",children:"Action"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-200 dark:divide-neutral-700",children:c.map(a=>e.jsxs("tr",{className:"hover:!bg-gray-100 dark:hover:!bg-neutral-700",children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium ",children:a.name}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-end text-sm font-medium",children:e.jsx("button",{type:"button",className:"inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400",onClick:()=>i(a.type),children:"Run"})})]},a.type))})]})})})})]})};export{x as default};