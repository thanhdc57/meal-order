import{p as i,t as u,m as f,c as g,j as a,M as b,U as h,q as l,L as v,B as y,a7 as N}from"./index-c5768d49.js";import{I as x}from"./index-a3a8ccd0.js";import{C as j}from"./Card-8de0fabe.js";import{C as w}from"./CardText-73716371.js";import{C as T}from"./CardTitle-bdf3d51b.js";import{F as P}from"./page-authentication-d7168bd0.js";import{L as p,I}from"./Label-09cc53f8.js";import{s as O,a as C}from"./firebase-ced3a53d.js";import"./App-d14c2b85.js";var F=["className","cssModule","innerRef","tag"];function L(e,o){if(e==null)return{};var n=M(e,o),t,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],!(o.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function M(e,o){if(e==null)return{};var n={},t=Object.keys(e),s,r;for(r=0;r<t.length;r++)s=t[r],!(o.indexOf(s)>=0)&&(n[s]=e[s]);return n}var S={className:i.exports.string,cssModule:i.exports.object,innerRef:i.exports.oneOfType([i.exports.object,i.exports.string,i.exports.func]),tag:u},k={tag:"div"};function m(e){var o=e.className,n=e.cssModule,t=e.innerRef,s=e.tag,r=L(e,F),c=f(g(o,"card-body"),n);return a(s,{...r,className:c,ref:t})}m.propTypes=S;m.defaultProps=k;const B=(e,o)=>O(C,e,o),$=()=>{if(localStorage.getItem("dataFirebase"))return a(b,{to:"/Table",replace:!0});const o=h();return a("div",{className:"auth-wrapper auth-basic px-2",children:a("div",{className:"auth-inner my-2",children:a(j,{className:"mb-0",children:l(m,{children:[a(T,{tag:"h4",className:"mb-1",children:"App management"}),a(w,{className:"mb-2",children:"Please sign-in to your account"}),l(P,{className:"auth-login-form mt-2",onSubmit:async t=>{t.preventDefault();const s=new FormData(t.target),r=s.get("email"),c=s.get("password"),d=await B(r,c);d&&(localStorage.setItem("dataFirebase",d.user.uid),o("/Table"),N.success("login successfull!"))},children:[l("div",{className:"mb-1",children:[a(p,{className:"form-label",for:"login-email",children:"Email"}),a(I,{name:"email",type:"email",id:"login-email",placeholder:"john@example.com",autoFocus:!0})]}),l("div",{className:"mb-1",children:[a("div",{className:"d-flex justify-content-between",children:a(p,{className:"form-label",for:"login-password",children:"Password"})}),a(x,{name:"password",className:"input-group-merge",id:"login-password"})]}),a(v,{to:"/",children:a("small",{children:"Go to homepage"})}),a(y,{color:"primary",block:!0,className:"mt-2",children:"Sign in"})]})]})})})})};export{$ as default};