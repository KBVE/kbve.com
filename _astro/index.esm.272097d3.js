import{R as X}from"./index.c0d9332e.js";var le=e=>"checkbox"===e.type,ee=e=>e instanceof Date,O=e=>null==e;const Xe=e=>"object"==typeof e;var m=e=>!O(e)&&!Array.isArray(e)&&Xe(e)&&!ee(e),ft=e=>m(e)&&e.target?le(e.target)?e.target.checked:e.target.value:e,ct=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,dt=(e,t)=>e.has(ct(t)),yt=e=>{const t=e.constructor&&e.constructor.prototype;return m(t)&&t.hasOwnProperty("isPrototypeOf")},Ee=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function K(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else{if(Ee&&(e instanceof Blob||e instanceof FileList)||!r&&!m(e))return e;if(t=r?[]:{},r||yt(e))for(const r in e)e.hasOwnProperty(r)&&(t[r]=K(e[r]));else t=e}return t}var ae=e=>Array.isArray(e)?e.filter(Boolean):[],k=e=>void 0===e,c=(e,t,r)=>{if(!t||!m(e))return r;const s=ae(t.split(/[,[\].]+?/)).reduce(((e,t)=>O(e)?e:e[t]),e);return k(s)||s===e?k(e[t])?r:e[t]:s};const qe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},N={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},W={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};X.createContext(null);var ht=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(a,i,{get:()=>{const a=i;return t._proxyFormState[a]!==N.all&&(t._proxyFormState[a]=!s||N.all),r&&(r[a]=!0),e[a]}});return a},U=e=>m(e)&&!Object.keys(e).length,gt=(e,t,r,s)=>{r(e);const{name:a,...i}=e;return U(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find((e=>t[e]===(!s||N.all)))},Fe=e=>Array.isArray(e)?e:[e];function vt(e){const t=X.useRef(e);t.current=e,X.useEffect((()=>{const r=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{r&&r.unsubscribe()}}),[e.disabled])}var I=e=>"string"==typeof e,_t=(e,t,r,s,a)=>I(e)?(s&&t.watch.add(e),c(r,e,a)):Array.isArray(e)?e.map((e=>(s&&t.watch.add(e),c(r,e)))):(s&&(t.watchAll=!0),r),pe=e=>/^\w*$/.test(e),Ye=e=>ae(e.replace(/["|']|\]/g,"").split(/\.|\[/));function x(e,t,r){let s=-1;const a=pe(t)?[t]:Ye(t),i=a.length,n=i-1;for(;++s<i;){const t=a[s];let i=r;if(s!==n){const r=e[t];i=m(r)||Array.isArray(r)?r:isNaN(+a[s+1])?{}:[]}e[t]=i,e=e[t]}return e}var Vt=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{};const me=(e,t,r)=>{for(const s of r||Object.keys(e)){const r=c(e,s);if(r){const{_f:e,...s}=r;if(e&&t(e.name)){if(e.ref.focus){e.ref.focus();break}if(e.refs&&e.refs[0].focus){e.refs[0].focus();break}}else m(s)&&me(s,t)}}};var He=e=>({isOnSubmit:!e||e===N.onSubmit,isOnBlur:e===N.onBlur,isOnChange:e===N.onChange,isOnAll:e===N.all,isOnTouch:e===N.onTouched}),We=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some((t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length))))),At=(e,t,r)=>{const s=ae(c(e,r));return x(s,"root",t[r]),x(e,r,s),e},te=e=>"boolean"==typeof e,Oe=e=>"file"===e.type,z=e=>"function"==typeof e,ce=e=>{if(!Ee)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},fe=e=>I(e),Te=e=>"radio"===e.type,de=e=>e instanceof RegExp;const $e={value:!1,isValid:!1},Ke={value:!0,isValid:!0};var Ze=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter((e=>e&&e.checked&&!e.disabled)).map((e=>e.value));return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!k(e[0].attributes.value)?k(e[0].value)||""===e[0].value?Ke:{value:e[0].value,isValid:!0}:Ke:$e}return $e};const ze={isValid:!1,value:null};var je=e=>Array.isArray(e)?e.reduce(((e,t)=>t&&t.checked&&!t.disabled?{isValid:!0,value:t.value}:e),ze):ze;function Ge(e,t,r="validate"){if(fe(e)||Array.isArray(e)&&e.every(fe)||te(e)&&!e)return{type:r,message:fe(e)?e:"",ref:t}}var j=e=>m(e)&&!de(e)?e:{value:e,message:""},Je=async(e,t,r,s,a)=>{const{ref:i,refs:n,required:o,maxLength:u,minLength:l,min:d,max:f,pattern:y,validate:h,name:p,valueAsNumber:v,mount:g,disabled:b}=e._f,x=c(t,p);if(!g||b)return{};const V=n?n[0]:i,_=e=>{s&&V.reportValidity&&(V.setCustomValidity(te(e)?"":e||""),V.reportValidity())},A={},w=Te(i),S=le(i),F=w||S,D=(v||Oe(i))&&k(i.value)&&k(x)||ce(i)&&""===i.value||""===x||Array.isArray(x)&&!x.length,E=Vt.bind(null,p,r,A),N=(e,t,r,s=W.maxLength,a=W.minLength)=>{const n=e?t:r;A[p]={type:e?s:a,message:n,ref:i,...E(e?s:a,n)}};if(a?!Array.isArray(x)||!x.length:o&&(!F&&(D||O(x))||te(x)&&!x||S&&!Ze(n).isValid||w&&!je(n).isValid)){const{value:e,message:t}=fe(o)?{value:!!o,message:o}:j(o);if(e&&(A[p]={type:W.required,message:t,ref:V,...E(W.required,t)},!r))return _(t),A}if(!(D||O(d)&&O(f))){let e,t;const s=j(f),a=j(d);if(O(x)||isNaN(x)){const r=i.valueAsDate||new Date(x),n=e=>new Date((new Date).toDateString()+" "+e),o="time"==i.type,u="week"==i.type;I(s.value)&&x&&(e=o?n(x)>n(s.value):u?x>s.value:r>new Date(s.value)),I(a.value)&&x&&(t=o?n(x)<n(a.value):u?x<a.value:r<new Date(a.value))}else{const r=i.valueAsNumber||x&&+x;O(s.value)||(e=r>s.value),O(a.value)||(t=r<a.value)}if((e||t)&&(N(!!e,s.message,a.message,W.max,W.min),!r))return _(A[p].message),A}if((u||l)&&!D&&(I(x)||a&&Array.isArray(x))){const e=j(u),t=j(l),s=!O(e.value)&&x.length>+e.value,a=!O(t.value)&&x.length<+t.value;if((s||a)&&(N(s,e.message,t.message),!r))return _(A[p].message),A}if(y&&!D&&I(x)){const{value:e,message:t}=j(y);if(de(e)&&!x.match(e)&&(A[p]={type:W.pattern,message:t,ref:i,...E(W.pattern,t)},!r))return _(t),A}if(h)if(z(h)){const e=Ge(await h(x,t),V);if(e&&(A[p]={...e,...E(W.validate,e.message)},!r))return _(e.message),A}else if(m(h)){let e={};for(const s in h){if(!U(e)&&!r)break;const a=Ge(await h[s](x,t),V,s);a&&(e={...a,...E(s,a.message)},_(a.message),r&&(A[p]=e))}if(!U(e)&&(A[p]={ref:V,...e},!r))return A}return _(!0),A};function bt(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=k(e)?s++:e[t[s++]];return e}function xt(e){for(const t in e)if(e.hasOwnProperty(t)&&!k(e[t]))return!1;return!0}function p(e,t){const r=Array.isArray(t)?t:pe(t)?[t]:Ye(t),s=1===r.length?e:bt(e,r),a=r.length-1,i=r[a];return s&&delete s[i],0!==a&&(m(s)&&U(s)||Array.isArray(s)&&xt(s))&&p(e,r.slice(0,-1)),e}function we(){let e=[];return{get observers(){return e},next:t=>{for(const r of e)r.next&&r.next(t)},subscribe:t=>(e.push(t),{unsubscribe:()=>{e=e.filter((e=>e!==t))}}),unsubscribe:()=>{e=[]}}}var ye=e=>O(e)||!Xe(e);function G(e,t){if(ye(e)||ye(t))return e===t;if(ee(e)&&ee(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const r=e[a];if(!s.includes(a))return!1;if("ref"!==a){const e=t[a];if(ee(r)&&ee(e)||m(r)&&m(e)||Array.isArray(r)&&Array.isArray(e)?!G(r,e):r!==e)return!1}}return!0}var et=e=>"select-multiple"===e.type,Ft=e=>Te(e)||le(e),De=e=>ce(e)&&e.isConnected,tt=e=>{for(const t in e)if(z(e[t]))return!0;return!1};function he(e,t={}){const r=Array.isArray(e);if(m(e)||r)for(const r in e)Array.isArray(e[r])||m(e[r])&&!tt(e[r])?(t[r]=Array.isArray(e[r])?[]:{},he(e[r],t[r])):O(e[r])||(t[r]=!0);return t}function rt(e,t,r){const s=Array.isArray(e);if(m(e)||s)for(const s in e)Array.isArray(e[s])||m(e[s])&&!tt(e[s])?k(t)||ye(r[s])?r[s]=Array.isArray(e[s])?he(e[s],[]):{...he(e[s])}:rt(e[s],O(t)?{}:t[s],r[s]):r[s]=!G(e[s],t[s]);return r}var ke=(e,t)=>rt(e,t,he(t)),st=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>k(e)?e:t?""===e?NaN:e&&+e:r&&I(e)?new Date(e):s?s(e):e;function Se(e){const t=e.ref;if(!(e.refs?e.refs.every((e=>e.disabled)):t.disabled))return Oe(t)?t.files:Te(t)?je(e.refs).value:et(t)?[...t.selectedOptions].map((({value:e})=>e)):le(t)?Ze(e.refs).value:st(k(t.value)?e.ref.value:t.value,e)}var wt=(e,t,r,s)=>{const a={};for(const r of e){const e=c(t,r);e&&x(a,r,e._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},ue=e=>k(e)?e:de(e)?e.source:m(e)?de(e.value)?e.value.source:e.value:e,Dt=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Qe(e,t,r){const s=c(e,r);if(s||pe(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const s=a.join("."),i=c(t,s),n=c(e,s);if(i&&!Array.isArray(i)&&r!==s)return{name:r};if(n&&n.type)return{name:s,error:n};a.pop()}return{name:r}}var kt=(e,t,r,s,a)=>!a.isOnAll&&(!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:!(r?s.isOnChange:a.isOnChange)||e),St=(e,t)=>!ae(c(e,t)).length&&p(e,t);const mt={mode:N.onSubmit,reValidateMode:N.onChange,shouldFocusError:!0};function Et(e={},t){let r,s={...mt,...e},a={submitCount:0,isDirty:!1,isLoading:z(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},n=(m(s.defaultValues)||m(s.values))&&K(s.defaultValues||s.values)||{},o=s.shouldUnregister?{}:K(n),u={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:we(),array:we(),state:we()},h=e.resetOptions&&e.resetOptions.keepDirtyValues,v=He(s.mode),g=He(s.reValidateMode),b=s.criteriaMode===N.all,V=async e=>{if(f.isValid||e){const e=s.resolver?U((await F()).errors):await D(i,!0);e!==a.isValid&&y.state.next({isValid:e})}},_=e=>f.isValidating&&y.state.next({isValidating:e}),A=(e,t,r,s)=>{const a=c(i,e);if(a){const i=c(o,e,k(r)?c(n,e):r);k(i)||s&&s.defaultChecked||t?x(o,e,t?i:Se(a._f)):C(e,i),u.mount&&V()}},w=(e,t,r,s,i)=>{let o=!1,u=!1;const l={name:e};if(!r||s){f.isDirty&&(u=a.isDirty,a.isDirty=l.isDirty=E(),o=u!==l.isDirty);const r=G(c(n,e),t);u=c(a.dirtyFields,e),r?p(a.dirtyFields,e):x(a.dirtyFields,e,!0),l.dirtyFields=a.dirtyFields,o=o||f.dirtyFields&&u!==!r}if(r){const t=c(a.touchedFields,e);t||(x(a.touchedFields,e,r),l.touchedFields=a.touchedFields,o=o||f.touchedFields&&t!==r)}return o&&i&&y.state.next(l),o?l:{}},S=(t,s,i,n)=>{const o=c(a.errors,t),u=f.isValid&&te(s)&&a.isValid!==s;if(e.delayError&&i?(r=(e=>t=>{clearTimeout(d),d=setTimeout(e,t)})((()=>((e,t)=>{x(a.errors,e,t),y.state.next({errors:a.errors})})(t,i))),r(e.delayError)):(clearTimeout(d),r=null,i?x(a.errors,t,i):p(a.errors,t)),(i?!G(o,i):o)||!U(n)||u){const e={...n,...u&&te(s)?{isValid:s}:{},errors:a.errors,name:t};a={...a,...e},y.state.next(e)}_(!1)},F=async e=>s.resolver(o,s.context,wt(e||l.mount,i,s.criteriaMode,s.shouldUseNativeValidation)),D=async(e,t,r={valid:!0})=>{for(const i in e){const n=e[i];if(n){const{_f:e,...i}=n;if(e){const i=l.array.has(e.name),u=await Je(n,o,b,s.shouldUseNativeValidation&&!t,i);if(u[e.name]&&(r.valid=!1,t))break;!t&&(c(u,e.name)?i?At(a.errors,u,e.name):x(a.errors,e.name,u[e.name]):p(a.errors,e.name))}i&&await D(i,t,r)}}return r.valid},E=(e,t)=>(e&&t&&x(o,e,t),!G(q(),n)),j=(e,t,r)=>_t(e,l,{...u.mount?o:k(t)?n:I(e)?{[e]:t}:t},r,t),C=(e,t,r={})=>{const s=c(i,e);let a=t;if(s){const r=s._f;r&&(!r.disabled&&x(o,e,st(t,r)),a=ce(r.ref)&&O(t)?"":t,et(r.ref)?[...r.ref.options].forEach((e=>e.selected=a.includes(e.value))):r.refs?le(r.ref)?r.refs.length>1?r.refs.forEach((e=>(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((t=>t===e.value)):a===e.value))):r.refs[0]&&(r.refs[0].checked=!!a):r.refs.forEach((e=>e.checked=e.value===a)):Oe(r.ref)?r.ref.value="":(r.ref.value=a,r.ref.type||y.values.next({name:e,values:{...o}})))}(r.shouldDirty||r.shouldTouch)&&w(e,a,r.shouldTouch,r.shouldDirty,!0),r.shouldValidate&&W(e)},T=(e,t,r)=>{for(const s in t){const a=t[s],n=`${e}.${s}`,o=c(i,n);!l.array.has(e)&&ye(a)&&(!o||o._f)||ee(a)?C(n,a,r):T(n,a,r)}},L=(e,r,s={})=>{const d=c(i,e),m=l.array.has(e),h=K(r);x(o,e,h),m?(y.array.next({name:e,values:{...o}}),(f.isDirty||f.dirtyFields)&&s.shouldDirty&&y.state.next({name:e,dirtyFields:ke(n,o),isDirty:E(e,h)})):!d||d._f||O(h)?C(e,h,s):T(e,h,s),We(e,l)&&y.state.next({...a}),y.values.next({name:e,values:{...o}}),!u.mount&&t()},B=async e=>{const t=e.target;let n=t.name,u=!0;const d=c(i,n);if(d){let m,h;const p=t.type?Se(d._f):ft(e),A=e.type===qe.BLUR||e.type===qe.FOCUS_OUT,k=!Dt(d._f)&&!s.resolver&&!c(a.errors,n)&&!d._f.deps||kt(A,c(a.touchedFields,n),a.isSubmitted,g,v),O=We(n,l,A);x(o,n,p),A?(d._f.onBlur&&d._f.onBlur(e),r&&r(0)):d._f.onChange&&d._f.onChange(e);const E=w(n,p,A,!1),N=!U(E)||O;if(!A&&y.values.next({name:n,type:e.type,values:{...o}}),k)return f.isValid&&V(),N&&y.state.next({name:n,...O?{}:E});if(!A&&O&&y.state.next({...a}),_(!0),s.resolver){const{errors:e}=await F([n]),t=Qe(a.errors,i,n),r=Qe(e,i,t.name||n);m=r.error,n=r.name,h=U(e)}else m=(await Je(d,o,b,s.shouldUseNativeValidation))[n],u=isNaN(p)||p===c(o,n,p),u&&(m?h=!1:f.isValid&&(h=await D(i,!0)));u&&(d._f.deps&&W(d._f.deps),S(n,h,m,E))}},W=async(e,t={})=>{let r,n;const o=Fe(e);if(_(!0),s.resolver){const t=await(async e=>{const{errors:t}=await F();if(e)for(const r of e){const e=c(t,r);e?x(a.errors,r,e):p(a.errors,r)}else a.errors=t;return t})(k(e)?e:o);r=U(t),n=e?!o.some((e=>c(t,e))):r}else e?(n=(await Promise.all(o.map((async e=>{const t=c(i,e);return await D(t&&t._f?{[e]:t}:t)})))).every(Boolean),(n||a.isValid)&&V()):n=r=await D(i);return y.state.next({...!I(e)||f.isValid&&r!==a.isValid?{}:{name:e},...s.resolver||!e?{isValid:r}:{},errors:a.errors,isValidating:!1}),t.shouldFocus&&!n&&me(i,(e=>e&&c(a.errors,e)),e?o:l.mount),n},q=e=>{const t={...n,...u.mount?o:{}};return k(e)?t:I(e)?c(t,e):e.map((e=>c(t,e)))},M=(e,t)=>({invalid:!!c((t||a).errors,e),isDirty:!!c((t||a).dirtyFields,e),isTouched:!!c((t||a).touchedFields,e),error:c((t||a).errors,e)}),X=(e,t,r)=>{const s=(c(i,e,{_f:{}})._f||{}).ref;x(a.errors,e,{...t,ref:s}),y.state.next({name:e,errors:a.errors,isValid:!1}),r&&r.shouldFocus&&s&&s.focus&&s.focus()},H=(e,t={})=>{for(const r of e?Fe(e):l.mount)l.mount.delete(r),l.array.delete(r),t.keepValue||(p(i,r),p(o,r)),!t.keepError&&p(a.errors,r),!t.keepDirty&&p(a.dirtyFields,r),!t.keepTouched&&p(a.touchedFields,r),!s.shouldUnregister&&!t.keepDefaultValue&&p(n,r);y.values.next({values:{...o}}),y.state.next({...a,...t.keepDirty?{isDirty:E()}:{}}),!t.keepIsValid&&V()},$=(e,t={})=>{let r=c(i,e);const a=te(t.disabled);return x(i,e,{...r||{},_f:{...r&&r._f?r._f:{ref:{name:e}},name:e,mount:!0,...t}}),l.mount.add(e),r?a&&x(o,e,t.disabled?void 0:c(o,e,Se(r._f))):A(e,!0,t.value),{...a?{disabled:t.disabled}:{},...s.progressive?{required:!!t.required,min:ue(t.min),max:ue(t.max),minLength:ue(t.minLength),maxLength:ue(t.maxLength),pattern:ue(t.pattern)}:{},name:e,onChange:B,onBlur:B,ref:a=>{if(a){$(e,t),r=c(i,e);const s=k(a.value)&&a.querySelectorAll&&a.querySelectorAll("input,select,textarea")[0]||a,o=Ft(s),u=r._f.refs||[];if(o?u.find((e=>e===s)):s===r._f.ref)return;x(i,e,{_f:{...r._f,...o?{refs:[...u.filter(De),s,...Array.isArray(c(n,e))?[{}]:[]],ref:{type:s.type,name:e}}:{ref:s}}}),A(e,!1,void 0,s)}else r=c(i,e,{}),r._f&&(r._f.mount=!1),(s.shouldUnregister||t.shouldUnregister)&&(!dt(l.array,e)||!u.action)&&l.unMount.add(e)}}},P=()=>s.shouldFocusError&&me(i,(e=>e&&c(a.errors,e)),l.mount),R=(e,t)=>async r=>{r&&(r.preventDefault&&r.preventDefault(),r.persist&&r.persist());let n=K(o);if(y.state.next({isSubmitting:!0}),s.resolver){const{errors:e,values:t}=await F();a.errors=e,n=t}else await D(i);p(a.errors,"root"),U(a.errors)?(y.state.next({errors:{}}),await e(n,r)):(t&&await t({...a.errors},r),P(),setTimeout(P)),y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:U(a.errors),submitCount:a.submitCount+1,errors:a.errors})},J=(r,s={})=>{const d=r||n,m=K(d),p=r&&!U(r)?m:n;if(s.keepDefaultValues||(n=d),!s.keepValues){if(s.keepDirtyValues||h)for(const e of l.mount)c(a.dirtyFields,e)?x(p,e,c(o,e)):L(e,c(p,e));else{if(Ee&&k(r))for(const e of l.mount){const t=c(i,e);if(t&&t._f){const e=Array.isArray(t._f.refs)?t._f.refs[0]:t._f.ref;if(ce(e)){const t=e.closest("form");if(t){t.reset();break}}}}i={}}o=e.shouldUnregister?s.keepDefaultValues?K(n):{}:K(p),y.array.next({values:{...p}}),y.values.next({values:{...p}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!u.mount&&t(),u.mount=!f.isValid||!!s.keepIsValid,u.watch=!!e.shouldUnregister,y.state.next({submitCount:s.keepSubmitCount?a.submitCount:0,isDirty:s.keepDirty?a.isDirty:!(!s.keepDefaultValues||G(r,n)),isSubmitted:!!s.keepIsSubmitted&&a.isSubmitted,dirtyFields:s.keepDirtyValues?a.dirtyFields:s.keepDefaultValues&&r?ke(n,r):{},touchedFields:s.keepTouched?a.touchedFields:{},errors:s.keepErrors?a.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Q=(e,t)=>J(z(e)?e(o):e,t);return{control:{register:$,unregister:H,getFieldState:M,handleSubmit:R,setError:X,_executeSchema:F,_getWatch:j,_getDirty:E,_updateValid:V,_removeUnmounted:()=>{for(const e of l.unMount){const t=c(i,e);t&&(t._f.refs?t._f.refs.every((e=>!De(e))):!De(t._f.ref))&&H(e)}l.unMount=new Set},_updateFieldArray:(e,t=[],r,s,l=!0,d=!0)=>{if(s&&r){if(u.action=!0,d&&Array.isArray(c(i,e))){const t=r(c(i,e),s.argA,s.argB);l&&x(i,e,t)}if(d&&Array.isArray(c(a.errors,e))){const t=r(c(a.errors,e),s.argA,s.argB);l&&x(a.errors,e,t),St(a.errors,e)}if(f.touchedFields&&d&&Array.isArray(c(a.touchedFields,e))){const t=r(c(a.touchedFields,e),s.argA,s.argB);l&&x(a.touchedFields,e,t)}f.dirtyFields&&(a.dirtyFields=ke(n,o)),y.state.next({name:e,isDirty:E(e,t),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else x(o,e,t)},_getFieldArray:t=>ae(c(u.mount?o:n,t,e.shouldUnregister?c(n,t,[]):[])),_reset:J,_resetDefaultValues:()=>z(s.defaultValues)&&s.defaultValues().then((e=>{Q(e,s.resetOptions),y.state.next({isLoading:!1})})),_updateFormState:e=>{a={...a,...e}},_subjects:y,_proxyFormState:f,get _fields(){return i},get _formValues(){return o},get _state(){return u},set _state(e){u=e},get _defaultValues(){return n},get _names(){return l},set _names(e){l=e},get _formState(){return a},set _formState(e){a=e},get _options(){return s},set _options(e){s={...s,...e}}},trigger:W,register:$,handleSubmit:R,watch:(e,t)=>z(e)?y.values.subscribe({next:r=>e(j(void 0,t),r)}):j(e,t,!0),setValue:L,getValues:q,reset:Q,resetField:(e,t={})=>{c(i,e)&&(k(t.defaultValue)?L(e,c(n,e)):(L(e,t.defaultValue),x(n,e,t.defaultValue)),t.keepTouched||p(a.touchedFields,e),t.keepDirty||(p(a.dirtyFields,e),a.isDirty=t.defaultValue?E(e,c(n,e)):E()),t.keepError||(p(a.errors,e),f.isValid&&V()),y.state.next({...a}))},clearErrors:e=>{e&&Fe(e).forEach((e=>p(a.errors,e))),y.state.next({errors:e?a.errors:{}})},unregister:H,setError:X,setFocus:(e,t={})=>{const r=c(i,e),s=r&&r._f;if(s){const e=s.refs?s.refs[0]:s.ref;e.focus&&(e.focus(),t.shouldSelect&&e.select())}},getFieldState:M}}function Ct(e={}){const t=X.useRef(),[r,s]=X.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:z(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Et(e,(()=>s((e=>({...e}))))),formState:r});const a=t.current.control;return a._options=e,vt({subject:a._subjects.state,next:e=>{gt(e,a._proxyFormState,a._updateFormState,!0)&&s({...a._formState})}}),X.useEffect((()=>{!e.values||G(e.values,a._defaultValues)&&G(e.values,a._formValues)?a._resetDefaultValues():a._reset(e.values,a._options.resetOptions)}),[e.values,a]),X.useEffect((()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()})),t.current.formState=ht(r,a),t.current}export{Ct as u};