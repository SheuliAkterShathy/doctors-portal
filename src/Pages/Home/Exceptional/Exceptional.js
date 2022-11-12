import React from "react";
import treatment from '../../../assets/images//treatment.png'

const Exceptional = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-24">
      <figure>
        <img className="lg:w-1/2" src={treatment}alt="" />
      </figure>
      
      <div className="card-body lg:w-1/2 h-2/3">
        <h2 className="card-title text-6xl">Exceptional Dental Care, on Your Terms</h2>
        <p className="">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
        
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary w-32 mt-2">Get Started</button>
    
     
      </div>
    </div>
  );
};

export default Exceptional;
