import{r as u}from"./index.c6e42af6.js";var _={},l={get exports(){return _},set exports(e){_=e}},n={},m=u,x=Symbol.for("react.element"),y=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function i(e,r,o){var t,n={},_=null,f=null;for(t in void 0!==o&&(_=""+o),void 0!==r.key&&(_=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,t)&&!v.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===n[t]&&(n[t]=r[t]);return{$$typeof:x,type:e,key:_,ref:f,props:n,_owner:c.current}}n.Fragment=y,n.jsx=i,n.jsxs=i,l.exports=n;export{_ as j};