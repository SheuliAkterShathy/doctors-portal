import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cravity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const servicesData=[
        {
            id:1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:fluoride
        },
        {
            id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:cravity
        },
        {
            id:3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon:whitening
        }
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                 <h3 className='text-primary uppercase text-xl font-bold'>Our Services</h3>
                 <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
               {
                servicesData.map(service=><Service service={service} key={service.id}></Service>)
               }
            </div>
        </div>
    );
};

export default Services;