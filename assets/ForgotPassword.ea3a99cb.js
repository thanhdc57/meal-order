import{r as f,j as e,p as n,q as i,L as p,B as h}from"./index.abb1299b.js";import{u as g}from"./App.c6793190.js";import{R as u,C as d}from"./Col.1bdc323d.js";import{C as y,a as v}from"./CardTitle.7c2d70d2.js";import{F as x,L,I as b}from"./page-authentication.79418836.js";function C(r,l){if(r==null)return{};var t=w(r,l),s,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(o=0;o<a.length;o++)s=a[o],!(l.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,s)||(t[s]=r[s]))}return t}function w(r,l){if(r==null)return{};var t={},s=Object.keys(r),o,a;for(a=0;a<s.length;a++)o=s[a],!(l.indexOf(o)>=0)&&(t[o]=r[o]);return t}var c=f.exports.forwardRef(function(r,l){var t=r.color,s=t===void 0?"currentColor":t,o=r.size,a=o===void 0?24:o,m=C(r,["color","size"]);return e("svg",{ref:l,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...m,children:e("polyline",{points:"15 18 9 12 15 6"})})});c.propTypes={color:n.exports.string,size:n.exports.oneOfType([n.exports.string,n.exports.number])};c.displayName="ChevronLeft";const k=c,N="/assets/forgot-password-v2.5364645d.svg",F="/assets/forgot-password-v2-dark.d5b55466.svg",z=()=>{const{skin:r}=g();return e("div",{className:"auth-wrapper auth-cover",children:i(u,{className:"auth-inner m-0",children:[i(p,{className:"brand-logo",to:"/",onClick:t=>t.preventDefault(),children:[i("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[i("defs",{children:[i("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[e("stop",{stopColor:"#000000",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),i("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[e("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),e("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:i("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[e("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),e("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),e("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),e("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),e("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),e("h2",{className:"brand-text text-primary ms-1",children:"Vuexy"})]}),e(d,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:e("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:e("img",{className:"img-fluid",src:r==="dark"?F:N,alt:"Login Cover"})})}),e(d,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:i(d,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[e(y,{tag:"h2",className:"fw-bold mb-1",children:"Forgot Password? \u{1F512}"}),e(v,{className:"mb-2",children:"Enter your email and we'll send you instructions to reset your password"}),i(x,{className:"auth-forgot-password-form mt-2",onSubmit:t=>t.preventDefault(),children:[i("div",{className:"mb-1",children:[e(L,{className:"form-label",for:"login-email",children:"Email"}),e(b,{type:"email",id:"login-email",placeholder:"john@example.com",autoFocus:!0})]}),e(h,{color:"primary",block:!0,children:"Send reset link"})]}),e("p",{className:"text-center mt-2",children:i(p,{to:"/login",children:[e(k,{className:"rotate-rtl me-25",size:14}),e("span",{className:"align-middle",children:"Back to login"})]})})]})})]})})};export{z as default};
