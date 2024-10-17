import{p as n,t as O,e as M,m as x,c as b,j as w,Y as N}from"./index.e1cad858.js";var $=["className","cssModule","noGutters","tag","widths"];function k(t,o){if(t==null)return{};var s=A(t,o),e,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],!(o.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,e)||(s[e]=t[e]))}return s}function A(t,o){if(t==null)return{};var s={},e=Object.keys(t),r,a;for(a=0;a<e.length;a++)r=e[a],!(o.indexOf(r)>=0)&&(s[r]=t[r]);return s}var E=["xs","sm","md","lg","xl","xxl"],d=n.exports.oneOfType([n.exports.number,n.exports.string]),G={tag:O,noGutters:M(n.exports.bool,"Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),className:n.exports.string,cssModule:n.exports.object,xs:d,sm:d,md:d,lg:d,xl:d,xxl:d,widths:n.exports.array},_={tag:"div",widths:E};function C(t){var o=t.className,s=t.cssModule,e=t.noGutters,r=t.tag,a=t.widths,i=k(t,$),f=[];a.forEach(function(u,c){var p=t[u];if(delete i[u],!!p){var m=!c;f.push(m?"row-cols-".concat(p):"row-cols-".concat(u,"-").concat(p))}});var l=x(b(o,e?"gx-0":null,"row",f),s);return w(r,{...i,className:l})}C.propTypes=G;C.defaultProps=_;var z=["className","cssModule","widths","tag"];function L(t,o){if(t==null)return{};var s=R(t,o),e,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],!(o.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,e)||(s[e]=t[e]))}return s}function R(t,o){if(t==null)return{};var s={},e=Object.keys(t),r,a;for(a=0;a<e.length;a++)r=e[a],!(o.indexOf(r)>=0)&&(s[r]=t[r]);return s}function v(t,o,s){return o in t?Object.defineProperty(t,o,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[o]=s,t}var P=["xs","sm","md","lg","xl","xxl"],y=n.exports.oneOfType([n.exports.number,n.exports.string]),g=n.exports.oneOfType([n.exports.bool,n.exports.number,n.exports.string,n.exports.shape({size:n.exports.oneOfType([n.exports.bool,n.exports.number,n.exports.string]),order:y,offset:y})]),B={tag:O,xs:g,sm:g,md:g,lg:g,xl:g,xxl:g,className:n.exports.string,cssModule:n.exports.object,widths:n.exports.array},I={tag:"div",widths:P},h=function(o,s,e){return e===!0||e===""?o?"col":"col-".concat(s):e==="auto"?o?"col-auto":"col-".concat(s,"-auto"):o?"col-".concat(e):"col-".concat(s,"-").concat(e)},Y=function(o,s){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:P,r=o,a=[];return e.forEach(function(i,f){var l=r[i];if(delete r[i],!(!l&&l!=="")){var u=!f;if(N(l)){var c,p=u?"-":"-".concat(i,"-"),m=h(u,i,l.size);a.push(x(b((c={},v(c,m,l.size||l.size===""),v(c,"order".concat(p).concat(l.order),l.order||l.order===0),v(c,"offset".concat(p).concat(l.offset),l.offset||l.offset===0),c)),s))}else{var T=h(u,i,l);a.push(T)}}}),{colClasses:a,modifiedAttributes:r}};function j(t){var o=t.className,s=t.cssModule,e=t.widths,r=t.tag,a=L(t,z),i=Y(a,s,e),f=i.modifiedAttributes,l=i.colClasses;l.length||l.push("col");var u=x(b(o,l),s);return w(r,{...f,className:u})}j.propTypes=B;j.defaultProps=I;export{j as C,C as R};
