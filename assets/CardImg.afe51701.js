import{p as i,t as p,m as g,c as f,j as u}from"./index.695a153e.js";var b=["className","cssModule","top","bottom","tag"];function d(t,s){if(t==null)return{};var r=v(t,s),a,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)a=o[e],!(s.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(r[a]=t[a]))}return r}function v(t,s){if(t==null)return{};var r={},a=Object.keys(t),e,o;for(o=0;o<a.length;o++)e=a[o],!(s.indexOf(e)>=0)&&(r[e]=t[e]);return r}var y={bottom:i.exports.bool,className:i.exports.string,cssModule:i.exports.object,tag:p,top:i.exports.bool},j={tag:"img"};function l(t){var s=t.className,r=t.cssModule,a=t.top,e=t.bottom,o=t.tag,c=d(t,b),n="card-img";a&&(n="card-img-top"),e&&(n="card-img-bottom");var m=g(f(s,n),r);return u(o,{...c,className:m})}l.propTypes=y;l.defaultProps=j;export{l as C};
