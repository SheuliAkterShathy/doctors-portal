import React, { useState } from 'react';
import AppointmentBannner from '../AppointmentBanner/AppointmentBannner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBannner
             selectedDate={selectedDate}
             setSelectedDate={setSelectedDate}
            ></AppointmentBannner>
            <AvailableAppointments
            selectedDate={selectedDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;