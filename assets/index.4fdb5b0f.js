import{p as i,t as j,m as P,c,j as a,r as p,q as u}from"./index.c0c7e103.js";import{L as T,I as $}from"./Label.10e25b51.js";import{D as B,I as E}from"./App.9f382da0.js";var M=["className","cssModule","tag","type","size"];function L(e,s){if(e==null)return{};var n=W(e,s),r,t;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],!(s.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function W(e,s){if(e==null)return{};var n={},r=Object.keys(e),t,o;for(o=0;o<r.length;o++)t=r[o],!(s.indexOf(t)>=0)&&(n[t]=e[t]);return n}var _={className:i.exports.string,cssModule:i.exports.object,size:i.exports.string,tag:j,type:i.exports.string},C={tag:"div"};function y(e){var s=e.className,n=e.cssModule,r=e.tag;e.type;var t=e.size,o=L(e,M),l=P(c(s,"input-group",t?"input-group-".concat(t):null),n);return e.type==="dropdown"?a(B,{...o,className:l}):a(E.Provider,{value:{insideInputGroup:!0},children:a(r,{...o,className:l})})}y.propTypes=_;y.defaultProps=C;var S=["className","cssModule","tag"];function F(e,s){if(e==null)return{};var n=G(e,s),r,t;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],!(s.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function G(e,s){if(e==null)return{};var n={},r=Object.keys(e),t,o;for(o=0;o<r.length;o++)t=r[o],!(s.indexOf(t)>=0)&&(n[t]=e[t]);return n}var q={className:i.exports.string,cssModule:i.exports.object,tag:j},R={tag:"span"};function g(e){var s=e.className,n=e.cssModule,r=e.tag,t=F(e,S),o=P(c(s,"input-group-text"),n);return a(r,{...t,className:o})}g.propTypes=q;g.defaultProps=R;function A(e,s){if(e==null)return{};var n=D(e,s),r,t;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],!(s.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function D(e,s){if(e==null)return{};var n={},r=Object.keys(e),t,o;for(o=0;o<r.length;o++)t=r[o],!(s.indexOf(t)>=0)&&(n[t]=e[t]);return n}var x=p.exports.forwardRef(function(e,s){var n=e.color,r=n===void 0?"currentColor":n,t=e.size,o=t===void 0?24:t,l=A(e,["color","size"]);return u("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[a("path",{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"}),a("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]})});x.propTypes={color:i.exports.string,size:i.exports.oneOfType([i.exports.string,i.exports.number])};x.displayName="EyeOff";const V=x;function H(e,s){if(e==null)return{};var n=J(e,s),r,t;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],!(s.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function J(e,s){if(e==null)return{};var n={},r=Object.keys(e),t,o;for(o=0;o<r.length;o++)t=r[o],!(s.indexOf(t)>=0)&&(n[t]=e[t]);return n}var v=p.exports.forwardRef(function(e,s){var n=e.color,r=n===void 0?"currentColor":n,t=e.size,o=t===void 0?24:t,l=H(e,["color","size"]);return u("svg",{ref:s,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[a("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),a("circle",{cx:"12",cy:"12",r:"3"})]})});v.propTypes={color:i.exports.string,size:i.exports.oneOfType([i.exports.string,i.exports.number])};v.displayName="Eye";const K=v,k=p.exports.forwardRef((e,s)=>{const{label:n,hideIcon:r,showIcon:t,visible:o,className:l,htmlFor:f,placeholder:b,iconSize:h,inputClassName:m,invalid:O,...N}=e,[d,I]=p.exports.useState(o),z=()=>{const w=h||14;return d===!1?r||a(K,{size:w}):t||a(V,{size:w})};return u(p.exports.Fragment,{children:[n?a(T,{className:"form-label",for:f,children:n}):null,u(y,{className:c({[l]:l,"is-invalid":O}),children:[a($,{ref:s,invalid:O,type:d===!1?"password":"text",placeholder:b||"\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7\xB7",className:c({[m]:m}),...n&&f?{id:f}:{},...N}),a(g,{className:"cursor-pointer",onClick:()=>I(!d),children:z()})]})]})});k.propTypes={invalid:i.exports.bool,hideIcon:i.exports.node,showIcon:i.exports.node,visible:i.exports.bool,className:i.exports.string,placeholder:i.exports.string,iconSize:i.exports.number,inputClassName:i.exports.string,label(e,s){if(e[s]&&e.htmlFor==="undefined")throw new Error("htmlFor prop is required when label prop is present")},htmlFor(e,s){if(e[s]&&e.label==="undefined")throw new Error("label prop is required when htmlFor prop is present")}};k.defaultProps={visible:!1};export{k as I};
