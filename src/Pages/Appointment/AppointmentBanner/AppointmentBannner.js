import React, { useState } from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";
import bg from "../../../assets/images/bg.png";

const AppointmentBannner = ({selectedDate,setSelectedDate}) => {
    
  return (
    <header style={{background: `url(${bg})`}}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="lg:w-1/2 rounded-lg shadow-2xl" alt="dentist chair"
          />
          <div className="shadow-md p-10 lg:mr-8">
            <DayPicker
             mode="single"
             selected={selectedDate}
             onSelect={setSelectedDate}
            />

          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBannner;
