import{p as i,t as u,m as f,c as g,j as a,M as b,a8 as h,q as l,L as v,B as y,a7 as N}from"./index.695a153e.js";import{I as x}from"./index.5dd08b04.js";import{s as j,a as w,C as T}from"./firebase.d1768d86.js";import{C as P}from"./CardText.d780fba8.js";import{C as I}from"./CardTitle.fa73195f.js";import{F as O}from"./page-authentication.a44a1d56.js";import{L as p,I as C}from"./Label.9e74cccf.js";import"./App.7349bb59.js";var F=["className","cssModule","innerRef","tag"];function L(e,o){if(e==null)return{};var n=M(e,o),t,s;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],!(o.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function M(e,o){if(e==null)return{};var n={},t=Object.keys(e),s,r;for(r=0;r<t.length;r++)s=t[r],!(o.indexOf(s)>=0)&&(n[s]=e[s]);return n}var S={className:i.exports.string,cssModule:i.exports.object,innerRef:i.exports.oneOfType([i.exports.object,i.exports.string,i.exports.func]),tag:u},k={tag:"div"};function m(e){var o=e.className,n=e.cssModule,t=e.innerRef,s=e.tag,r=L(e,F),c=f(g(o,"card-body"),n);return a(s,{...r,className:c,ref:t})}m.propTypes=S;m.defaultProps=k;const B=(e,o)=>j(w,e,o),$=()=>{if(localStorage.getItem("dataFirebase"))return a(b,{to:"/Table",replace:!0});const o=h();return a("div",{className:"auth-wrapper auth-basic px-2",children:a("div",{className:"auth-inner my-2",children:a(T,{className:"mb-0",children:l(m,{children:[a(I,{tag:"h4",className:"mb-1",children:"App management"}),a(P,{className:"mb-2",children:"Please sign-in to your account"}),l(O,{className:"auth-login-form mt-2",onSubmit:async t=>{t.preventDefault();const s=new FormData(t.target),r=s.get("email"),c=s.get("password"),d=await B(r,c);d&&(localStorage.setItem("dataFirebase",d.user.uid),o("/Table"),N.success("login successfull!"))},children:[l("div",{className:"mb-1",children:[a(p,{className:"form-label",for:"login-email",children:"Email"}),a(C,{name:"email",type:"email",id:"login-email",placeholder:"john@example.com",autoFocus:!0})]}),l("div",{className:"mb-1",children:[a("div",{className:"d-flex justify-content-between",children:a(p,{className:"form-label",for:"login-password",children:"Password"})}),a(x,{name:"password",className:"input-group-merge",id:"login-password"})]}),a(v,{to:"/",children:a("small",{children:"Go to homepage"})}),a(y,{color:"primary",block:!0,className:"mt-2",children:"Sign in"})]})]})})})})};export{$ as default};
