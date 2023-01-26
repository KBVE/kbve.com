import{r as u}from"./index.0b2a3d34.js";var _={},l={get exports(){return _},set exports(r){_=r}},n={},m=u,x=Symbol.for("react.element"),y=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function i(r,e,o){var t,n={},_=null,s=null;for(t in void 0!==o&&(_=""+o),void 0!==e.key&&(_=""+e.key),void 0!==e.ref&&(s=e.ref),e)a.call(e,t)&&!v.hasOwnProperty(t)&&(n[t]=e[t]);if(r&&r.defaultProps)for(t in e=r.defaultProps)void 0===n[t]&&(n[t]=e[t]);return{$$typeof:x,type:r,key:_,ref:s,props:n,_owner:c.current}}n.Fragment=y,n.jsx=i,n.jsxs=i,l.exports=n;export{_ as j};