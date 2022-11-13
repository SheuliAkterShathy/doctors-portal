import React from "react";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl font-semibold text-secondary text-center">
          {name}
        </h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label
          disabled={slots.length === 0}
           onClick={()=>setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
