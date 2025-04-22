import { useEffect } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import {
  FaLock,
  FaCalendarCheck,
  FaUndo,
  FaClock,
  FaBrain,
  FaUserShield,
  FaCreditCard,
  FaCalendarAlt,
} from "react-icons/fa";
import "@fontsource/playfair-display";
import { useState } from "react";

const faqs = [
  {
    question: "¿Todo lo que hable en terapia es confidencial?",
    answer:
      "Nuestro código deontológico protege tu información. Salvo que tu vida o la de terceros esté en peligro.",
    icon: <FaLock />,
  },
  {
    question: "¿Qué debo hacer para agendar una cita?",
    answer:
      "Debes rellenar el formulario con tu horario disponible y una vez confirmado, pagar por adelantado la sesión.La unica forma que tengo de agendarte una hora es con el pago realizado. ",
    icon: <FaCalendarCheck />,
  },
  {
    question: "¿Tengo derecho a reembolso después de realizar el pago?",
    answer:
      "Puedes cancelar o cambiar tu sesión con 48h de antelación en días laborables para obtener el reembolso.",
    icon: <FaUndo />,
  },
  {
    question: "¿Qué pasa si llego tarde a la sesión?",
    answer:
      "Se dan de cortesía 15 minutos de espera y en ese caso dispones de los minutos restantes que corresponden, no puedo extender la hora porque hayas llegado tarde, debo atender al siguiente paciente. Si por el contrario no recibo ningún aviso y no apareces, doy por anulada la sesión.",
    icon: <FaClock />,
  },
  {
    question: "¿Con qué frecuencia debo asistir a terapia?",
    answer:
      "Me adapto 100% a tu situación personal y es algo que podemos abordar en sesión. Sin embargo, al empezar se recomienda una vez por semana, máximo 1 vez cada 2 semanas de cara al vínculo terapeutico y a los resultados que te gustaría alcanzar. 1 vez al mes no es efectivo, esta científicamente comprobado de cara a empezar un proceso terapeutico.",
    icon: <FaBrain />,
  },
  {
    question: "¿Durante cuánto tiempo tengo que hacer terapia?",
    answer:
      "El fin último de una terapia psicológica es que no tengas dependencia del terapeuta. NO puedo decirte cuanto tiempo durara tu proceso porque eso es personal. Puede que poco, mucho, el objetivo es que llegue el momento en que dejes de necesitarlo y puedas volar con las herramientas que has ido adquiriendo en terapia.",
    icon: <FaClock />,
  },
  {
    question: "¿Es confidencial todo lo que comparto en terapia?",
    answer:
      "¡Absolutamente! Tu intimidad es mi prioridad. El Código Deontológico garantiza que toda tu información se mantenga en estricta confidencialidad, salvo en situaciones donde tu vida o la de otros esté en riesgo.",
    icon: <FaUserShield />,
  },
  {
    question: "¿Cómo puedo agendar una cita?",
    answer:
      "Es muy fácil. Simplemente completa el formulario especificando dia y hora junto con el motivo de consulta. Una vez que te confirme la disponibilidad solicitada, es necesario realizar el pago por adelantado. Este paso es fundamental para asegurar tu lugar, ya que solo puedo agendarte una vez que el pago esté confirmado.",
    icon: <FaCalendarCheck />,
  },
  {
    question: "¿Tengo derecho a reembolso después de realizar el pago?",
    answer:
      "Entiendo que a veces surgen imprevistos. Si necesitas cambiar o cancelar tu sesión, asegúrate de hacerlo con al menos 48 horas de antelación en días laborables. Así, podrás tener derecho al reembolso y reprogramar tu cita para un momento que te venga mejor.",
    icon: <FaCreditCard />,
  },
  {
    question: "¿Qué sucede si llego tarde a la sesión?",
    answer:
      "Siempre hay margen para la cortesía. Te esperaré hasta 15 minutos, si durante este tiempo me comunicas tu retraso, podrás disfrutar de los minutos restantes de tu sesión. Si no recibo aviso de tu llegada, la sesión se considerará anulada.",
    icon: <FaClock />,
  },
  {
    question: "¿Con qué frecuencia debo asistir a terapia?",
    answer:
      "Cada persona es única y mi enfoque es adaptarme a tus necesidades. Sin embargo, al inicio del proceso, se recomienda una sesión semana. Esto fortalece nuestro vínculo terapéutico y potencia los resultados que deseas alcanzar. Se ha demostrado científicamente que las sesiones de 1 vez al mes no son efectivas.",
    icon: <FaCalendarAlt />,
  },
  {
    question: "¿Cuánto tiempo debo hacer terapia?",
    answer:
      "El objetivo de la terapia es que puedas volar con las herramientas que vayas adquiriendo durante el proceso y no dependas de mí a largo plazo. Si hemos finalizado la terapia y deseas volver, puedes hacerlo cuando lo necesites. Sin embargo, no puedo predecir la duración de tu proceso, ya que es completamente personal y variable.",
    icon: <FaBrain />,
  },
];

const FAQSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        maxWidth: "900px",
        margin: "auto",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        borderRadius: "10px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "rgba(48, 84, 69, 0.6)",
          fontFamily: "Playfair Display",
          zIndex: 10,
          position: "relative",
          width: "100%",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "3.5em",
          marginTop: "20px",
          marginBottom: "50px",
        }}
      >
        Preguntas Frecuentes (FAQ)
      </Typography>

      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              marginBottom: "10px",
              boxShadow:
                expanded === index
                  ? "0 5px 15px rgba(0,0,0,0.2)"
                  : "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#4CAF50" }} />}
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "bold",
                fontFamily: "Playfair Display",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ color: "#4CAF50", fontSize: "1.5rem" }}>
                  {faq.icon}
                </Box>
                <Typography sx={{ fontFamily: "Playfair Display" }}>
                  {faq.question}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontFamily: "Playfair Display" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );
};

export default FAQSection;
