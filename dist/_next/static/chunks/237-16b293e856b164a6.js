"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[237],{2944:function(e,t,o){var n=o(2265),r=n&&"object"==typeof n&&"default"in n?n.default:n,a=function(){return(a=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};!function(e,t){void 0===t&&(t={});var o=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".scroll-to-top {\n  background-color: white;\n  right: 40px;\n  bottom: 40px;\n  position: fixed;\n  z-index: 2;\n  cursor: pointer;\n  border-radius: 7px;\n  width: 40px;\n  height: 40px;\n  box-shadow: 0 9px 25px 0 rgba(132, 128, 177, 0.28);\n  border: none;\n}\n\n.scroll-to-top:active {\n  transform: matrix(0.95, 0, 0, 0.95, 0, 0);\n}\n"),e.exports=function(e){var t=e.top,o=void 0===t?20:t,i=e.className,l=e.color,c=e.smooth,u=void 0!==c&&c,s=e.component,d=e.viewBox,f=e.svgPath,p=e.width,v=e.height,m=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)0>t.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o}(e,["top","className","color","smooth","component","viewBox","svgPath","width","height"]),b=n.useState(!1),h=b[0],g=b[1];return n.useEffect(function(){var e=function(){g(document.documentElement.scrollTop>=o)};return e(),document.addEventListener("scroll",e),function(){return document.removeEventListener("scroll",e)}},[o]),r.createElement(r.Fragment,null,h&&r.createElement("button",a({className:"scroll-to-top "+(void 0===i?"":i),onClick:function(){var e;void 0===(e=u)&&(e=!1),e?window.scrollTo({top:0,behavior:"smooth"}):document.documentElement.scrollTop=0},"aria-label":"Scroll to top"},m),(void 0===s?"":s)||r.createElement("svg",{width:void 0===p?"28":p,height:void 0===v?"28":v,fill:void 0===l?"black":l,viewBox:void 0===d?"0 0 256 256":d},r.createElement("path",{d:void 0===f?"M222.138,91.475l-89.6-89.6c-2.5-2.5-6.551-2.5-9.051,0l-89.6,89.6c-2.5,2.5-2.5,6.551,0,9.051s6.744,2.5,9.244,0L122,21.85  V249.6c0,3.535,2.466,6.4,6,6.4s6-2.865,6-6.4V21.85l78.881,78.676c1.25,1.25,2.992,1.875,4.629,1.875s3.326-0.625,4.576-1.875  C224.586,98.025,224.638,93.975,222.138,91.475z":f}))))}},5400:function(e,t,o){o.d(t,{gm:function(){return a}});var n=o(2265);let r=(0,n.createContext)(void 0);function a(e){let t=(0,n.useContext)(r);return e||t||"ltr"}},4356:function(e,t,o){o.d(t,{Pc:function(){return y},ck:function(){return S},fC:function(){return _}});var n=o(3428),r=o(2265),a=o(5744),i=o(7733),l=o(2210),c=o(6989),u=o(966),s=o(9381),d=o(6459),f=o(3763),p=o(5400);let v="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[h,g,w]=(0,i.B)(b),[E,y]=(0,c.b)(b,[w]),[x,C]=E(b),T=(0,r.forwardRef)((e,t)=>(0,r.createElement)(h.Provider,{scope:e.__scopeRovingFocusGroup},(0,r.createElement)(h.Slot,{scope:e.__scopeRovingFocusGroup},(0,r.createElement)(I,(0,n.Z)({},e,{ref:t}))))),I=(0,r.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:o,orientation:i,loop:c=!1,dir:u,currentTabStopId:b,defaultCurrentTabStopId:h,onCurrentTabStopIdChange:w,onEntryFocus:E,...y}=e,C=(0,r.useRef)(null),T=(0,l.e)(t,C),I=(0,p.gm)(u),[F=null,R]=(0,f.T)({prop:b,defaultProp:h,onChange:w}),[_,S]=(0,r.useState)(!1),D=(0,d.W)(E),A=g(o),V=(0,r.useRef)(!1),[k,P]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=C.current;if(e)return e.addEventListener(v,D),()=>e.removeEventListener(v,D)},[D]),(0,r.createElement)(x,{scope:o,orientation:i,dir:I,loop:c,currentTabStopId:F,onItemFocus:(0,r.useCallback)(e=>R(e),[R]),onItemShiftTab:(0,r.useCallback)(()=>S(!0),[]),onFocusableItemAdd:(0,r.useCallback)(()=>P(e=>e+1),[]),onFocusableItemRemove:(0,r.useCallback)(()=>P(e=>e-1),[])},(0,r.createElement)(s.WV.div,(0,n.Z)({tabIndex:_||0===k?-1:0,"data-orientation":i},y,{ref:T,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{V.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!V.current;if(e.target===e.currentTarget&&t&&!_){let t=new CustomEvent(v,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=A().filter(e=>e.focusable);M([e.find(e=>e.active),e.find(e=>e.id===F),...e].filter(Boolean).map(e=>e.ref.current))}}V.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>S(!1))})))}),F=(0,r.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:o,focusable:i=!0,active:l=!1,tabStopId:c,...d}=e,f=(0,u.M)(),p=c||f,v=C("RovingFocusGroupItem",o),m=v.currentTabStopId===p,b=g(o),{onFocusableItemAdd:w,onFocusableItemRemove:E}=v;return(0,r.useEffect)(()=>{if(i)return w(),()=>E()},[i,w,E]),(0,r.createElement)(h.ItemSlot,{scope:o,id:p,focusable:i,active:l},(0,r.createElement)(s.WV.span,(0,n.Z)({tabIndex:m?0:-1,"data-orientation":v.orientation},d,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{i?v.onItemFocus(p):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>v.onItemFocus(p)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,o){var n;let r=(n=e.key,"rtl"!==o?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(r))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(r)))return R[r]}(e,v.orientation,v.dir);if(void 0!==t){e.preventDefault();let r=b().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){var o,n;"prev"===t&&r.reverse();let a=r.indexOf(e.currentTarget);r=v.loop?(o=r,n=a+1,o.map((e,t)=>o[(n+t)%o.length])):r.slice(a+1)}setTimeout(()=>M(r))}})})))}),R={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function M(e){let t=document.activeElement;for(let o of e)if(o===t||(o.focus(),document.activeElement!==t))return}let _=T,S=F},6823:function(e,t,o){o.d(t,{f:function(){return s}});var n=o(3428),r=o(2265),a=o(9381);let i="horizontal",l=["horizontal","vertical"],c=(0,r.forwardRef)((e,t)=>{let{decorative:o,orientation:l=i,...c}=e,s=u(l)?l:i;return(0,r.createElement)(a.WV.div,(0,n.Z)({"data-orientation":s},o?{role:"none"}:{"aria-orientation":"vertical"===s?s:void 0,role:"separator"},c,{ref:t}))});function u(e){return l.includes(e)}c.propTypes={orientation(e,t,o){let n=e[t],r=String(n);return n&&!u(n)?Error(`Invalid prop \`orientation\` of value \`${r}\` supplied to \`${o}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`):null}};let s=c},4522:function(e,t,o){o.d(t,{VY:function(){return M},aV:function(){return F},fC:function(){return I},xz:function(){return R}});var n=o(3428),r=o(2265),a=o(5744),i=o(6989),l=o(4356),c=o(5606),u=o(9381),s=o(5400),d=o(3763),f=o(966);let p="Tabs",[v,m]=(0,i.b)(p,[l.Pc]),b=(0,l.Pc)(),[h,g]=v(p),w=(0,r.forwardRef)((e,t)=>{let{__scopeTabs:o,value:a,onValueChange:i,defaultValue:l,orientation:c="horizontal",dir:p,activationMode:v="automatic",...m}=e,b=(0,s.gm)(p),[g,w]=(0,d.T)({prop:a,onChange:i,defaultProp:l});return(0,r.createElement)(h,{scope:o,baseId:(0,f.M)(),value:g,onValueChange:w,orientation:c,dir:b,activationMode:v},(0,r.createElement)(u.WV.div,(0,n.Z)({dir:b,"data-orientation":c},m,{ref:t})))}),E=(0,r.forwardRef)((e,t)=>{let{__scopeTabs:o,loop:a=!0,...i}=e,c=g("TabsList",o),s=b(o);return(0,r.createElement)(l.fC,(0,n.Z)({asChild:!0},s,{orientation:c.orientation,dir:c.dir,loop:a}),(0,r.createElement)(u.WV.div,(0,n.Z)({role:"tablist","aria-orientation":c.orientation},i,{ref:t})))}),y=(0,r.forwardRef)((e,t)=>{let{__scopeTabs:o,value:i,disabled:c=!1,...s}=e,d=g("TabsTrigger",o),f=b(o),p=C(d.baseId,i),v=T(d.baseId,i),m=i===d.value;return(0,r.createElement)(l.ck,(0,n.Z)({asChild:!0},f,{focusable:!c,active:m}),(0,r.createElement)(u.WV.button,(0,n.Z)({type:"button",role:"tab","aria-selected":m,"aria-controls":v,"data-state":m?"active":"inactive","data-disabled":c?"":void 0,disabled:c,id:p},s,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{c||0!==e.button||!1!==e.ctrlKey?e.preventDefault():d.onValueChange(i)}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&d.onValueChange(i)}),onFocus:(0,a.M)(e.onFocus,()=>{let e="manual"!==d.activationMode;m||c||!e||d.onValueChange(i)})})))}),x=(0,r.forwardRef)((e,t)=>{let{__scopeTabs:o,value:a,forceMount:i,children:l,...s}=e,d=g("TabsContent",o),f=C(d.baseId,a),p=T(d.baseId,a),v=a===d.value,m=(0,r.useRef)(v);return(0,r.useEffect)(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,r.createElement)(c.z,{present:i||v},({present:o})=>(0,r.createElement)(u.WV.div,(0,n.Z)({"data-state":v?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":f,hidden:!o,id:p,tabIndex:0},s,{ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0}}),o&&l))});function C(e,t){return`${e}-trigger-${t}`}function T(e,t){return`${e}-content-${t}`}let I=w,F=E,R=y,M=x}}]);