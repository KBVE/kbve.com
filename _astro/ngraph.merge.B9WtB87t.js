var h,n;function y(){if(n)return h;n=1,h=u;function u(e,f){var r;if(e||(e={}),f){for(r in f)if(f.hasOwnProperty(r)){var m=e.hasOwnProperty(r),i=typeof f[r],v=!m||typeof e[r]!==i;v?e[r]=f[r]:i==="object"&&(e[r]=u(e[r],f[r]))}}return e}return h}export{y as r};