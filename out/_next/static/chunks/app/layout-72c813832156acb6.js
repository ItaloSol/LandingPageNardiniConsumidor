(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{2269:(e,t,r)=>{"use strict";var i=r(9509);r(8375);var n=r(2115),s=function(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}(n),o=void 0!==i&&i.env&&!0,a=function(e){return"[object String]"===Object.prototype.toString.call(e)},l=function(){function e(e){var t=void 0===e?{}:e,r=t.name,i=void 0===r?"stylesheet":r,n=t.optimizeForSpeed,s=void 0===n?o:n;d(a(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",d("boolean"==typeof s,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=s,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l="undefined"!=typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,r=e.prototype;return r.setOptimizeForSpeed=function(e){d("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},r.isOptimizeForSpeed=function(){return this._optimizeForSpeed},r.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,"undefined"!=typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},r.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},r.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},r.insertRule=function(e,t){if(d(a(e),"`insertRule` accepts only strings"),"undefined"==typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(t){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},r.replaceRule=function(e,t){if(this._optimizeForSpeed||"undefined"==typeof window){var r="undefined"!=typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(i){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];d(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},r.deleteRule=function(e){if("undefined"==typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},r.flush=function(){this._injected=!1,this._rulesCount=0,"undefined"!=typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},r.cssRules=function(){var e=this;return"undefined"==typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},r.makeStyleTag=function(e,t,r){t&&d(a(t),"makeStyleTag accepts only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return r?n.insertBefore(i,r):n.appendChild(i),i},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(e.prototype,t),e}();function d(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var u=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0},c={};function h(e,t){if(!t)return"jsx-"+e;var r=String(t),i=e+r;return c[i]||(c[i]="jsx-"+u(e+"-"+r)),c[i]}function f(e,t){"undefined"==typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var r=e+t;return c[r]||(c[r]=t.replace(/__jsx-style-dynamic-selector/g,e)),c[r]}var m=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,i=void 0===r?null:r,n=t.optimizeForSpeed,s=void 0!==n&&n;this._sheet=i||new l({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),i&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"undefined"==typeof window||this._fromServer||(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),i=r.styleId,n=r.rules;if(i in this._instancesCounts){this._instancesCounts[i]+=1;return}var s=n.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[i]=s,this._instancesCounts[i]=1},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var i=this._fromServer&&this._fromServer[r];i?(i.parentNode.removeChild(i),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,r;return t=this.cssRules(),void 0===(r=e)&&(r={}),t.map(function(e){var t=e[0],i=e[1];return s.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:r.nonce?r.nonce:void 0,dangerouslySetInnerHTML:{__html:i}})})},t.getIdAndRules=function(e){var t=e.children,r=e.dynamic,i=e.id;if(r){var n=h(i,r);return{styleId:n,rules:Array.isArray(t)?t.map(function(e){return f(n,e)}):[f(n,t)]}}return{styleId:h(i),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),p=n.createContext(null);p.displayName="StyleSheetContext";var v=s.default.useInsertionEffect||s.default.useLayoutEffect,b="undefined"!=typeof window?new m:void 0;function y(e){var t=b||n.useContext(p);return t&&("undefined"==typeof window?t.add(e):v(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}y.dynamic=function(e){return e.map(function(e){return h(e[0],e[1])}).join(" ")},t.style=y},2293:(e,t,r)=>{"use strict";r.d(t,{Navbar:()=>c});var i=r(5155),n=r(2115),s=r(9946);let o=(0,s.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),a=(0,s.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);var l=r(7168),d=r(6766);let u=[{label:"Sobre",href:"#sobre"},{label:"\xc1reas de Atua\xe7\xe3o",href:"#areas"},{label:"Problemas que Resolvemos",href:"#problemas"},{label:"Depoimentos",href:"#depoimentos"},{label:"Localiza\xe7\xe3o",href:"#localizacao"},{label:"Contato",href:"#contato"}];function c(){let[e,t]=(0,n.useState)(!1),[r,s]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{t(window.scrollY>20)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,i.jsx)("nav",{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 ".concat(e?"bg-white shadow-md py-2":"bg-transparent py-4 opacity-0"),children:(0,i.jsx)("div",{className:"container mx-auto",children:(0,i.jsxs)("div",{className:"flex items-center justify-between",children:[(0,i.jsx)("a",{href:"#hero",className:"relative",children:(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsx)(d.default,{src:"/images/logo-nav.webp",alt:"Nardini Advogados",width:0,height:0,sizes:"100vw",style:{width:"auto",height:"100%"},priority:!0})})})}),(0,i.jsxs)("div",{className:"hidden md:flex items-center gap-6",children:[u.map(t=>(0,i.jsx)("a",{href:t.href,className:"text-sm font-medium transition-colors hover:text-primary ".concat(e?"text-gray-600":"text-white"),children:t.label},t.href)),(0,i.jsx)(l.$,{onClick:()=>{let e=encodeURIComponent("Ol\xe1, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini. Pode me ajudar?");window.open("https://wa.me/5517997720489?text=".concat(e),"_blank")},size:"sm",className:"".concat(e?"bg-primary hover:bg-primary-dark text-white":"bg-white text-primary hover:bg-primary-light"),children:"Fale com um Advogado"})]}),(0,i.jsx)("button",{className:"md:hidden relative z-50",onClick:()=>s(!r),"aria-label":"Toggle menu",children:r?(0,i.jsx)(o,{className:e?"text-primary":"text-white"}):(0,i.jsx)(a,{className:e?"text-primary":"text-white"})}),r&&(0,i.jsx)("div",{className:"fixed inset-0 bg-white z-40 md:hidden",children:(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center h-full gap-6",children:[u.map(e=>(0,i.jsx)("a",{href:e.href,className:"text-lg font-medium text-primary hover:text-primary-dark",onClick:()=>s(!1),children:e.label},e.href)),(0,i.jsx)(l.$,{onClick:()=>{let e=encodeURIComponent("Ol\xe1, vim pelo site e gostaria de falar com o Dr. Sidnei Nardini. Pode me ajudar?");window.open("https://wa.me/5517997720489?text=".concat(e),"_blank"),s(!1)},className:"bg-primary hover:bg-primary-dark text-white",children:"Fale com um Advogado"})]})})]})})})}},3999:(e,t,r)=>{"use strict";r.d(t,{cn:()=>s});var i=r(2596),n=r(9688);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.QP)((0,i.$)(t))}},7168:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var i=r(5155),n=r(2115),s=r(9708),o=r(2635),a=r(3999);let l=(0,o.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:o,asChild:d=!1,...u}=e,c=d?s.DX:"button";return(0,i.jsx)(c,{className:(0,a.cn)(l({variant:n,size:o,className:r})),ref:t,...u})});d.displayName="Button"},8375:()=>{},8993:(e,t,r)=>{"use strict";r.d(t,{WhatsAppButton:()=>l});var i=r(5155),n=r(9137),s=r.n(n),o=r(1366),a=r(2115);function l(){let[e,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=setTimeout(()=>t(!0),500);return()=>clearTimeout(e)},[]),(0,i.jsxs)("button",{onClick:()=>{let e=encodeURIComponent("Ol\xe1, vim pelo site e gostaria de falar com um advogado. Pode me ajudar?");window.open("https://wa.me/5517997720489?text=".concat(e),"_blank")},"aria-label":"Iniciar conversa no WhatsApp",style:{animation:e?"pulse 2s infinite":"none"},className:"jsx-a8c8f9b83b106e0c "+"fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ".concat(e?"scale-100":"scale-0"),children:[(0,i.jsx)("div",{className:"jsx-a8c8f9b83b106e0c relative",children:(0,i.jsx)(o.A,{className:"w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300",fill:"white"})}),(0,i.jsx)(s(),{id:"a8c8f9b83b106e0c",children:"@-webkit-keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(37,211,102,.4);box-shadow:0 0 0 0 rgba(37,211,102,.4)}70%{-webkit-box-shadow:0 0 0 10px rgba(37,211,102,0);box-shadow:0 0 0 10px rgba(37,211,102,0)}100%{-webkit-box-shadow:0 0 0 0 rgba(37,211,102,0);box-shadow:0 0 0 0 rgba(37,211,102,0)}}@-moz-keyframes pulse{0%{-moz-box-shadow:0 0 0 0 rgba(37,211,102,.4);box-shadow:0 0 0 0 rgba(37,211,102,.4)}70%{-moz-box-shadow:0 0 0 10px rgba(37,211,102,0);box-shadow:0 0 0 10px rgba(37,211,102,0)}100%{-moz-box-shadow:0 0 0 0 rgba(37,211,102,0);box-shadow:0 0 0 0 rgba(37,211,102,0)}}@-o-keyframes pulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,.4)}70%{box-shadow:0 0 0 10px rgba(37,211,102,0)}100%{box-shadow:0 0 0 0 rgba(37,211,102,0)}}@keyframes pulse{0%{-webkit-box-shadow:0 0 0 0 rgba(37,211,102,.4);-moz-box-shadow:0 0 0 0 rgba(37,211,102,.4);box-shadow:0 0 0 0 rgba(37,211,102,.4)}70%{-webkit-box-shadow:0 0 0 10px rgba(37,211,102,0);-moz-box-shadow:0 0 0 10px rgba(37,211,102,0);box-shadow:0 0 0 10px rgba(37,211,102,0)}100%{-webkit-box-shadow:0 0 0 0 rgba(37,211,102,0);-moz-box-shadow:0 0 0 0 rgba(37,211,102,0);box-shadow:0 0 0 0 rgba(37,211,102,0)}}"})]})}},9092:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9324,23)),Promise.resolve().then(r.bind(r,2293)),Promise.resolve().then(r.bind(r,8993)),Promise.resolve().then(r.t.bind(r,9840,23))},9137:(e,t,r)=>{"use strict";e.exports=r(2269).style},9324:()=>{},9840:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_d65c78"}}},e=>{var t=t=>e(e.s=t);e.O(0,[385,628,441,684,358],()=>t(9092)),_N_E=e.O()}]);