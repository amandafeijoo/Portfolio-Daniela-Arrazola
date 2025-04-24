import { useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import { Typography, Divider, Card, Button } from "@mui/material";
import Swal from "sweetalert2";
import { FaCheck, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { format } from "date-fns";

const TransparentBackground = styled.div`
  background: rgba(211, 166, 166, 0.15);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  padding: 8px 16px;
  display: inline-block;
`;

const StyledCard = styled(Card).attrs({
  elevation: 0,
  variant: "outlined",
})`
  && {
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05)
    ) !important;
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    color: #4b3f2f;
  }
`;

const ApproveButton = styled(Button)`
  background-color: #a1ad7f !important;
  color: #4b3f2f !important;
  font-weight: bold !important;
  border-radius: 25px !important;
  padding: 8px 20px !important;
  text-transform: none !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;

  &:hover {
    background-color: #8b976f !important;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #cbbf9b !important;
  color: #4b3f2f !important;
  font-weight: bold !important;
  border-radius: 25px !important;
  padding: 8px 20px !important;
  text-transform: none !important;
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;

  &:hover {
    background-color: #b7aa85 !important;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const TestimoniosAdmin = () => {
  const [testimoniosPendientes, setTestimoniosPendientes] = useState([]);
  const [testimoniosAprobados, setTestimoniosAprobados] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/testimonios/`)
    .then((res) => res.json())
      .then((data) => {
        setTestimoniosAprobados(data.aprobados || []);
        setTestimoniosPendientes(data.pendientes || []);
      })
      .catch((error) => {
        console.error("Error cargando testimonios:", error);
      });
  }, []);

  const handleApproveTestimonial = (id) => {
   fetch(`${API_URL}/api/testimonios/${id}/aprobar/`, {
      method: "PATCH",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo aprobar el testimonio");
        }
        return response.json();
      })
      .then(() => {
        const aprobado = testimoniosPendientes.find((t) => t.id === id);
        setTestimoniosPendientes((prev) => prev.filter((t) => t.id !== id));
        setTestimoniosAprobados((prev) => [...prev, aprobado]);
        Swal.fire({
          icon: "success",
          title: "Testimonio aprobado",
          text: "El testimonio ha sido aprobado correctamente.",
          confirmButtonColor: "#b07241",
        });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo aprobar el testimonio. Inténtalo de nuevo.",
          confirmButtonColor: "#d33",
        });
      });
  };

  const handleDeleteTestimonial = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`${API_URL}/api/testimonios/${id}/eliminar/`,
          {
            method: "DELETE",
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("No se pudo eliminar el testimonio.");
            }
            return response.json();
          })
          .then(() => {
            setTestimoniosPendientes((prev) => prev.filter((t) => t.id !== id));
            setTestimoniosAprobados((prev) => prev.filter((t) => t.id !== id));
            Swal.fire({
              icon: "success",
              title: "Testimonio eliminado",
              text: "El testimonio ha sido eliminado correctamente.",
              confirmButtonColor: "#b07241",
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Hubo un problema al eliminar el testimonio.",
              confirmButtonColor: "#d33",
            });
            console.error("Error eliminando testimonio:", error);
          });
      }
    });
  };

  return (
    <>
      <Divider sx={{ margin: "30px 0" }} />
      <TransparentBackground>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2, color: "rgb(55, 30, 10)" }}
        >
          ✅ Testimonios Aprobados
        </Typography>
      </TransparentBackground>

      {testimoniosAprobados.map((t) => (
        <StyledCard
          key={t.id}
          style={{ padding: "16px", marginBottom: "16px" }}
        >
          <Typography fontWeight="bold" color="#4b3f2f">
            {t.nombre_cliente}
          </Typography>
          <Typography variant="body2" color="rgb(100, 54, 17)">
            ✉️ {t.email_cliente}
          </Typography>
          <Typography variant="body2" color="rgb(40, 34, 29)">
            🗓️ {format(new Date(t.created_at), "dd/MM/yyyy HH:mm")}
          </Typography>
          <br />
          <Typography variant="body2" color="rgb(70, 40, 20)">
            {t.consentimiento
              ? "✔️ Consentimiento otorgado"
              : "❌ Sin consentimiento"}
          </Typography>

          <Typography sx={{ mt: 1 }}>{t.mensaje}</Typography>
        </StyledCard>
      ))}

      <Divider sx={{ margin: "30px 0" }} />
      <TransparentBackground>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ mb: 2, color: "rgb(100, 54, 17)" }}
        >
          🕒 Testimonios Pendientes
        </Typography>
      </TransparentBackground>
      {testimoniosPendientes.map((t) => (
        <StyledCard
          key={t.id}
          style={{ padding: "16px", marginBottom: "16px" }}
        >
          <Typography fontWeight="bold" color="#4b3f2f">
            {t.nombre_cliente}
          </Typography>
          <Typography variant="body2" color="rgb(100, 54, 17)">
            ✉️ {t.email_cliente}
          </Typography>
          <Typography variant="body2" color="rgb(40, 34, 29)">
            🗓️ {format(new Date(t.created_at), "dd/MM/yyyy HH:mm")}
          </Typography>
          <br />
          <Typography variant="body2" color="rgb(70, 40, 20)">
            {t.consentimiento
              ? "✔️ Consentimiento otorgado"
              : "❌ Sin consentimiento"}
          </Typography>

          <Typography sx={{ mt: 1 }}>{t.mensaje}</Typography>

          <ButtonGroup>
            <ApproveButton onClick={() => handleApproveTestimonial(t.id)}>
              <FaCheck /> Aprobar
            </ApproveButton>
            <DeleteButton onClick={() => handleDeleteTestimonial(t.id)}>
              <FaTrash /> Eliminar
            </DeleteButton>
          </ButtonGroup>
        </StyledCard>
      ))}
    </>
  );
};

export default TestimoniosAdmin;
