import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {
  const { name, slots } = treatment; //treatmet is equal ti appointmentOption just different name
  const date = format(selectedDate, "PP");

  const handleBooking = event =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
        selectedDate: date,
        treatmentName:treatment.name,
        patient: name,
        slot,
        email,
        phone
    }

    setTreatment(null)
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h3 className="text-lg font-bold">{name}</h3>

          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-3">
            <input
              value={date}
              
              type="text"
              disabled
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
             
                {
                  slots.map((slot, i)=> <option value={slot} key={i} >{slot}</option>)
                }
              
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your phone"
              className="input input-bordered w-full"
            />
            <input
              className="btn-accent p-3 rounded-md"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
