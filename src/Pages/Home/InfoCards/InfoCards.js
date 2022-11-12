import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData=[
       {
         id:1,
         name:'Opening Hours',
         descriptions: 'Open 9.00am to 5.00pm everyday' ,  
         icon:clock,
         bgClass:'bg-gradient-to-r from-primary to-secondary'
       },
       {
         id:2,
         name:'Our Locations',
         descriptions: 'Mirpur10,Dhaka,Bangladesh',  
         icon:marker,
         bgClass:'bg-accent'
       },
       {
         id:3,
         name:'Contact Us',
         descriptions: '+8801771196084' ,  
         icon:phone,
         bgClass:'bg-gradient-to-r from-primary to-secondary'
       },
    ]

    return (

        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card=><InfoCard card={card} key={card.id}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;