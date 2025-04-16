import{y as I,J as W,r as t,h as q,j as e,z as _,t as M,w as z,u as H,d as m,m as U,B as Y,W as k,T as D}from"./index-eYpaMNwy.js";import{C as J}from"./Calendar-CxLVhCKi.js";import{W as V}from"./WhatsAppContact-B4k0JEBd.js";import{G as w,I as L}from"./InfoBoxesReserva-CpFfeX2l.js";import{S as f}from"./sweetalert2.esm.all-BY1s0Tb6.js";import{T as h,F as $}from"./TextField-BmxGbksw.js";import{u as Q,f as K}from"./Select-POoB2MIZ.js";import{F as X,C as Z}from"./FormControlLabel-DmcylZOu.js";import{B as ee}from"./Button-Bogmvrbe.js";import"./index-CBYEBdIo.js";import"./getThemeProps-CZKFh4-u.js";import"./index-DcDR0W6z.js";import"./useControlled-CFJv-TQi.js";import"./InputAdornment-DPDR4N5K.js";function oe(r){return I("MuiFormGroup",r)}W("MuiFormGroup",["root","row","error"]);const re=r=>{const{classes:a,row:i,error:l}=r;return z({root:["root",i&&"row",l&&"error"]},oe,a)},te=_("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:i}=r;return[a.root,i.row&&a.row]}})({display:"flex",flexDirection:"column",flexWrap:"wrap",variants:[{props:{row:!0},style:{flexDirection:"row"}}]}),ae=t.forwardRef(function(a,i){const l=q({props:a,name:"MuiFormGroup"}),{className:c,row:b=!1,...d}=l,v=Q(),u=K({props:l,muiFormControl:v,states:["error"]}),g={...l,row:b,error:u.error},x=re(g);return e.jsx(te,{className:M(x.root,c),ownerState:g,ref:i,...d})}),ie=U`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`,se=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 900px; 
  margin: auto;
  padding: 20px;

  @media (max-width: 1024px) {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
  }
`,ne=m.div`
  display: flex;
  flex-direction: row; /* 🔥 Siempre en fila */
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;


`,E=m.div`
  width: 80px;
  height: 80px;
  background-color: rgb(127, 153, 136);
  border: 2px solid #c0a080;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: ${ie} 3s infinite ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.4);
  }

  img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`,le=m.video`
  width: 100%;
  height: auto; /* 🔥 Se adapta sin cortar */
  border-radius: 10px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  border: 2px solid #d2b48c;
  object-fit: contain; /* 🔥 Evita recortes */

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    border-radius: 5px;
  }
`,ce=()=>{const r=H(),a=()=>{r("/faq")};return e.jsxs(se,{children:[e.jsxs(ne,{children:[e.jsx(E,{children:e.jsx(V,{})}),e.jsx(E,{onClick:a,children:e.jsx("img",{src:"/images/faq.svg",alt:"FAQ"})})]}),e.jsxs(le,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controlsList:"nofullscreen",children:[e.jsx("source",{src:"/images/reserva.mp4",type:"video/mp4"}),"Tu navegador no soporta el video."]})]})},de=m.div`
  background-color: rgb(132, 151, 139);
  padding: 60px;
  border-radius: 25px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
  border: 4px solid #c0a080;
  max-width: 1350px;
  margin: auto;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    border-radius: 15px;
  }
`,pe=m(D)`
  font-family: "Playfair Display";
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: bold !important;
  text-align: center;
  color: #f5eedc;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px;
  margin-bottom: 40px;
  margin-top: 40px;
`,Fe=()=>{t.useEffect(()=>{window.scrollTo(0,0)},[]);const[r,a]=t.useState(""),[i,l]=t.useState(""),[c,b]=t.useState(null),[d,v]=t.useState(""),[u,g]=t.useState(""),[x,R]=t.useState(""),[C,N]=t.useState(""),[j,O]=t.useState(!1),[s,P]=t.useState({firstName:!1,email:!1,selectedDate:!1,selectedOption:!1,selectedConsultationType:!1,privacyAccepted:!1}),B=["Ansiedad y Depresión","Regulación emocional","Autoestima y Conocimiento Personal","Duelo y Cambios","Conflictos interpersonales","Habilidades sociales","Crianza","Productividad y gestión del tiempo","Crecimiento personal y hábitos saludables","Fobias","Trastorno Obsesivo Compulsivo","Trastornos del Neurodesarrollo","Trastornos de la conducta alimentaria","Otro (especifique en el campo de comentarios)"],A=["Terapia Individual - 80€","Terapia de Pareja - 105€","Pack 4 Sesiones - 300€"],G=o=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o),T=async o=>{o.preventDefault();const y={firstName:r.trim()==="",email:i.trim()===""||!G(i),selectedDate:!c,selectedTime:!d,selectedOption:u.trim()==="",selectedConsultationType:x.trim()==="",privacyAccepted:!j};if(P(y),Object.values(y).some(n=>n)){await f.fire({icon:"error",title:"Oops...",text:"Por favor, completa todos los campos obligatorios.",confirmButtonColor:"#c0a080"});return}const S=c.toISOString().split("T")[0];try{if(!(await(await fetch("https://72ae-2001-4649-7505-0-e519-f0b0-e22e-d0c9.ngrok-free.app/api/verificar-disponibilidad/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fecha_reserva:S,hora_reserva:d})})).json()).disponible){await f.fire({icon:"error",title:"Horario no disponible",text:"Ya existe una reserva para esta fecha y hora. Por favor, elige otro horario.",confirmButtonColor:"#c0a080"});return}}catch(n){console.error("Error al verificar disponibilidad:",n),await f.fire({icon:"error",title:"Error de servidor",text:"No se pudo verificar la disponibilidad. Intenta de nuevo más tarde.",confirmButtonColor:"#c0a080"});return}const F={tipo_terapia:x,nombre_completo:r,email:i,motivo_consulta:u,fecha_reserva:S,hora_reserva:d,comentarios:C};console.log("📤 Datos enviados al backend:",F);try{const n=await fetch("https://72ae-2001-4649-7505-0-e519-f0b0-e22e-d0c9.ngrok-free.app/api/pago/crear-sesion/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(F)}),p=await n.json();console.log("📦 Respuesta del backend:",p),n.ok&&p.url?(console.log("💳 Redirigiendo a Stripe Checkout:",p.url),setTimeout(()=>{window.location.assign(p.url)},300)):await f.fire({icon:"error",title:"Error",text:p.error||"No se pudo iniciar el pago.",confirmButtonColor:"#c0a080"})}catch(n){console.error("❌ Error con Stripe:",n),await f.fire({icon:"error",title:"Error del servidor",text:"No se pudo conectar con el servidor de pagos.",confirmButtonColor:"#c0a080"})}};return e.jsxs(e.Fragment,{children:[e.jsxs(de,{children:[e.jsx(pe,{variant:"h4",children:"Reserva tu Terapia"}),e.jsxs(w,{container:!0,spacing:2,children:[e.jsx(w,{item:!0,xs:12,md:8,children:e.jsxs(Y,{component:"form",onSubmit:T,sx:{p:{xs:3,md:4},backgroundColor:"#f5eedc",border:"3px solid #d2b48c",borderRadius:"25px",boxShadow:"0 6px 12px rgba(0, 0, 0, 0.3), 0 0 10px 3px rgba(34, 139, 34, 0.2)",width:"100%",marginTop:"20px",fontFamily:"Playfair Display"},children:[e.jsx(h,{label:"Nombre Completo",value:r,onChange:o=>a(o.target.value),fullWidth:!0,margin:"normal",error:s.firstName,helperText:s.firstName?"Este campo es obligatorio":"",required:!0}),e.jsx(h,{label:"Correo Electrónico",value:i,onChange:o=>l(o.target.value),fullWidth:!0,margin:"normal",error:s.email,helperText:s.email?"Introduce un correo electrónico válido":"",required:!0}),e.jsx(J,{selectedDate:c,setSelectedDate:b,selectedTime:d,setSelectedTime:v}),e.jsx(h,{select:!0,label:"Motivo de la consulta",value:u,onChange:o=>g(o.target.value),fullWidth:!0,margin:"normal",error:s.selectedOption,helperText:s.selectedOption?"Este campo es obligatorio":"",required:!0,children:B.map(o=>e.jsx(k,{value:o,children:o},o))}),e.jsx(h,{select:!0,label:"Tipo de terapia",value:x,onChange:o=>R(o.target.value),fullWidth:!0,margin:"normal",error:s.selectedConsultationType,helperText:s.selectedConsultationType?"Este campo es obligatorio":"",required:!0,children:A.map(o=>e.jsx(k,{value:o,children:o},o))}),e.jsx(h,{label:"Comentarios",value:C,onChange:o=>N(o.target.value),fullWidth:!0,margin:"normal",multiline:!0,rows:4}),e.jsxs(ae,{children:[e.jsx(X,{control:e.jsx(Z,{checked:j,onChange:o=>O(o.target.checked),color:"primary"}),label:e.jsx(D,{sx:{fontFamily:"Playfair Display",fontStyle:"italic"},children:"He leído y acepto las políticas de privacidad"})}),s.privacyAccepted&&e.jsx($,{error:!0,children:"Este campo es obligatorio"})]}),e.jsx(ee,{type:"button",onClick:T,variant:"contained",sx:{width:"100%",fontSize:"1.2em",backgroundColor:"#4A6F5E",border:"2px solid #c0a080",borderRadius:"20px",color:"#F5EEDC",marginTop:"10px",transition:"background-color 0.3s ease, box-shadow 0.3s ease","&:hover":{backgroundColor:"#c0a080",color:"#305445"}},children:"Reservar"})]})}),e.jsx(w,{item:!0,xs:12,md:4,children:e.jsx(ce,{})})]})]}),e.jsx(L,{})]})};export{Fe as default};
