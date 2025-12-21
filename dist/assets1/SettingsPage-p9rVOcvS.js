import{a6 as Ue,a7 as q,a8 as Ae,a9 as Ee,aa as le,ab as Ce,ac as Ie,ad as Pe,ae as Oe,af as Le,ag as De,ah as Se,ai as te,aj as Fe,u as Me,a as Be,m as He,r as C,j as i,i as se,n as $e,a1 as Ke,X as Ve,ak as qe,L as ze,K as We,al as Xe,am as Ge}from"./index-DrB1YgVl.js";import"https://esm.sh/html-docx-js-typescript@0.1.5";import"https://esm.sh/file-saver@2.0.5";/**
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
 */const ce="firebasestorage.googleapis.com",de="storageBucket",Ye=120*1e3,Ze=600*1e3;/**
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
 */class m extends Le{constructor(t,s,n=0){super(z(t),`Firebase Storage: ${s} (${z(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,m.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return z(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var f;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(f||(f={}));function z(e){return"storage/"+e}function G(){const e="An unknown error occurred, please check the error payload for server response.";return new m(f.UNKNOWN,e)}function Je(e){return new m(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Qe(e){return new m(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function et(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new m(f.UNAUTHENTICATED,e)}function tt(){return new m(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function st(e){return new m(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function nt(){return new m(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rt(){return new m(f.CANCELED,"User canceled the upload/download.")}function it(e){return new m(f.INVALID_URL,"Invalid URL '"+e+"'.")}function ot(e){return new m(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function at(){return new m(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+de+"' property when initializing the app?")}function lt(){return new m(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ct(){return new m(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dt(e){return new m(f.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function X(e){return new m(f.INVALID_ARGUMENT,e)}function ue(){return new m(f.APP_DELETED,"The Firebase app was deleted.")}function ut(e){return new m(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $(e,t){return new m(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function H(e){throw new m(f.INTERNAL_ERROR,"Internal error: "+e)}/**
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
 */class R{constructor(t,s){this.bucket=t,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,s){let n;try{n=R.makeFromUrl(t,s)}catch{return new R(t,"")}if(n.path==="")return n;throw ot(t)}static makeFromUrl(t,s){let n=null;const o="([A-Za-z0-9.\\-_]+)";function r(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const a="(/(.*))?$",d=new RegExp("^gs://"+o+a,"i"),u={bucket:1,path:3};function h(x){x.path_=decodeURIComponent(x.path)}const l="v[A-Za-z0-9_]+",p=s.replace(/[.]/g,"\\."),y="(/([^?#]*).*)?$",N=new RegExp(`^https?://${p}/${l}/b/${o}/o${y}`,"i"),k={bucket:1,path:3},v=s===ce?"(?:storage.googleapis.com|storage.cloud.google.com)":s,b="([^?#]*)",U=new RegExp(`^https?://${v}/${o}/${b}`,"i"),T=[{regex:d,indices:u,postModify:r},{regex:N,indices:k,postModify:h},{regex:U,indices:{bucket:1,path:2},postModify:h}];for(let x=0;x<T.length;x++){const I=T[x],M=I.regex.exec(t);if(M){const _=M[I.indices.bucket];let B=M[I.indices.path];B||(B=""),n=new R(_,B),I.postModify(n);break}}if(n==null)throw it(t);return n}}class ht{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function gt(e,t,s){let n=1,o=null,r=null,a=!1,d=0;function u(){return d===2}let h=!1;function l(...b){h||(h=!0,t.apply(null,b))}function p(b){o=setTimeout(()=>{o=null,e(N,u())},b)}function y(){r&&clearTimeout(r)}function N(b,...U){if(h){y();return}if(b){y(),l.call(null,b,...U);return}if(u()||a){y(),l.call(null,b,...U);return}n<64&&(n*=2);let T;d===1?(d=2,T=0):T=(n+Math.random())*1e3,p(T)}let k=!1;function v(b){k||(k=!0,y(),!h&&(o!==null?(b||(d=2),clearTimeout(o),p(0)):b||(d=1)))}return p(0),r=setTimeout(()=>{a=!0,v(!0)},s),v}function ft(e){e(!1)}/**
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
 */function mt(e){return e!==void 0}function pt(e){return typeof e=="object"&&!Array.isArray(e)}function Y(e){return typeof e=="string"||e instanceof String}function ne(e){return Z()&&e instanceof Blob}function Z(){return typeof Blob<"u"}function re(e,t,s,n){if(n<t)throw X(`Invalid value for '${e}'. Expected ${t} or greater.`);if(n>s)throw X(`Invalid value for '${e}'. Expected ${s} or less.`)}/**
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
 */function J(e,t,s){let n=t;return s==null&&(n=`https://${t}`),`${s}://${n}/v0${e}`}function he(e){const t=encodeURIComponent;let s="?";for(const n in e)if(e.hasOwnProperty(n)){const o=t(n)+"="+t(e[n]);s=s+o+"&"}return s=s.slice(0,-1),s}var S;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(S||(S={}));/**
 * @license
 * Copyright 2022 Google LLC
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
 */function bt(e,t){const s=e>=500&&e<600,o=[408,429].indexOf(e)!==-1,r=t.indexOf(e)!==-1;return s||o||r}/**
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
 */class xt{constructor(t,s,n,o,r,a,d,u,h,l,p,y=!0,N=!1){this.url_=t,this.method_=s,this.headers_=n,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=a,this.callback_=d,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=l,this.connectionFactory_=p,this.retry=y,this.isUsingEmulator=N,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,v)=>{this.resolve_=k,this.reject_=v,this.start_()})}start_(){const t=(n,o)=>{if(o){n(!1,new K(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const a=d=>{const u=d.loaded,h=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&r.addUploadProgressListener(a),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(a),this.pendingConnection_=null;const d=r.getErrorCode()===S.NO_ERROR,u=r.getStatus();if(!d||bt(u,this.additionalRetryCodes_)&&this.retry){const l=r.getErrorCode()===S.ABORT;n(!1,new K(!1,null,l));return}const h=this.successCodes_.indexOf(u)!==-1;n(!0,new K(h,r))})},s=(n,o)=>{const r=this.resolve_,a=this.reject_,d=o.connection;if(o.wasSuccessCode)try{const u=this.callback_(d,d.getResponse());mt(u)?r(u):r()}catch(u){a(u)}else if(d!==null){const u=G();u.serverResponse=d.getErrorText(),this.errorCallback_?a(this.errorCallback_(d,u)):a(u)}else if(o.canceled){const u=this.appDelete_?ue():rt();a(u)}else{const u=nt();a(u)}};this.canceled_?s(!1,new K(!1,null,!0)):this.backoffId_=gt(t,s,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ft(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class K{constructor(t,s,n){this.wasSuccessCode=t,this.connection=s,this.canceled=!!n}}function _t(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function yt(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function wt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Nt(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function kt(e,t,s,n,o,r,a=!0,d=!1){const u=he(e.urlParams),h=e.url+u,l=Object.assign({},e.headers);return wt(l,t),_t(l,s),yt(l,r),Nt(l,n),new xt(h,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o,a,d)}/**
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
 */function Tt(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Rt(...e){const t=Tt();if(t!==void 0){const s=new t;for(let n=0;n<e.length;n++)s.append(e[n]);return s.getBlob()}else{if(Z())return new Blob(e);throw new m(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vt(e,t,s){return e.webkitSlice?e.webkitSlice(t,s):e.mozSlice?e.mozSlice(t,s):e.slice?e.slice(t,s):null}/**
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
 */function jt(e){if(typeof atob>"u")throw dt("base-64");return atob(e)}/**
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
 */const j={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class W{constructor(t,s){this.data=t,this.contentType=s||null}}function Ut(e,t){switch(e){case j.RAW:return new W(ge(t));case j.BASE64:case j.BASE64URL:return new W(fe(e,t));case j.DATA_URL:return new W(Et(t),Ct(t))}throw G()}function ge(e){const t=[];for(let s=0;s<e.length;s++){let n=e.charCodeAt(s);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|n&63);else if((n&64512)===55296)if(!(s<e.length-1&&(e.charCodeAt(s+1)&64512)===56320))t.push(239,191,189);else{const r=n,a=e.charCodeAt(++s);n=65536|(r&1023)<<10|a&1023,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|n&63)}else(n&64512)===56320?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|n&63)}return new Uint8Array(t)}function At(e){let t;try{t=decodeURIComponent(e)}catch{throw $(j.DATA_URL,"Malformed data URL.")}return ge(t)}function fe(e,t){switch(e){case j.BASE64:{const o=t.indexOf("-")!==-1,r=t.indexOf("_")!==-1;if(o||r)throw $(e,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case j.BASE64URL:{const o=t.indexOf("+")!==-1,r=t.indexOf("/")!==-1;if(o||r)throw $(e,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let s;try{s=jt(t)}catch(o){throw o.message.includes("polyfill")?o:$(e,"Invalid character found")}const n=new Uint8Array(s.length);for(let o=0;o<s.length;o++)n[o]=s.charCodeAt(o);return n}class me{constructor(t){this.base64=!1,this.contentType=null;const s=t.match(/^data:([^,]+)?,/);if(s===null)throw $(j.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=s[1]||null;n!=null&&(this.base64=It(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}function Et(e){const t=new me(e);return t.base64?fe(j.BASE64,t.rest):At(t.rest)}function Ct(e){return new me(e).contentType}function It(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
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
 */class L{constructor(t,s){let n=0,o="";ne(t)?(this.data_=t,n=t.size,o=t.type):t instanceof ArrayBuffer?(s?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(s?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=o}size(){return this.size_}type(){return this.type_}slice(t,s){if(ne(this.data_)){const n=this.data_,o=vt(n,t,s);return o===null?null:new L(o)}else{const n=new Uint8Array(this.data_.buffer,t,s-t);return new L(n,!0)}}static getBlob(...t){if(Z()){const s=t.map(n=>n instanceof L?n.data_:n);return new L(Rt.apply(null,s))}else{const s=t.map(a=>Y(a)?Ut(j.RAW,a).data:a.data_);let n=0;s.forEach(a=>{n+=a.byteLength});const o=new Uint8Array(n);let r=0;return s.forEach(a=>{for(let d=0;d<a.length;d++)o[r++]=a[d]}),new L(o,!0)}}uploadData(){return this.data_}}/**
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
 */function pe(e){let t;try{t=JSON.parse(e)}catch{return null}return pt(t)?t:null}/**
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
 */function Pt(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function Ot(e,t){const s=t.split("/").filter(n=>n.length>0).join("/");return e.length===0?s:e+"/"+s}function be(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */function Lt(e,t){return t}class w{constructor(t,s,n,o){this.server=t,this.local=s||t,this.writable=!!n,this.xform=o||Lt}}let V=null;function Dt(e){return!Y(e)||e.length<2?e:be(e)}function xe(){if(V)return V;const e=[];e.push(new w("bucket")),e.push(new w("generation")),e.push(new w("metageneration")),e.push(new w("name","fullPath",!0));function t(r,a){return Dt(a)}const s=new w("name");s.xform=t,e.push(s);function n(r,a){return a!==void 0?Number(a):a}const o=new w("size");return o.xform=n,e.push(o),e.push(new w("timeCreated")),e.push(new w("updated")),e.push(new w("md5Hash",null,!0)),e.push(new w("cacheControl",null,!0)),e.push(new w("contentDisposition",null,!0)),e.push(new w("contentEncoding",null,!0)),e.push(new w("contentLanguage",null,!0)),e.push(new w("contentType",null,!0)),e.push(new w("metadata","customMetadata",!0)),V=e,V}function St(e,t){function s(){const n=e.bucket,o=e.fullPath,r=new R(n,o);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:s})}function Ft(e,t,s){const n={};n.type="file";const o=s.length;for(let r=0;r<o;r++){const a=s[r];n[a.local]=a.xform(n,t[a.server])}return St(n,e),n}function _e(e,t,s){const n=pe(t);return n===null?null:Ft(e,n,s)}function Mt(e,t,s,n){const o=pe(t);if(o===null||!Y(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const a=encodeURIComponent;return r.split(",").map(h=>{const l=e.bucket,p=e.fullPath,y="/b/"+a(l)+"/o/"+a(p),N=J(y,s,n),k=he({alt:"media",token:h});return N+k})[0]}function Bt(e,t){const s={},n=t.length;for(let o=0;o<n;o++){const r=t[o];r.writable&&(s[r.server]=e[r.local])}return JSON.stringify(s)}class ye{constructor(t,s,n,o){this.url=t,this.method=s,this.handler=n,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function we(e){if(!e)throw G()}function Ht(e,t){function s(n,o){const r=_e(e,o,t);return we(r!==null),r}return s}function $t(e,t){function s(n,o){const r=_e(e,o,t);return we(r!==null),Mt(r,o,e.host,e._protocol)}return s}function Ne(e){function t(s,n){let o;return s.getStatus()===401?s.getErrorText().includes("Firebase App Check token is invalid")?o=tt():o=et():s.getStatus()===402?o=Qe(e.bucket):s.getStatus()===403?o=st(e.path):o=n,o.status=s.getStatus(),o.serverResponse=n.serverResponse,o}return t}function Kt(e){const t=Ne(e);function s(n,o){let r=t(n,o);return n.getStatus()===404&&(r=Je(e.path)),r.serverResponse=o.serverResponse,r}return s}function Vt(e,t,s){const n=t.fullServerUrl(),o=J(n,e.host,e._protocol),r="GET",a=e.maxOperationRetryTime,d=new ye(o,r,$t(e,s),a);return d.errorHandler=Kt(t),d}function qt(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function zt(e,t,s){const n=Object.assign({},s);return n.fullPath=e.path,n.size=t.size(),n.contentType||(n.contentType=qt(null,t)),n}function Wt(e,t,s,n,o){const r=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function d(){let T="";for(let x=0;x<2;x++)T=T+Math.random().toString().slice(2);return T}const u=d();a["Content-Type"]="multipart/related; boundary="+u;const h=zt(t,n,o),l=Bt(h,s),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,y=`\r
--`+u+"--",N=L.getBlob(p,n,y);if(N===null)throw lt();const k={name:h.fullPath},v=J(r,e.host,e._protocol),b="POST",U=e.maxUploadRetryTime,A=new ye(v,b,Ht(e,s),U);return A.urlParams=k,A.headers=a,A.body=N.uploadData(),A.errorHandler=Ne(t),A}class Xt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=S.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=S.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=S.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,s,n,o,r){if(this.sent_)throw H("cannot .send() more than once");if(le(t)&&n&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(s,t,!0),r!==void 0)for(const a in r)r.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,r[a].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw H("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw H("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw H("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw H("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Gt extends Xt{initXhr(){this.xhr_.responseType="text"}}function ke(){return new Gt}/**
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
 */class F{constructor(t,s){this._service=t,s instanceof R?this._location=s:this._location=R.makeFromUrl(s,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,s){return new F(t,s)}get root(){const t=new R(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return be(this._location.path)}get storage(){return this._service}get parent(){const t=Pt(this._location.path);if(t===null)return null;const s=new R(this._location.bucket,t);return new F(this._service,s)}_throwIfRoot(t){if(this._location.path==="")throw ut(t)}}function Yt(e,t,s){e._throwIfRoot("uploadBytes");const n=Wt(e.storage,e._location,xe(),new L(t,!0),s);return e.storage.makeRequestWithTokens(n,ke).then(o=>({metadata:o,ref:e}))}function Zt(e){e._throwIfRoot("getDownloadURL");const t=Vt(e.storage,e._location,xe());return e.storage.makeRequestWithTokens(t,ke).then(s=>{if(s===null)throw ct();return s})}function Jt(e,t){const s=Ot(e._location.path,t),n=new R(e._location.bucket,s);return new F(e.storage,n)}/**
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
 */function Qt(e){return/^[A-Za-z]+:\/\//.test(e)}function es(e,t){return new F(e,t)}function Te(e,t){if(e instanceof Q){const s=e;if(s._bucket==null)throw at();const n=new F(s,s._bucket);return t!=null?Te(n,t):n}else return t!==void 0?Jt(e,t):e}function ts(e,t){if(t&&Qt(t)){if(e instanceof Q)return es(e,t);throw X("To use ref(service, url), the first argument must be a Storage instance.")}else return Te(e,t)}function ie(e,t){const s=t==null?void 0:t[de];return s==null?null:R.makeFromBucketSpec(s,e)}function ss(e,t,s,n={}){e.host=`${t}:${s}`;const o=le(t);o&&(Ce(`https://${e.host}/b`),Ie("Storage",!0)),e._isUsingEmulator=!0,e._protocol=o?"https":"http";const{mockUserToken:r}=n;r&&(e._overrideAuthToken=typeof r=="string"?r:Pe(r,e.app.options.projectId))}class Q{constructor(t,s,n,o,r,a=!1){this.app=t,this._authProvider=s,this._appCheckProvider=n,this._url=o,this._firebaseVersion=r,this._isUsingEmulator=a,this._bucket=null,this._host=ce,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ye,this._maxUploadRetryTime=Ze,this._requests=new Set,o!=null?this._bucket=R.makeFromBucketSpec(o,this._host):this._bucket=ie(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=R.makeFromBucketSpec(this._url,t):this._bucket=ie(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){re("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){re("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const s=await t.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new F(this,t)}_makeRequest(t,s,n,o,r=!0){if(this._deleted)return new ht(ue());{const a=kt(t,this._appId,n,o,s,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,s){const[n,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,s,n,o).getPromise()}}const oe="@firebase/storage",ae="0.14.0";/**
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
 */const Re="storage";function ns(e,t,s){return e=q(e),Yt(e,t,s)}function rs(e){return e=q(e),Zt(e)}function is(e,t){return e=q(e),ts(e,t)}function os(e=Ue(),t){e=q(e);const n=Ae(e,Re).getImmediate({identifier:t}),o=Ee("storage");return o&&as(n,...o),n}function as(e,t,s,n={}){ss(e,t,s,n)}function ls(e,{instanceIdentifier:t}){const s=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal"),o=e.getProvider("app-check-internal");return new Q(s,n,o,t,Fe)}function cs(){De(new Se(Re,ls,"PUBLIC").setMultipleInstances(!0)),te(oe,ae,""),te(oe,ae,"esm2020")}cs();const gs=()=>{var ee;const{user:e}=Me(),{cafes:t,siteSettings:s,loading:n,refetchCafes:o}=Be(),{t:r}=He(),[a,d]=C.useState(void 0),[u,h]=C.useState(!0),[l,p]=C.useState({name:"",owner:"",street:"",city:"",state:"",description:"",googleMapsUrl:"",latitude:void 0,longitude:void 0,geminiApiKey:"",phone:"",imageUrl:"",coverImageUrl:"",facebook:"",instagram:"",twitter:"",formFillMode:"ai",speechToTextLanguage:"ar-SA",isProfilePublished:!1}),[y,N]=C.useState(""),[k,v]=C.useState(!1),[b,U]=C.useState(!1),[A,T]=C.useState(!1),[x,I]=C.useState("");C.useEffect(()=>{(async()=>{var E,P,O;if(n)return;if(!(e!=null&&e.cafeId)){h(!1);return}h(!0);let c=t.find(D=>D.id===e.cafeId);if(!c){console.warn("Cafe not found in public list, fetching directly...");try{c=await We(e.cafeId)||void 0}catch(D){console.error("Failed to fetch cafe details directly:",D),c=void 0}}d(c),c&&p({name:c.name,owner:c.owner,street:c.address.street,city:c.address.city||"",state:c.address.state||"",description:c.description,googleMapsUrl:c.googleMapsUrl||"",latitude:c.address.latitude,longitude:c.address.longitude,geminiApiKey:c.geminiApiKey||"",phone:c.phone||"",imageUrl:c.imageUrl||"",coverImageUrl:c.coverImageUrl||"",facebook:((E=c.socials)==null?void 0:E.facebook)||"",instagram:((P=c.socials)==null?void 0:P.instagram)||"",twitter:((O=c.socials)==null?void 0:O.twitter)||"",formFillMode:c.formFillMode||"ai",speechToTextLanguage:c.speechToTextLanguage||"ar-SA",isProfilePublished:c.isProfilePublished||!1}),h(!1)})()},[e,t,n]);const M=async g=>{if(!g){p(c=>({...c,imageUrl:""}));return}if(!a){I(r("settings.error.noCafe"));return}T(!0),I("");try{const c=os(),E=is(c,`cafe-profiles/${a.id}/${Date.now()}.jpg`),P=await Ge(g,"profile.jpg","image/jpeg"),O=await ns(E,P),D=await rs(O.ref);p(je=>({...je,imageUrl:D}))}catch(c){console.error("Error uploading profile image to Firebase Storage:",c),I(r("settings.error.uploadImage"))}finally{T(!1)}},_=g=>{const{name:c,value:E,type:P}=g.target;if(P==="checkbox"){const{checked:O}=g.target;p(D=>({...D,[c]:O}))}else p(O=>({...O,[c]:E}))},B=()=>{if(!navigator.geolocation){alert(r("settings.error.geolocationSupport"));return}v(!0),navigator.geolocation.getCurrentPosition(g=>{const{latitude:c,longitude:E}=g.coords;p(P=>({...P,latitude:c,longitude:E,googleMapsUrl:`https://www.google.com/maps?q=${c},${E}`})),v(!1)},g=>{console.error("Geolocation error:",g.message||g),alert(`${r("settings.error.geolocation")}: ${g.message}`),v(!1)})},ve=async g=>{if(g.preventDefault(),!!a){U(!0),N("");try{const c={name:l.name,owner:l.owner,description:l.description,googleMapsUrl:l.googleMapsUrl,geminiApiKey:l.geminiApiKey,phone:l.phone,imageUrl:l.imageUrl,coverImageUrl:l.coverImageUrl,formFillMode:l.formFillMode,speechToTextLanguage:l.speechToTextLanguage,isProfilePublished:l.isProfilePublished,address:{...a.address,street:l.street,city:l.city,state:l.state,latitude:l.latitude,longitude:l.longitude},socials:{facebook:l.facebook,instagram:l.instagram,twitter:l.twitter}};await Xe(a.id,c),N(r("settings.success")),await o()}catch(c){console.error("Error saving settings:",c),alert(r("settings.error.save"))}finally{setTimeout(()=>N(""),5e3),U(!1)}}};return u?i.jsxs("div",{className:"flex flex-col items-center justify-center p-10 text-center",children:[i.jsx(se,{className:"animate-spin text-4xl text-green-600 mb-4"}),i.jsx("p",{className:"text-gray-600",children:r("settings.loading")})]}):a?i.jsxs("div",{children:[i.jsx("h1",{className:"text-3xl font-bold text-gray-800 mb-6",children:r("settings.title")}),a&&!a.isProfilePublished&&i.jsxs("div",{className:"bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md mb-6 flex items-start gap-3",role:"alert",children:[i.jsx($e,{className:"h-6 w-6 flex-shrink-0 mt-1"}),i.jsxs("div",{children:[i.jsx("p",{className:"font-bold",children:r("settings.unpublishedAlert.title")}),i.jsx("p",{className:"text-sm",children:r("settings.unpublishedAlert.message")})]})]}),y&&i.jsx("div",{className:"bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md relative mb-6",role:"alert",children:i.jsx("span",{className:"block sm:inline",children:y})}),i.jsxs("form",{onSubmit:ve,className:"space-y-8 bg-white p-8 rounded-lg border",children:[i.jsxs("fieldset",{className:"border p-4 rounded-md bg-green-50 border-green-300",children:[i.jsx("legend",{className:"px-2 font-semibold text-lg text-green-800",children:r("settings.sections.visibility")}),i.jsxs("div",{className:"mt-2 space-y-2",children:[i.jsxs("label",{className:"flex items-center gap-3 cursor-pointer p-2",children:[i.jsx("input",{type:"checkbox",name:"isProfilePublished",checked:l.isProfilePublished,onChange:_,className:"h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"}),i.jsx("span",{className:"font-medium text-gray-800",children:l.isProfilePublished?r("settings.fields.isProfilePublished"):r("settings.fields.isProfileHidden")})]}),i.jsx("p",{className:"text-xs text-gray-600 px-2",children:r("settings.fields.visibilityHint")})]})]}),i.jsxs("div",{className:"border-b pb-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-700",children:r("settings.sections.basicInfo")}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.name")}),i.jsx("input",{type:"text",name:"name",id:"name",value:l.name,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"owner",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.owner")}),i.jsx("input",{type:"text",name:"owner",id:"owner",value:l.owner,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.phone")}),i.jsx("input",{type:"tel",name:"phone",id:"phone",value:l.phone,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"})]}),i.jsxs("div",{className:"md:col-span-2",children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.mainImage")}),i.jsx("div",{className:"mt-1 flex justify-start p-4 border-2 border-gray-300 border-dashed rounded-md",children:i.jsx(Ke,{value:Ve(l.imageUrl),onChange:M})}),A&&i.jsxs("p",{className:"text-sm text-blue-600 mt-2 flex items-center gap-2",children:[i.jsx(se,{className:"animate-spin"})," ",r("settings.fields.uploadingImage")]}),x&&i.jsx("p",{className:"text-sm text-red-600 mt-2",children:x})]})]})]}),i.jsxs("div",{className:"border-b pb-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-700",children:r("settings.sections.location")}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:[i.jsxs("div",{className:"md:col-span-2 space-y-4",children:[a.countryCode!=="dz"&&i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"state",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.state")}),i.jsx("input",{type:"text",name:"state",id:"state",value:l.state,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"city",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.city")}),i.jsx("input",{type:"text",name:"city",id:"city",value:l.city,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"street",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.street")}),i.jsx("input",{type:"text",name:"street",id:"street",value:l.street,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"}),a.countryCode==="dz"&&i.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[r("cafeCard.address"),": ",a.address.commune,", ",a.address.daira,", ",a.address.wilaya,".",i.jsx("br",{}),r("settings.fields.addressFixed")]})]})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"googleMapsUrl",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.googleMapsUrl")}),i.jsxs("div",{className:"flex flex-col sm:flex-row gap-2",children:[i.jsx("input",{type:"url",name:"googleMapsUrl",id:"googleMapsUrl",value:l.googleMapsUrl,onChange:_,placeholder:r("settings.fields.googleMapsPlaceholder"),className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"}),i.jsx("button",{type:"button",onClick:B,disabled:k,className:"flex-shrink-0 bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-wait",children:r(k?"settings.fields.locating":"settings.fields.autoLocate")})]}),i.jsx("p",{className:"text-xs text-gray-500 mt-1",children:r("settings.fields.googleMapsHint")})]})]})]}),i.jsxs("div",{className:"border-b pb-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-700",children:r("settings.sections.publicProfile")}),i.jsxs("div",{className:"mt-4 space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"coverImageUrl",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.coverImageUrl")}),i.jsx("input",{type:"url",name:"coverImageUrl",id:"coverImageUrl",value:l.coverImageUrl,onChange:_,placeholder:r("settings.fields.coverImagePlaceholder"),className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"description",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.description")}),i.jsx("textarea",{name:"description",id:"description",rows:4,value:l.description,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"}),i.jsx("p",{className:"text-xs text-gray-500 mt-1",children:r("settings.fields.descriptionHint")})]}),i.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"facebook",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.facebook")}),i.jsx("input",{type:"url",name:"facebook",id:"facebook",value:l.facebook,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"instagram",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.instagram")}),i.jsx("input",{type:"url",name:"instagram",id:"instagram",value:l.instagram,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"})]}),i.jsxs("div",{children:[i.jsx("label",{htmlFor:"twitter",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.twitter")}),i.jsx("input",{type:"url",name:"twitter",id:"twitter",value:l.twitter,onChange:_,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm"})]})]})]})]}),i.jsxs("fieldset",{className:"border p-4 rounded-md",children:[i.jsx("legend",{className:"px-2 font-semibold text-lg text-gray-700",children:r("settings.sections.automation")}),i.jsxs("div",{className:"mt-2 space-y-2",children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700",children:r("settings.fields.formFillMode")}),i.jsxs("div",{className:"flex gap-x-6 gap-y-2 flex-wrap",children:[i.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[i.jsx("input",{type:"radio",name:"formFillMode",value:"ai",checked:l.formFillMode==="ai",onChange:g=>p(c=>({...c,formFillMode:g.target.value})),className:"h-4 w-4"}),i.jsx("span",{children:r("settings.fields.modeAi")})]}),i.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[i.jsx("input",{type:"radio",name:"formFillMode",value:"json",checked:l.formFillMode==="json",onChange:g=>p(c=>({...c,formFillMode:g.target.value})),className:"h-4 w-4"}),i.jsx("span",{children:r("settings.fields.modeJson")})]})]}),i.jsx("p",{className:"text-xs text-gray-500 mt-2",children:r("settings.fields.automationHint")})]}),i.jsxs("div",{className:"mt-4 pt-4 border-t",children:[i.jsx("label",{htmlFor:"speechToTextLanguage",className:"block text-sm font-medium text-gray-700",children:r("settings.fields.speechToTextLanguage")}),i.jsx("select",{id:"speechToTextLanguage",name:"speechToTextLanguage",value:l.speechToTextLanguage,onChange:g=>p(c=>({...c,speechToTextLanguage:g.target.value})),className:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md bg-white",children:qe.map(g=>i.jsx("option",{value:g.code,children:g.name},g.code))}),i.jsx("p",{className:"text-xs text-gray-500 mt-2",children:r("settings.fields.speechToTextHint")})]})]}),i.jsxs("div",{className:"border-b pb-6",children:[i.jsx("h2",{className:"text-xl font-semibold text-gray-700",children:r("settings.sections.ai")}),i.jsx("div",{className:"mt-4",children:(ee=s==null?void 0:s.ai)!=null&&ee.useAdminKey?i.jsxs("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded-md text-blue-800",children:[i.jsx("p",{className:"font-semibold",children:r("settings.fields.adminKeyNote")}),i.jsx("p",{className:"text-sm",children:r("settings.fields.adminKeyMessage")})]}):i.jsxs("div",{className:"space-y-4",children:[i.jsxs("div",{children:[i.jsx("label",{htmlFor:"geminiApiKey",className:"block text-sm font-medium text-gray-700 mb-1",children:r("settings.fields.apiKeyLabel")}),i.jsx("input",{type:"password",name:"geminiApiKey",id:"geminiApiKey",value:l.geminiApiKey,onChange:_,placeholder:r("settings.fields.apiKeyPlaceholder"),className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"})]}),l.geminiApiKey?i.jsx("p",{className:"text-xs text-gray-500 mt-1",children:r("settings.fields.keyHint")}):i.jsx("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-800 text-sm",children:i.jsx("strong",{children:r("settings.fields.noKeyWarning")})})]})})]}),i.jsxs("div",{className:"flex justify-between items-center pt-6 border-t mt-8",children:[i.jsx(ze,{to:`/${a.countryCode}/profile/${a.numericId}`,target:"_blank",rel:"noopener noreferrer",className:"bg-gray-100 text-gray-800 font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition-colors",children:r("settings.buttons.viewPublicProfile")}),i.jsx("button",{type:"submit",disabled:b,className:"bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors disabled:bg-green-400 disabled:cursor-wait",children:r(b?"settings.buttons.saving":"settings.buttons.saveChanges")})]})]})]}):i.jsxs("div",{className:"flex flex-col items-center justify-center p-10 text-center",children:[i.jsx("h2",{className:"text-xl font-bold text-red-600 mb-2",children:r("app.error.title")}),i.jsx("p",{className:"text-gray-700",children:r("profilePage.cafeNotFoundMessage")})]})};export{gs as default};
