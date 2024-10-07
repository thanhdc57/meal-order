import{p as i,t as L,b as V,a8 as $,m as z,c as T,j as F,X as q}from"./index.c0c7e103.js";function S(e){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},S(e)}var A=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"];function G(e,t){if(e==null)return{};var o=H(e,t),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(o[n]=e[n]))}return o}function H(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,a;for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e,t,o){return t&&E(e.prototype,t),o&&E(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function Q(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},I(e,t)}function U(e){var t=Y();return function(){var n=w(e),r;if(t){var a=w(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return X(this,r)}}function X(e,t){if(t&&(S(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N(e)}function N(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Y(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},w(e)}var Z={children:i.exports.node,type:i.exports.string,size:i.exports.oneOfType([i.exports.number,i.exports.string]),bsSize:i.exports.string,valid:i.exports.bool,invalid:i.exports.bool,tag:L,innerRef:i.exports.oneOfType([i.exports.object,i.exports.func,i.exports.string]),plaintext:i.exports.bool,addon:i.exports.bool,className:i.exports.string,cssModule:i.exports.object},W={type:"text"},M=function(e){Q(o,e);var t=U(o);function o(n){var r;return J(this,o),r=t.call(this,n),r.getRef=r.getRef.bind(N(r)),r.focus=r.focus.bind(N(r)),r}return K(o,[{key:"getRef",value:function(r){this.props.innerRef&&this.props.innerRef(r),this.ref=r}},{key:"focus",value:function(){this.ref&&this.ref.focus()}},{key:"render",value:function(){var r=this.props,a=r.className,x=r.cssModule,f=r.type,b=r.bsSize,O=r.valid,u=r.invalid,p=r.tag,j=r.addon,P=r.plaintext,y=r.innerRef,c=G(r,A),s=["switch","radio","checkbox"].indexOf(f)>-1,g=/\D/g,v=f==="textarea",l=f==="select",_=f==="range",m=p||(l||v?f:"input"),d="form-control";P?(d="".concat(d,"-plaintext"),m=p||"input"):_?d="form-range":l?d="form-select":s&&(j?d=null:d="form-check-input"),c.size&&g.test(c.size)&&($(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`),b=c.size,delete c.size);var D=z(T(a,u&&"is-invalid",O&&"is-valid",b?l?"form-select-".concat(b):"form-control-".concat(b):!1,d),x);return(m==="input"||p&&typeof p=="function")&&(c.type=f==="switch"?"checkbox":f),c.children&&!(P||f==="select"||typeof m!="string"||m==="select")&&($('Input with a type of "'.concat(f,'" cannot have children. Please use "value"/"defaultValue" instead.')),delete c.children),F(m,{...c,ref:y,className:D,"aria-invalid":u})}}]),o}(V.Component);M.propTypes=Z;M.defaultProps=W;const se=M;var ee=["className","cssModule","hidden","widths","tag","check","size","for"];function R(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function te(e,t){if(e==null)return{};var o=re(e,t),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(o[n]=e[n]))}return o}function re(e,t){if(e==null)return{};var o={},n=Object.keys(e),r,a;for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&(o[r]=e[r]);return o}var ne=["xs","sm","md","lg","xl","xxl"],k=i.exports.oneOfType([i.exports.number,i.exports.string]),h=i.exports.oneOfType([i.exports.bool,i.exports.string,i.exports.number,i.exports.shape({size:k,order:k,offset:k})]),oe={children:i.exports.node,hidden:i.exports.bool,check:i.exports.bool,size:i.exports.string,for:i.exports.string,tag:L,className:i.exports.string,cssModule:i.exports.object,xs:h,sm:h,md:h,lg:h,xl:h,xxl:h,widths:i.exports.array},ie={tag:"label",widths:ne},C=function(t,o,n){return n===!0||n===""?t?"col":"col-".concat(o):n==="auto"?t?"col-auto":"col-".concat(o,"-auto"):t?"col-".concat(n):"col-".concat(o,"-").concat(n)};function B(e){var t=e.className,o=e.cssModule,n=e.hidden,r=e.widths,a=e.tag,x=e.check,f=e.size,b=e.for,O=te(e,ee),u=[];r.forEach(function(y,c){var s=e[y];if(delete O[y],!(!s&&s!=="")){var g=!c,v;if(q(s)){var l,_=g?"-":"-".concat(y,"-");v=C(g,y,s.size),u.push(z(T((l={},R(l,v,s.size||s.size===""),R(l,"order".concat(_).concat(s.order),s.order||s.order===0),R(l,"offset".concat(_).concat(s.offset),s.offset||s.offset===0),l))),o)}else v=C(g,y,s),u.push(v)}});var p=f||u.length,j=!(x||p),P=z(T(t,n?"visually-hidden":!1,x?"form-check-label":!1,f?"col-form-label-".concat(f):!1,u,p?"col-form-label":!1,j?"form-label":!1),o);return F(a,{htmlFor:b,...O,className:P})}B.propTypes=oe;B.defaultProps=ie;export{se as I,B as L};
