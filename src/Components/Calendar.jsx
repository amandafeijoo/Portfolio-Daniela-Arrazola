import React, { useState } from "react";
import { TextField, MenuItem } from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  PickersDay,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "@fontsource/playfair-display";
import { styled } from "@mui/material/styles";

const StyledPickersDay = styled(PickersDay)(({ theme, isDisabled }) => ({
  ...(isDisabled && {
    backgroundColor: "#d2b48c !important",
    color: "rgba(0, 0, 0, 0.38) !important",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
}));

const Calendar = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
}) => {
  const [availableTimes, setAvailableTimes] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const day = date.getDay();
    let times = [];

    if (day >= 1 && day <= 4) {
      // Monday to Thursday
      times = [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
      ];
    } else if (day === 5) {
      // Friday
      times = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];
    }

    setAvailableTimes(times);
    setSelectedTime("");
  };

  const shouldDisableDate = (date) => {
    const day = date.getDay();
    // Disable Saturday (6) and Sunday (0)
    return day === 0 || day === 6;
  };

  const renderDay = (day, selectedDate, isInCurrentMonth, dayComponent) => {
    const isDisabled = shouldDisableDate(day);

    return <StyledPickersDay {...dayComponent.props} isDisabled={isDisabled} />;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Selecciona una fecha"
        value={selectedDate}
        onChange={handleDateChange}
        shouldDisableDate={shouldDisableDate}
        renderDay={renderDay}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            margin="normal"
            InputLabelProps={{ style: { fontFamily: "Playfair Display" } }}
            InputProps={{ style: { fontFamily: "Playfair Display" } }}
          />
        )}
      />
      {availableTimes.length > 0 && (
        <TextField
          select
          label="Selecciona una hora"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ style: { fontFamily: "Playfair Display" } }}
          InputProps={{ style: { fontFamily: "Playfair Display" } }}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                style: {
                  fontFamily: "Playfair Display",
                },
              },
            },
          }}
        >
          {availableTimes.map((time) => (
            <MenuItem
              key={time}
              value={time}
              sx={{ fontFamily: "Playfair Display" }}
            >
              {time}
            </MenuItem>
          ))}
        </TextField>
      )}
    </LocalizationProvider>
  );
};

export default Calendar;
