import{r as i}from"./index.8c3da851.js";var l={exports:{}},n={},u=i.exports,m=Symbol.for("react.element"),y=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function s(r,e,o){var t,n={},s=null,f=null;for(t in void 0!==o&&(s=""+o),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(f=e.ref),e)a.call(e,t)&&!d.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps)void 0===n[t]&&(n[t]=e[t]);return{$$typeof:m,type:r,key:s,ref:f,props:n,_owner:c.current}}n.Fragment=y,n.jsx=s,n.jsxs=s,l.exports=n;export{l as j};