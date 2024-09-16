import{p as c,t as g,m as b,c as N,j as e,r as z,q as n,B as T,S as F}from"./index.abb1299b.js";import{R as d,C as o}from"./Col.1bdc323d.js";import{C as h}from"./Card.5a24c006.js";import{C as y,a as k}from"./CardTitle.7c2d70d2.js";import{F as S}from"./facebook.d687ca82.js";import{M as $}from"./App.c6793190.js";var L=["className","cssModule","top","bottom","tag"];function R(t,a){if(t==null)return{};var l=B(t,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,s)||(l[s]=t[s]))}return l}function B(t,a){if(t==null)return{};var l={},s=Object.keys(t),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(l[r]=t[r]);return l}var G={bottom:c.exports.bool,className:c.exports.string,cssModule:c.exports.object,tag:g,top:c.exports.bool},U={tag:"img"};function m(t){var a=t.className,l=t.cssModule,s=t.top,r=t.bottom,i=t.tag,f=R(t,L),p="card-img";s&&(p="card-img-top"),r&&(p="card-img-bottom");var x=b(N(a,p),l);return e(i,{...f,className:x})}m.propTypes=G;m.defaultProps=U;var E=["className","cssModule","tag"];function K(t,a){if(t==null)return{};var l=D(t,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,s)||(l[s]=t[s]))}return l}function D(t,a){if(t==null)return{};var l={},s=Object.keys(t),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(l[r]=t[r]);return l}var H={tag:g,className:c.exports.string,cssModule:c.exports.object},Q={tag:"div"};function _(t){var a=t.className,l=t.cssModule,s=t.tag,r=K(t,E),i=b(N(a,"card-img-overlay"),l);return e(s,{...r,className:i})}_.propTypes=H;_.defaultProps=Q;var q=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"];function Z(t,a){if(t==null)return{};var l=J(t,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,s)||(l[s]=t[s]))}return l}function J(t,a){if(t==null)return{};var l={},s=Object.keys(t),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(l[r]=t[r]);return l}var V={bordered:c.exports.bool,borderless:c.exports.bool,className:c.exports.string,cssModule:c.exports.object,dark:c.exports.bool,hover:c.exports.bool,innerRef:c.exports.oneOfType([c.exports.func,c.exports.string,c.exports.object]),responsive:c.exports.oneOfType([c.exports.bool,c.exports.string]),responsiveTag:g,size:c.exports.string,striped:c.exports.bool,tag:g},X={tag:"table",responsiveTag:"div"};function j(t){var a=t.className,l=t.cssModule,s=t.size,r=t.bordered,i=t.borderless,f=t.striped,p=t.dark,x=t.hover,v=t.responsive,P=t.tag,A=t.responsiveTag,C=t.innerRef,I=Z(t,q),W=b(N(a,"table",s?"table-"+s:!1,r?"table-bordered":!1,i?"table-borderless":!1,f?"table-striped":!1,p?"table-dark":!1,x?"table-hover":!1),l),w=e(P,{...I,ref:C,className:W});if(v){var M=b(v===!0?"table-responsive":"table-responsive-".concat(v),l);return e(A,{className:M,children:w})}return w}j.propTypes=V;j.defaultProps=X;function Y(t,a){if(t==null)return{};var l=ee(t,a),s,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)s=i[r],!(a.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,s)||(l[s]=t[s]))}return l}function ee(t,a){if(t==null)return{};var l={},s=Object.keys(t),r,i;for(i=0;i<s.length;i++)r=s[i],!(a.indexOf(r)>=0)&&(l[r]=t[r]);return l}var O=z.exports.forwardRef(function(t,a){var l=t.color,s=l===void 0?"currentColor":l,r=t.size,i=r===void 0?24:r,f=Y(t,["color","size"]);return n("svg",{ref:a,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...f,children:[e("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),e("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),e("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})});O.propTypes={color:c.exports.string,size:c.exports.oneOfType([c.exports.string,c.exports.number])};O.displayName="Instagram";const te=O;const u="/assets/meal1.6bb1798e.jpg",ce=()=>n(z.exports.Fragment,{children:[e(d,{children:e(o,{xl:"12",children:n("div",{className:"d-flex align-items-center justify-content-center flex-column w-100 custom_title",children:[e("p",{className:"m-0 custom_font",children:"HQ"}),e("p",{className:"m-0 custom_font",children:"WALDKRAIBURG"}),e("p",{className:"m-0",children:"GRILL/WOK/SUSHI"})]})})}),e(d,{children:e(o,{lg:"12",children:n(h,{className:"m-0",children:[e(m,{src:u,alt:"card-overlay",style:{height:"80vh",borderRadius:"0"}}),e(_,{className:"custom_card h-100",children:e(d,{className:"d-flex align-items-center h-100",children:n(o,{lg:{size:5,offset:1},children:[e(y,{tag:"h2",color:"primary",className:"card_title_custom",children:"Bestelle dir frische und gesunde Grill/Wok/Sushi!"}),e(k,{className:"card_text_custom",children:"Selber abholen, liefern lassen oder Tisch reservieren."}),n("div",{className:"d-flex align-items-center justify-content-around flex-wrap flex-sm-row flex-column w-100",style:{height:"20vh"},children:[e(T,{className:"button_cus1",color:"primary",style:{fontSize:"1rem"},size:"lg",children:"Online bestellen"}),e(T,{className:"button_cus2",size:"lg",color:"secondary",style:{fontSize:"1rem"},children:"Tisch reservieren"})]})]})})})]})})}),e(d,{className:"custom_col",children:e(o,{xl:"12",children:n("div",{className:"custom_col",children:[e("p",{className:"custom_title_section",children:"Aktuelle Angebote"}),n(d,{children:[e(o,{lg:{size:5,offset:1},children:e(h,{children:e(m,{src:u,alt:"picture 1"})})}),e(o,{lg:"5",children:e(h,{children:e(m,{src:u,alt:"picture 1"})})})]})]})})}),n(d,{className:"custom_col d-flex align-items-center justify-content-center flex-column",children:[e(d,{children:e(o,{xl:"12",children:e("div",{className:"custom_col",children:e("p",{className:"custom_title_section",children:"Unsere Philosophie"})})})}),e(d,{children:e(o,{md:{size:6,offset:3},children:e("p",{className:"custom_text_section",children:"Bei HQ-Waldkraiburg vereinen wir alte asiatische Werte und Traditionen mit dem Geist unserer Zeit und gestalten nicht nur nicht nur sorgf\xE4ltige Auswahl an qualitativ hochwertige Gerichte, sondern schaffen mit unserer Personlichkeit einen vibe, in dem du dich wohl f\xFChlst"})})}),n(d,{style:{marginTop:"80px"},children:[e(o,{lg:{size:5,offset:1},style:{marginTop:"20px"},children:n(h,{style:{height:"100%"},className:"custom_card2",children:[e(y,{className:"custom_title_card",children:"\xD6ffnungszeiten"}),n(k,{className:"custom_text_card d-flex align-items-center justify-content-center flex-column w-100",children:[e("p",{className:"fw-bolder",style:{marginTop:"40px"},children:"Dienstag \u2013 Sonntag"}),e("p",{children:"11:00 \u2013 15:00 Uhr"}),e("p",{children:"17:00 \u2013 22:00 Uhr"}),e("br",{}),e("p",{className:"fw-bolder",children:"Stadtplatz 30"}),e("p",{className:"fw-bolder",children:"84478 Waldkraiburg"}),e("br",{}),e("p",{className:"fw-bolder",children:"Tel: 08638 / 949663"})]})]})}),e(o,{lg:{size:5},style:{marginTop:"20px"},children:n(h,{style:{height:"100%"},className:"custom_card2",children:[n(y,{className:"custom_title_card",children:["Liefergebiete",e("p",{style:{fontSize:"1rem",fontWeight:"300"},children:"Unsere Lieferkosten betragen 2,50\u20AC"})]}),e("div",{style:{padding:" 0 30px 20px 30px"},children:n(j,{bordered:!0,responsive:!0,className:"custom_table",children:[e("thead",{children:n("tr",{className:"custom_tr",children:[e("th",{}),e("th",{children:"Mindestbestellwert"})]})}),n("tbody",{children:[n("tr",{children:[e("td",{children:"Alt\xF6tting, Neu\xF6tting"}),e("td",{children:"15\u20AC"})]}),n("tr",{children:[e("td",{children:"Winh\xF6ring, Kastl, Emmerting"}),e("td",{children:"15\u20AC"})]}),n("tr",{children:[e("td",{children:"Alt\xF6tting, Neu\xF6tting"}),e("td",{children:"15\u20AC"})]}),n("tr",{children:[e("td",{children:"Alt\xF6tting, Neu\xF6tting"}),e("td",{children:"15\u20AC"})]}),n("tr",{children:[e("td",{children:"Alt\xF6tting, Neu\xF6tting"}),e("td",{children:"15\u20AC"})]}),n("tr",{children:[e("td",{children:"Alt\xF6tting, Neu\xF6tting"}),e("td",{children:"15\u20AC"})]})]})]})})]})})]})]}),n(d,{className:"custom_col",children:[e(o,{xl:"12",children:e("div",{className:"custom_col",children:e("p",{className:"custom_title_section",children:"Impressionen"})})}),e(F,{children:n(d,{style:{cursor:"pointer"},children:[n(o,{sm:{size:4,offset:2},style:{height:"100vh"},children:[e(h,{className:"h-60_cus",children:e(m,{src:u,alt:"picture 1",style:{height:"100%"}})}),e(h,{className:"h-30_cus",children:e(m,{src:u,alt:"picture 2",style:{height:"100%"}})})]}),n(o,{sm:"4",style:{height:"100vh"},children:[e(h,{className:"h-30_cus",children:e(m,{src:u,alt:"picture 3",style:{height:"100%"}})}),e(h,{className:"h-60_cus",children:e(m,{src:u,alt:"picture 4",style:{height:"100%"}})})]})]})})]}),e(d,{className:"custom_col2",style:{height:"80vh"},children:n("div",{className:"d-flex align-items-center justify-content-center flex-column w-100 h-20 custom_title",children:[e("p",{className:"m-0 custom_font2",children:"HQ"}),e("p",{className:"m-0 custom_font2",children:"WALDKRAIBURG"}),e("p",{className:"m-0",children:"GRILL/WOK/SUSHI"}),e(d,{children:e(o,{md:{size:8,offset:2},children:e("p",{className:"custom_text_section2",children:"Mit Fokus auf asiatische K\xFCche bieten wir frische und gesunde Gerichte an"})})}),n("div",{className:"mt-3 d-flex align-items-center justify-content-around w-20_cus",style:{cursor:"pointer"},children:[e(te,{size:30}),e(S,{size:30}),e($,{size:30})]}),n("div",{className:"mt-3 d-flex align-items-center justify-content-around w-40_cus",style:{cursor:"pointer"},children:[e("p",{className:"custom_text_section2",children:"Impressum"}),e("p",{className:"custom_text_section2",children:"AGBs"}),e("p",{className:"custom_text_section2",children:"Datenschutz"})]})]})})]});export{ce as default};
