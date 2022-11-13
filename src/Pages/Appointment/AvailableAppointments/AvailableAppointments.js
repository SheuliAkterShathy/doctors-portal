import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [appointmentOptions,setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect( ()=>{
        fetch('appointmentOptions.json')
        .then(res=>res.json())
        .then(data=>setAppointmentOptions(data))
    },[])

    return (
        <section className='my-20'>
            <p className='text-secondary text-center font-bold text-xl mb-9'>Available Appointments on {format(selectedDate, 'PP')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                appointmentOptions.map(option=><AppointmentOption 
                key={option._id}
                appointmentOption={option}
                setTreatment={setTreatment}
                ></AppointmentOption>)
              }
            </div>
            { treatment && <BookingModal treatment={treatment} 
            selectedDate={selectedDate}
            setTreatment={setTreatment}
             ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;