function g(e){const t=+this._x.call(null,e);return w(this.cover(t),t,e)}function w(e,t,i){if(isNaN(t))return e;var r,n=e._root,h={data:i},o=e._x0,s=e._x1,l,a,_,f,x;if(!n)return e._root=h,e;for(;n.length;)if((_=t>=(l=(o+s)/2))?o=l:s=l,r=n,!(n=n[f=+_]))return r[f]=h,e;if(a=+e._x.call(null,n.data),t===a)return h.next=n,r?r[f]=h:e._root=h,e;do r=r?r[f]=new Array(2):e._root=new Array(2),(_=t>=(l=(o+s)/2))?o=l:s=l;while((f=+_)==(x=+(a>=l)));return r[x]=n,r[f]=h,e}function d(e){Array.isArray(e)||(e=Array.from(e));const t=e.length,i=new Float64Array(t);let r=1/0,n=-1/0;for(let h=0,o;h<t;++h)isNaN(o=+this._x.call(null,e[h]))||(i[h]=o,o<r&&(r=o),o>n&&(n=o));if(r>n)return this;this.cover(r).cover(n);for(let h=0;h<t;++h)w(this,i[h],e[h]);return this}function y(e){if(isNaN(e=+e))return this;var t=this._x0,i=this._x1;if(isNaN(t))i=(t=Math.floor(e))+1;else{for(var r=i-t||1,n=this._root,h,o;t>e||e>=i;)switch(o=+(e<t),h=new Array(2),h[o]=n,n=h,r*=2,o){case 0:i=t+r;break;case 1:t=i-r;break}this._root&&this._root.length&&(this._root=n)}return this._x0=t,this._x1=i,this}function A(){var e=[];return this.visit(function(t){if(!t.length)do e.push(t.data);while(t=t.next)}),e}function N(e){return arguments.length?this.cover(+e[0][0]).cover(+e[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function c(e,t,i){this.node=e,this.x0=t,this.x1=i}function b(e,t){var i,r=this._x0,n,h,o=this._x1,s=[],l=this._root,a,_;for(l&&s.push(new c(l,r,o)),t==null?t=1/0:(r=e-t,o=e+t);a=s.pop();)if(!(!(l=a.node)||(n=a.x0)>o||(h=a.x1)<r))if(l.length){var f=(n+h)/2;s.push(new c(l[1],f,h),new c(l[0],n,f)),(_=+(e>=f))&&(a=s[s.length-1],s[s.length-1]=s[s.length-1-_],s[s.length-1-_]=a)}else{var x=Math.abs(e-+this._x.call(null,l.data));x<t&&(t=x,r=e-x,o=e+x,i=l.data)}return i}function m(e){if(isNaN(l=+this._x.call(null,e)))return this;var t,i=this._root,r,n,h,o=this._x0,s=this._x1,l,a,_,f,x;if(!i)return this;if(i.length)for(;;){if((_=l>=(a=(o+s)/2))?o=a:s=a,t=i,!(i=i[f=+_]))return this;if(!i.length)break;t[f+1&1]&&(r=t,x=f)}for(;i.data!==e;)if(n=i,!(i=i.next))return this;return(h=i.next)&&delete i.next,n?(h?n.next=h:delete n.next,this):t?(h?t[f]=h:delete t[f],(i=t[0]||t[1])&&i===(t[1]||t[0])&&!i.length&&(r?r[x]=i:this._root=i),this):(this._root=h,this)}function k(e){for(var t=0,i=e.length;t<i;++t)this.remove(e[t]);return this}function q(){return this._root}function I(){var e=0;return this.visit(function(t){if(!t.length)do++e;while(t=t.next)}),e}function j(e){var t=[],i,r=this._root,n,h,o;for(r&&t.push(new c(r,this._x0,this._x1));i=t.pop();)if(!e(r=i.node,h=i.x0,o=i.x1)&&r.length){var s=(h+o)/2;(n=r[1])&&t.push(new c(n,s,o)),(n=r[0])&&t.push(new c(n,h,s))}return this}function z(e){var t=[],i=[],r;for(this._root&&t.push(new c(this._root,this._x0,this._x1));r=t.pop();){var n=r.node;if(n.length){var h,o=r.x0,s=r.x1,l=(o+s)/2;(h=n[0])&&t.push(new c(h,o,l)),(h=n[1])&&t.push(new c(h,l,s))}i.push(r)}for(;r=i.pop();)e(r.node,r.x0,r.x1);return this}function M(e){return e[0]}function B(e){return arguments.length?(this._x=e,this):this._x}function F(e,t){var i=new v(t??M,NaN,NaN);return e==null?i:i.addAll(e)}function v(e,t,i){this._x=e,this._x0=t,this._x1=i,this._root=void 0}function p(e){for(var t={data:e.data},i=t;e=e.next;)i=i.next={data:e.data};return t}var u=F.prototype=v.prototype;u.copy=function(){var e=new v(this._x,this._x0,this._x1),t=this._root,i,r;if(!t)return e;if(!t.length)return e._root=p(t),e;for(i=[{source:t,target:e._root=new Array(2)}];t=i.pop();)for(var n=0;n<2;++n)(r=t.source[n])&&(r.length?i.push({source:r,target:t.target[n]=new Array(2)}):t.target[n]=p(r));return e};u.add=g;u.addAll=d;u.cover=y;u.data=A;u.extent=N;u.find=b;u.remove=m;u.removeAll=k;u.root=q;u.size=I;u.visit=j;u.visitAfter=z;u.x=B;export{F as b};