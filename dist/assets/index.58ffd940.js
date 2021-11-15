var Oe=Object.defineProperty,Le=Object.defineProperties;var je=Object.getOwnPropertyDescriptors;var oe=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var se=(t,e,n)=>e in t?Oe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,H=(t,e)=>{for(var n in e||(e={}))Me.call(e,n)&&se(t,n,e[n]);if(oe)for(var n of oe(e))$e.call(e,n)&&se(t,n,e[n]);return t},ie=(t,e)=>Le(t,je(e));import{r as A,j as p,T as W,b as C,F as L,O as P,D as Ne,aF as ze,x as V,B as G,a5 as qe,a6 as He,a7 as We,K as j,G as Ve,P as Ge,W as Ke,aG as Xe,e as Ye,aH as M,aI as Je,aJ as Ze,aK as Qe,aL as et,aM as ae,aN as tt,aO as nt,aE as ue}from"./vendor.79cd4210.js";import{S as le,d as rt,T as K,c as ot,a as ce,F as st}from"./FacebookRounded.cfc126ab.js";import{D as it,b as I,g as he,d as at,a as ut}from"./index.c44c2dec.js";const lt=A.exports.memo(()=>(console.log("header RErender"),p(W,{variant:"h5",align:"center",color:"inherit",sx:{mb:6,pt:4},children:"C\xC0I \u0110\u1EB6T C\u01A0 B\u1EA2N"}))),ct=A.exports.memo(({handleLinkFBAccount:t,handleDiscordLinking:e,providerData:n})=>{console.log("rerender sol");const r=n.find(o=>o.providerId==="facebook.com");return C(L,{children:[C(P,{children:[p(Ne,{}),p(le,{bgColor:"#5865F2",Icon:it,textColor:"white",sx:{mt:3},children:"Li\xEAn k\u1EBFt t\xE0i kho\u1EA3n Discord"})]}),p(P,{children:p(le,{bgColor:"#3360ff",Icon:rt,textColor:"white",sx:{my:2},onClick:t,disabled:Boolean(r),children:(r==null?void 0:r.displayName)||"Li\xEAn k\u1EBFt t\xE0i kho\u1EA3n Facebook"})})]})}),ht=A.exports.memo(({createdAt:t})=>{console.log("rerender typ");const e=new Date(+t);return C(W,{variant:"body1",color:"inherit",sx:{mt:3,mb:4},children:["Ng\xE0y tham gia:"," ",`${e.getDate()}/${e.getMonth()+1}/${e.getFullYear()}`]})});var dt=()=>{const t=I();return A.exports.useCallback(async()=>{try{await ze(t)}catch(e){throw e}},[])};const ft=A.exports.memo(()=>{const{uid:t,email:e,emailVerified:n}=I(),[r,o]=A.exports.useState(!1),{enqueueSnackbar:s}=V(),a=dt(),u=e.replace(/(?<=^[A-Za-z0-9]{2}).*?(?=@)/g,"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"),i=async()=>{o(!0);try{await a(),s(`\u0110\xE3 g\u1EEDi th\u01B0 x\xE1c nh\u1EADn \u0111\u1EBFn ${u}. N\u1EBFu kh\xF4ng t\xECm th\u1EA5y, h\xE3y ki\u1EC3m tra m\u1EE5c th\u01B0 r\xE1c.`,{variant:"info",persist:!0})}catch(l){o(!1),s(`\u0110\xE3 c\xF3 l\u1ED7i x\u1EA3y ra: ${he(l.code)}`,{variant:"error",persist:!0})}};return console.log("rerender IDAndEmail"),C(L,{children:[p(K,{InputProps:{readOnly:!0},variant:"outlined",label:"ID",defaultValue:t,sx:{width:"100%",mb:6}}),p(K,{InputProps:{readOnly:!0},variant:"outlined",label:"Email",defaultValue:u,sx:{width:"100%"},helperText:!n&&p(G,{sx:{position:"absolute",right:0},onClick:r?void 0:i,disabled:r,children:"X\xE1c th\u1EF1c email"})})]})});var X={},pt=He.exports;Object.defineProperty(X,"__esModule",{value:!0});var de=X.default=void 0,gt=pt(qe),mt=We,bt=(0,gt.default)((0,mt.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Create");de=X.default=bt;var fe={exports:{}};(()=>{var t={d:(s,a)=>{for(var u in a)t.o(a,u)&&!t.o(s,u)&&Object.defineProperty(s,u,{enumerable:!0,get:a[u]})},o:(s,a)=>Object.prototype.hasOwnProperty.call(s,a),r:s=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},e={};function n(s,a){for(var u=0;u<a.length;u++){var i=a[u];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}t.r(e),t.d(e,{default:()=>o});var r=function(){function s(){(function(i,l){if(!(i instanceof l))throw new TypeError("Cannot call a class as a function")})(this,s)}var a,u;return a=s,u=[{key:"changeHeightWidth",value:function(i,l,c,h,d,g){return c>h&&(i=Math.round(i*h/c),c=h),i>l&&(c=Math.round(c*l/i),i=l),d&&c<d&&(i=Math.round(i*d/c),c=d),g&&i<g&&(c=Math.round(c*g/i),i=g),{height:i,width:c}}},{key:"resizeAndRotateImage",value:function(i,l,c,h,d){var g=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",f=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,m=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,v=f/100,w=document.createElement("canvas"),E=i.width,y=i.height,b=this.changeHeightWidth(y,c,E,l,h,d);!m||m!==90&&m!==270?(w.width=b.width,w.height=b.height):(w.width=b.height,w.height=b.width),E=b.width,y=b.height;var x=w.getContext("2d");return x.fillStyle="rgba(0, 0, 0, 0)",x.fillRect(0,0,E,y),m&&(x.rotate(m*Math.PI/180),m===90?x.translate(0,-w.width):m===180?x.translate(-w.width,-w.height):m===270?x.translate(-w.height,0):m!==0&&m!==360||x.translate(0,0)),x.drawImage(i,0,0,E,y),w.toDataURL("image/".concat(g),v)}},{key:"b64toByteArrays",value:function(i,l){for(var c=atob(i.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),h=[],d=0;d<c.length;d+=512){for(var g=c.slice(d,d+512),f=new Array(g.length),m=0;m<g.length;m++)f[m]=g.charCodeAt(m);var v=new Uint8Array(f);h.push(v)}return h}},{key:"b64toBlob",value:function(i,l){var c=this.b64toByteArrays(i,l);return new Blob(c,{type:l,lastModified:new Date})}},{key:"b64toFile",value:function(i,l,c){var h=this.b64toByteArrays(i,c);return new File(h,l,{type:c,lastModified:new Date})}},{key:"createResizedImage",value:function(i,l,c,h,d,g,f){var m=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",v=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,w=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,E=new FileReader;if(!i)throw Error("File Not Found!");if(i.type&&!i.type.includes("image"))throw Error("File Is NOT Image!");E.readAsDataURL(i),E.onload=function(){var y=new Image;y.src=E.result,y.onload=function(){var b=s.resizeAndRotateImage(y,l,c,v,w,h,d,g),x="image/".concat(h);switch(m){case"blob":var U=s.b64toBlob(b,x);f(U);break;case"base64":f(b);break;case"file":var q=i.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(h.toString()),D=s.b64toFile(b,q,x);f(D);break;default:f(b)}}},E.onerror=function(y){throw Error(y)}}}],u&&n(a,u),s}();const o={imageFileResizer:function(s,a,u,i,l,c,h,d,g,f){return r.createResizedImage(s,a,u,i,l,c,h,d,g,f)}};fe.exports=e})();var _t=fe.exports;const wt=A.exports.memo(({photoURL:t,selectedFile:e})=>(console.log("USERAVASASDLASLDASPDLASPASD"),C(L,{children:[p(j,{sx:{position:"relative","&:hover":{opacity:"0.7"},"&:hover .MuiSvgIcon-root":{opacity:"1"},transition:".15s ease-in-out"},children:C("label",{htmlFor:"avatar-upload",children:[p(Ve,{alt:"Avatar",src:e||t||at,sx:{width:128,height:128,mb:2.5}}),p(j,{sx:{position:"absolute",width:"100%",height:"100%",top:0,bottom:0,left:0,right:0,cursor:"pointer"},children:p(de,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:32,height:32,opacity:"0",transition:".15s ease-in-out",color:"white"}})})]})}),p(W,{align:"center",variant:"body1",color:"inherit",children:"\u1EA2nh \u0111\u1EA1i di\u1EC7n"})]}))),yt=({photoURL:t,setFieldValue:e,selectedFile:n,fileInputField:r})=>{const{enqueueSnackbar:o}=V(),s=u=>new Promise(i=>{_t.imageFileResizer(u,230,230,"JPEG",70,0,l=>{i(l)},"base64")});return C(L,{children:[p(wt,{photoURL:t,selectedFile:n}),p(r,{onChange:async u=>{if(!u.target.files||u.target.files.length===0){e("selectedFile",null);return}try{const i=await s(u.target.files[0]);e("selectedFile",i)}catch{o("T\u1EC7p t\u1EA3i l\xEAn kh\xF4ng h\u1EE3p l\u1EC7 (T\u1EC7p kh\xF4ng ph\u1EA3i h\xECnh \u1EA3nh).",{variant:"error",persist:!0})}}})]})},Et=({currentUser:{photoURL:t,metadata:{createdAt:e},providerData:n},handleSubmit:r,values:o,touched:s,errors:a,handleBlur:u,handleChange:i,resetForm:l,handleResetForm:c,isSubmitting:h,dirty:d,isValid:g,handleLinkFBAccount:f,setFieldValue:m,fileInputField:v})=>(console.log("dirty: ",d),console.log("isvalid: ",g),console.log(a),C(Ge,{children:[p(lt,{}),C(P,{sx:{display:"flex",justifyContent:"flex-start"},children:[p(j,{children:p(yt,{photoURL:t,setFieldValue:m,selectedFile:o.selectedFile,fileInputField:v})}),p(j,{sx:{width:"100%",ml:10},children:p(ft,{})})]}),p(P,{children:p(K,{variant:"filled",label:"T\xEAn ng\u01B0\u1EDDi d\xF9ng",name:"username",type:"text",value:o.username,onChange:i,onBlur:u,error:s.username&&Boolean(a.username),helperText:s.username&&a.username,sx:{width:"100%",mt:6,mb:3}})}),p(ct,{handleLinkFBAccount:f,providerData:n}),C(P,{sx:{display:"flex",justifyContent:"space-between"},children:[p(P,{sx:{display:"flex"},disableGutters:!0,children:p(ht,{createdAt:e})}),C(P,{disableGutters:!0,sx:{display:"flex",justifyContent:"flex-end"},children:[p(G,{sx:{mt:3,mb:4,mr:2},onClick:()=>c(l),disabled:h||!d,children:"H\u1EE7y"}),C(G,{onClick:r,variant:"contained",color:"info",sx:{mt:3,mb:4},disabled:h||!d||!g,children:[h&&p(Ke,{size:20,sx:{mr:1}}),"L\u01B0u thay \u0111\u1ED5i"]})]})]})]})),xt=()=>{const t=I(),n=Ye(r=>r.auth.firebase.getFBProvider)();return A.exports.useCallback(()=>(console.log(t.displayName),Xe(t,n)),[])};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(F||(F={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="firebasestorage.googleapis.com",ge="storageBucket",kt=2*60*1e3,Rt=10*60*1e3;class _ extends tt{constructor(e,n){super(Y(e),`Firebase Storage: ${n} (${Y(e)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_.prototype)}_codeEquals(e){return Y(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Y(t){return"storage/"+t}function J(){const t="An unknown error occurred, please check the error payload for server response.";return new _("unknown",t)}function vt(t){return new _("object-not-found","Object '"+t+"' does not exist.")}function Ct(t){return new _("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function At(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _("unauthenticated",t)}function St(){return new _("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function Tt(t){return new _("unauthorized","User does not have permission to access '"+t+"'.")}function Pt(){return new _("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Ft(){return new _("canceled","User canceled the upload/download.")}function Bt(t){return new _("invalid-url","Invalid URL '"+t+"'.")}function Ut(t){return new _("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function Dt(){return new _("no-default-bucket","No default bucket found. Did you set the '"+ge+"' property when initializing the app?")}function It(){return new _("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function Ot(){return new _("no-download-url","The given file does not have any download URLs.")}function Z(t){return new _("invalid-argument",t)}function me(){return new _("app-deleted","The Firebase app was deleted.")}function Lt(t){return new _("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(t,e){return new _("invalid-format","String does not match format '"+t+"': "+e)}function $(t){throw new _("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=F.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=F.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=F.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,o){if(this.sent_)throw $("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const s in o)o.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,o[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw $("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw $("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponseText(){if(!this.sent_)throw $("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}function Mt(){return new jt}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{createConnection(){return Mt()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=R.makeFromUrl(e,n)}catch{return new R(e,"")}if(r.path==="")return r;throw Ut(e)}static makeFromUrl(e,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function s(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+o+a,"i"),i={bucket:1,path:3};function l(b){b.path_=decodeURIComponent(b.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${o}/o${d}`,"i"),f={bucket:1,path:3},m=n===pe?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",w=new RegExp(`^https?://${m}/${o}/${v}`,"i"),y=[{regex:u,indices:i,postModify:s},{regex:g,indices:f,postModify:l},{regex:w,indices:{bucket:1,path:2},postModify:l}];for(let b=0;b<y.length;b++){const x=y[b],U=x.regex.exec(e);if(U){const q=U[x.indices.bucket];let D=U[x.indices.path];D||(D=""),r=new R(q,D),x.postModify(r);break}}if(r==null)throw Bt(e);return r}}class Nt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,e,n){let r=1,o=null,s=!1,a=0;function u(){return a===2}let i=!1;function l(...f){i||(i=!0,e.apply(null,f))}function c(f){o=setTimeout(()=>{o=null,t(h,u())},f)}function h(f,...m){if(i)return;if(f){l.call(null,f,...m);return}if(u()||s){l.call(null,f,...m);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,c(w)}let d=!1;function g(f){d||(d=!0,!i&&(o!==null?(f||(a=2),clearTimeout(o),c(0)):f||(a=1)))}return c(0),setTimeout(()=>{s=!0,g(!0)},n),g}function qt(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(t){return t!==void 0}function Wt(t){return typeof t=="object"&&!Array.isArray(t)}function Q(t){return typeof t=="string"||t instanceof String}function be(t){return ee()&&t instanceof Blob}function ee(){return typeof Blob!="undefined"}function _e(t,e,n,r){if(r<e)throw Z(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Z(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function we(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const o=e(r)+"="+e(t[r]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n,r,o,s,a,u,i,l,c,h){this.url_=e,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=i,this.timeout_=l,this.progressCallback_=c,this.pool_=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const e=(r,o)=>{if(o){r(!1,new N(!1,null,!0));return}const s=this.pool_.createConnection();this.pendingConnection_=s;const a=u=>{const i=u.loaded,l=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(i,l)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const u=s.getErrorCode()===F.NO_ERROR,i=s.getStatus();if(!u||this.isRetryStatusCode_(i)){const c=s.getErrorCode()===F.ABORT;r(!1,new N(!1,null,c));return}const l=this.successCodes_.indexOf(i)!==-1;r(!0,new N(l,s))})},n=(r,o)=>{const s=this.resolve_,a=this.reject_,u=o.connection;if(o.wasSuccessCode)try{const i=this.callback_(u,u.getResponseText());Ht(i)?s(i):s()}catch(i){a(i)}else if(u!==null){const i=J();i.serverResponse=u.getResponseText(),this.errorCallback_?a(this.errorCallback_(u,i)):a(i)}else if(o.canceled){const i=this.appDelete_?me():Ft();a(i)}else{const i=Pt();a(i)}};this.canceled_?n(!1,new N(!1,null,!0)):this.backoffId_=zt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||o||s}}class N{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Gt(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Kt(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function Xt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Yt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Jt(t,e,n,r,o,s){const a=we(t.urlParams),u=t.url+a,i=Object.assign({},t.headers);return Xt(i,e),Gt(i,n),Kt(i,s),Yt(i,r),new Vt(u,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function Qt(...t){const e=Zt();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(ee())return new Blob(t);throw new _("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function en(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ne{constructor(e,n){this.data=e,this.contentType=n||null}}function ye(t,e){switch(t){case S.RAW:return new ne(Ee(e));case S.BASE64:case S.BASE64URL:return new ne(xe(t,e));case S.DATA_URL:return new ne(rn(e),on(e))}throw J()}function Ee(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)==55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)==56320))e.push(239,191,189);else{const s=r,a=t.charCodeAt(++n);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nn(t){let e;try{e=decodeURIComponent(t)}catch{throw O(S.DATA_URL,"Malformed data URL.")}return Ee(e)}function xe(t,e){switch(t){case S.BASE64:{const o=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(o||s)throw O(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case S.BASE64URL:{const o=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(o||s)throw O(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=tn(e)}catch{throw O(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class ke{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw O(S.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sn(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}}function rn(t){const e=new ke(t);return e.base64?xe(S.BASE64,e.rest):nn(e.rest)}function on(t){return new ke(t).contentType}function sn(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,n){let r=0,o="";be(e)?(this.data_=e,r=e.size,o=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,n){if(be(this.data_)){const r=this.data_,o=en(r,e,n);return o===null?null:new T(o)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new T(r,!0)}}static getBlob(...e){if(ee()){const n=e.map(r=>r instanceof T?r.data_:r);return new T(Qt.apply(null,n))}else{const n=e.map(a=>Q(a)?ye(S.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const o=new Uint8Array(r);let s=0;return n.forEach(a=>{for(let u=0;u<a.length;u++)o[s++]=a[u]}),new T(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){let e;try{e=JSON.parse(t)}catch{return null}return Wt(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function un(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ve(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){return e}class k{constructor(e,n,r,o){this.server=e,this.local=n||e,this.writable=!!r,this.xform=o||ln}}let z=null;function cn(t){return!Q(t)||t.length<2?t:ve(t)}function Ce(){if(z)return z;const t=[];t.push(new k("bucket")),t.push(new k("generation")),t.push(new k("metageneration")),t.push(new k("name","fullPath",!0));function e(s,a){return cn(a)}const n=new k("name");n.xform=e,t.push(n);function r(s,a){return a!==void 0?Number(a):a}const o=new k("size");return o.xform=r,t.push(o),t.push(new k("timeCreated")),t.push(new k("updated")),t.push(new k("md5Hash",null,!0)),t.push(new k("cacheControl",null,!0)),t.push(new k("contentDisposition",null,!0)),t.push(new k("contentEncoding",null,!0)),t.push(new k("contentLanguage",null,!0)),t.push(new k("contentType",null,!0)),t.push(new k("metadata","customMetadata",!0)),z=t,z}function hn(t,e){function n(){const r=t.bucket,o=t.fullPath,s=new R(r,o);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function dn(t,e,n){const r={};r.type="file";const o=n.length;for(let s=0;s<o;s++){const a=n[s];r[a.local]=a.xform(r,e[a.server])}return hn(r,t),r}function Ae(t,e,n){const r=Re(e);return r===null?null:dn(t,r,n)}function fn(t,e,n,r){const o=Re(e);if(o===null||!Q(o.downloadTokens))return null;const s=o.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(l=>{const c=t.bucket,h=t.fullPath,d="/b/"+a(c)+"/o/"+a(h),g=te(d,n,r),f=we({alt:"media",token:l});return g+f})[0]}function pn(t,e){const n={},r=e.length;for(let o=0;o<r;o++){const s=e[o];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Se{constructor(e,n,r,o){this.url=e,this.method=n,this.handler=r,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){if(!t)throw J()}function gn(t,e){function n(r,o){const s=Ae(t,o,e);return Te(s!==null),s}return n}function mn(t,e){function n(r,o){const s=Ae(t,o,e);return Te(s!==null),fn(s,o,t.host,t._protocol)}return n}function Pe(t){function e(n,r){let o;return n.getStatus()===401?n.getResponseText().includes("Firebase App Check token is invalid")?o=St():o=At():n.getStatus()===402?o=Ct(t.bucket):n.getStatus()===403?o=Tt(t.path):o=r,o.serverResponse=r.serverResponse,o}return e}function bn(t){const e=Pe(t);function n(r,o){let s=e(r,o);return r.getStatus()===404&&(s=vt(t.path)),s.serverResponse=o.serverResponse,s}return n}function _n(t,e,n){const r=e.fullServerUrl(),o=te(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,u=new Se(o,s,mn(t,n),a);return u.errorHandler=bn(e),u}function wn(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yn(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=wn(null,e)),r}function En(t,e,n,r,o){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let y="";for(let b=0;b<2;b++)y=y+Math.random().toString().slice(2);return y}const i=u();a["Content-Type"]="multipart/related; boundary="+i;const l=yn(e,r,o),c=pn(l,n),h="--"+i+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+i+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+i+"--",g=T.getBlob(h,r,d);if(g===null)throw It();const f={name:l.fullPath},m=te(s,t.host,t._protocol),v="POST",w=t.maxUploadRetryTime,E=new Se(m,v,gn(t,n),w);return E.urlParams=f,E.headers=a,E.body=g.uploadData(),E.errorHandler=Pe(e),E}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,n){this._service=e,n instanceof R?this._location=n:this._location=R.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new B(e,n)}get root(){const e=new R(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ve(this._location.path)}get storage(){return this._service}get parent(){const e=an(this._location.path);if(e===null)return null;const n=new R(this._location.bucket,e);return new B(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Lt(e)}}function xn(t,e,n){t._throwIfRoot("uploadBytes");const r=En(t.storage,t._location,Ce(),new T(e,!0),n);return t.storage.makeRequestWithTokens(r).then(o=>o.getPromise()).then(o=>({metadata:o,ref:t}))}function kn(t,e,n=S.RAW,r){t._throwIfRoot("uploadString");const o=ye(n,e),s=Object.assign({},r);return s.contentType==null&&o.contentType!=null&&(s.contentType=o.contentType),xn(t,o.data,s)}async function Rn(t){t._throwIfRoot("getDownloadURL");const e=_n(t.storage,t._location,Ce());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(n=>{if(n===null)throw Ot();return n})}function vn(t,e){const n=un(t._location.path,e),r=new R(t._location.bucket,n);return new B(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t){return/^[A-Za-z]+:\/\//.test(t)}function An(t,e){return new B(t,e)}function Fe(t,e){if(t instanceof re){const n=t;if(n._bucket==null)throw Dt();const r=new B(n,n._bucket);return e!=null?Fe(r,e):r}else return e!==void 0?vn(t,e):t}function Sn(t,e){if(e&&Cn(e)){if(t instanceof re)return An(t,e);throw Z("To use ref(service, url), the first argument must be a Storage instance.")}else return Fe(t,e)}function Be(t,e){const n=e==null?void 0:e[ge];return n==null?null:R.makeFromBucketSpec(n,t)}class re{constructor(e,n,r,o,s,a){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._pool=o,this._url=s,this._firebaseVersion=a,this._bucket=null,this._host=pe,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=kt,this._maxUploadRetryTime=Rt,this._requests=new Set,s!=null?this._bucket=R.makeFromBucketSpec(s,this._host):this._bucket=Be(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=R.makeFromBucketSpec(this._url,e):this._bucket=Be(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_e("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_e("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new B(this,e)}_makeRequest(e,n,r){if(this._deleted)return new Nt(me());{const o=Jt(e,this._appId,n,r,this._pool,this._firebaseVersion);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r)}}const Ue="@firebase/storage",De="0.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie="storage";function Tn(t,e,n,r){return t=M(t),kn(t,e,n,r)}function Pn(t){return t=M(t),Rn(t)}function Fn(t,e){return t=M(t),Sn(t,e)}function Bn(t=Je(),e){return t=M(t),Ze(t,Ie).getImmediate({identifier:e})}function Un(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new re(n,r,o,new $t,e,nt)}function Dn(){Qe(new et(Ie,Un,"PUBLIC").setMultipleInstances(!0)),ae(Ue,De,""),ae(Ue,De,"esm2017")}Dn();const In=()=>{const t=I();return A.exports.useCallback(async({username:e,selectedFile:n})=>{if(e&&e!==t.displayName)try{await ue(t,{displayName:e})}catch(r){throw r}if(n){const r=Bn(),o=Fn(r,`/users/${t.uid}/photoImage.jpg`);try{await Tn(o,n.replace(/^data:image\/\w+;base64,/,""),"base64");const s=await Pn(o);await ue(t,{photoURL:s})}catch(s){throw s}}},[])},$n=()=>{const{enqueueSnackbar:t}=V(),e=I(),n=ut(),r=xt(),o=In(),s=A.exports.useRef(),a=A.exports.useCallback(async()=>{try{await r(),t("Li\xEAn k\u1EBFt t\xE0i kho\u1EA3n Facebook th\xE0nh c\xF4ng!",{variant:"success"}),n()}catch(l){t(`Li\xEAn k\u1EBFt t\xE0i kho\u1EA3n Facebook th\u1EA5t b\u1EA1i: ${he(l.code)}`,{variant:"error",persist:!0})}},[]),u=(l,c=!0)=>{l(),s.current.value="",c&&t("\u0110\xE3 h\u1EE7y thay \u0111\u1ED5i",{variant:"info"})},i={validationSchema:ot({username:ce().trim().min(6,"T\xEAn ng\u01B0\u1EDDi d\xF9ng ph\u1EA3i d\xE0i t\u1ED1i thi\u1EC3u 6 k\xED t\u1EF1 ").max(20,"T\xEAn ng\u01B0\u1EDDi d\xF9ng ch\u1EC9 c\xF3 th\u1EC3 d\xE0i t\u1ED1i \u0111a 20 k\xED t\u1EF1 ").required("Kh\xF4ng \u0111\u01B0\u1EE3c b\u1ECF tr\u1ED1ng. N\u1EBFu kh\xF4ng mu\u1ED1n ch\u1EC9nh s\u1EEDa, b\u1EA1n c\xF3 th\u1EC3 \u1EA5n H\u1EE7y."),selectedFile:ce().nullable()}),initialValues:{username:e.displayName,selectedFile:null},onSubmit:async(l,{resetForm:c})=>{console.log("submit");try{await o(l),n(),u(c,!1),t("Thay \u0111\u1ED5i th\xE0nh c\xF4ng!",{variant:"success"})}catch(h){t(`Thay \u0111\u1ED5i th\u1EA5t b\u1EA1i: ${h}`,{variant:"error",persist:!0})}},enableReinitialize:!0};return console.log(e),p(st,ie(H({},i),{component:l=>p(Et,H({currentUser:e,handleResetForm:u,handleLinkFBAccount:a,fileInputField:({onChange:c})=>p("input",{type:"file",id:"avatar-upload",style:{display:"none"},ref:s,onChange:c})},l))}))};export{$n as default};
