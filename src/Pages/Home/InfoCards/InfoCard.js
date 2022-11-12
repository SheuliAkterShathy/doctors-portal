import React from "react";

const InfoCard = ({card}) => {
    const {descriptions,name,icon,bgClass} = card;
  return (
    <div className={`card text-white lg:card-side bg-base-100 shadow-xl p-6 ${bgClass}`}>
      <figure>
        <img src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{descriptions}</p>
      </div>
    </div>
  );
};

export default InfoCard;
