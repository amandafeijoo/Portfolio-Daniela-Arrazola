import{r as o,u as g,j as i,i as b,d}from"./index-CNaGaRjQ.js";import{B as u}from"./Button-DVr5tOOm.js";import{m as f}from"./proxy-DShHoDf5.js";const h=d.div`
  position: relative;
  width: 65%;
  min-height: 750px;
  height: auto;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 40px;
  border: 2px solid #d2b48c;
  border-radius: 8px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background-color: #f5eedc;

  @media (max-width: 768px) {
    width: 90%;
    min-height: 500px;
    margin-bottom: 80px;
    padding: 30px;
  }
`,v=d.div`
  position: relative;
  width: 45%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  border: 3px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    135deg,
    rgba(245, 245, 220, 0.7) 2%,
    rgba(34, 139, 34, 0.2) 100%,
    rgba(46, 139, 87, 0.7) 75%,
    rgba(245, 245, 220, 0.7) 0%
  );
  transition: transform 1.5s ease-out;
  will-change: transform;

  &.visible {
    transform: translateY(0);
  }
  &.hidden {
    transform: translateY(200px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    transform: none !important; /* 📌 Desactiva la animación en móviles */
  }
`,w=d.div`
  position: absolute;
  top: 0;
  left: 80px;
  width: 40%;
  margin: 0 auto;
  padding: 40px;
  height: auto;
  margin-top: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
  border: 3px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
    0 0 10px 4px rgba(34, 139, 34, 0.2), 0 0 15px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.2);
  transition: transform 1.5s ease-out;
  will-change: transform;
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  contain: layout style paint;

  &.visible {
    transform: translateY(0);
  }
  &.hidden {
    transform: translateY(-200px);
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    margin-top: 20px;
    left: 0;
    padding: 20px;
    transform: none !important; /* 📌 Desactiva la animación en móviles */
  }
`,L=()=>{const l=o.useRef(null),p=o.useRef(null),[e,m]=o.useState(window.innerWidth<768);o.useEffect(()=>{const s=()=>{m(window.innerWidth<768)};if(window.addEventListener("resize",s),!e){const a=l.current,n=p.current,t=new IntersectionObserver(c=>{c.forEach(r=>{r.isIntersecting?(r.target.classList.add("visible"),r.target.classList.remove("hidden")):(r.target.classList.add("hidden"),r.target.classList.remove("visible"))})},{threshold:.4});return a&&t.observe(a),n&&t.observe(n),()=>{window.removeEventListener("resize",s),a&&t.unobserve(a),n&&t.unobserve(n)}}return()=>window.removeEventListener("resize",s)},[e]);const x=g();return i.jsxs(h,{children:[i.jsx(v,{ref:l,className:e?"":"hidden",children:i.jsx("img",{src:b("daniela1.svg"),alt:"Daniela",style:{width:"100%",borderRadius:"15px"}})}),i.jsx(w,{ref:p,className:e?"":"hidden",children:i.jsx("div",{style:{padding:e?"10px":"20px",textAlign:"justify",background:"#f5eedc",borderRadius:"15px"},children:"Hola, soy Daniela Arrázola, y si estás aquí, es posible que estés buscando una forma de sentirte mejor, de entenderte más o de superar un momento difícil. Déjame decirte que no estás solo. Como psicóloga, mi misión es crear un espacio seguro, sin juicios y sin prisas donde podamos trabajar juntos."})}),i.jsx(u,{variant:"contained",component:f.button,whileHover:e?{}:{scale:1.1},whileTap:e?{}:{scale:.95},sx:{backgroundColor:"rgb(211, 190, 151)",color:"rgb(92, 116, 101)",fontSize:{xs:"1rem",sm:"1.2rem"},fontFamily:"Playfair Display",fontWeight:"500",padding:{xs:"10px 20px",sm:"12px 24px"},textTransform:"none",borderRadius:"30px",transition:"all 0.3s ease",border:"2px solid rgb(120, 150, 131)",marginLeft:{xs:"auto",sm:"520px"},marginRight:{xs:"auto",sm:"0"},display:"block",marginTop:{xs:"10px",sm:"20px"}},onClick:()=>x("/full-acerca"),children:"Leer más sobre mí"})]})};export{L as default};
