import{O as u,j as e,r as a,u as y,T as d,Y as v,d as n,i as j,B as w}from"./index-BmyhqYU4.js";import{S as r}from"./sweetalert2.esm.all-BY1s0Tb6.js";import{T as p}from"./TextField-w-Pchb6Y.js";import{I as S}from"./InputAdornment-CnZNP5mf.js";import{m as k}from"./proxy-DtaezcPX.js";import{B}from"./Button-BzZCX98v.js";import"./Select-DnmlUQla.js";import"./useControlled-BfNHh3CR.js";const C=u(e.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility"),I=u(e.jsx("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff"),P=n(w)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${j("contact.svg")});
  background-size: cover;
  background-position: center;
  background-color: rgba(232, 221, 206, 0.9);
`,T=n(k.div)`
  background: rgba(245, 238, 220, 0.9);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  text-align: center;
  border: 2px solid #b07241;
`,z=n(B)`
  background-color: #b07241;
  color: #fff;
  font-family: "Playfair Display", serif;
  font-size: 1.1rem;
  padding: 12px;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #8c6b52;
  }
`,W=()=>{const[i,f]=a.useState(""),[c,m]=a.useState(""),[s,x]=a.useState(!1),g=y(),h=()=>{x(!s)},b=async o=>{o.preventDefault();try{const t=await fetch("https://web-production-70fa.up.railway.app/api/users/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:i,password:c})});if(t.ok){const l=await t.json();localStorage.setItem("accessToken",l.access),localStorage.setItem("refreshToken",l.refresh),i==="psicoarrazola"?(localStorage.setItem("role","admin"),r.fire({icon:"success",title:"¡Bienvenido!",text:"Inicio de sesión exitoso",showConfirmButton:!1,timer:2e3}),setTimeout(()=>{g("/admin-dashboard")},2e3)):r.fire({icon:"warning",title:"Acceso denegado",text:"No tienes permisos de administrador."})}else r.fire({icon:"error",title:"Error en el inicio de sesión",text:"Usuario o contraseña incorrectos."})}catch(t){console.error("Error en el inicio de sesión:",t),r.fire({icon:"error",title:"Error del servidor",text:"No se pudo conectar al servidor. Intenta más tarde."})}};return e.jsx(P,{children:e.jsxs(T,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsx(d,{variant:"h4",sx:{fontFamily:"Playfair Display",fontWeight:"bold",color:"#4b3f2f"},children:"Administrador"}),e.jsx(d,{variant:"body1",sx:{marginBottom:"20px",fontFamily:"Playfair Display",color:"#654828"},children:"Ingrese sus credenciales"}),e.jsxs("form",{onSubmit:b,children:[e.jsx(p,{fullWidth:!0,label:"Usuario",variant:"outlined",sx:{marginBottom:"15px",background:"#fff",borderRadius:"5px","& .MuiInputBase-input":{fontSize:{xs:"0.9rem",sm:"1rem"}}},value:i,onChange:o=>f(o.target.value),inputProps:{autoCapitalize:"none",autoCorrect:"off",spellCheck:!1}}),e.jsx(p,{fullWidth:!0,label:"Contraseña",type:s?"text":"password",variant:"outlined",sx:{marginBottom:"20px",background:"#fff",borderRadius:"5px"},value:c,onChange:o=>m(o.target.value),InputProps:{endAdornment:e.jsx(S,{position:"end",children:e.jsx(v,{onClick:h,edge:"end",children:s?e.jsx(I,{}):e.jsx(C,{})})})}}),e.jsx(z,{type:"submit",fullWidth:!0,children:"Iniciar Sesión"})]})]})})};export{W as default};
