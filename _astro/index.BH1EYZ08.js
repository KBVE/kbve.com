let s=0,l=[];function r(){return s+=1,()=>{if(s-=1,s===0){let t=l;l=[];for(let e of t)e()}}}function n(t){let e=r();return t().finally(e)}export{n as t};
