import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`,
            backgroundSize:'cover'
        }} className="p-6 dark:dark:text-gray-100 my-10">
        <form novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
            <h2 className="w-full text-primary text-center text-3xl font-bold leading-tight">Contact us</h2>
            <h1 className='text-4xl text-white text-center'>Stay Connected With Us</h1>
            <div>
                <label for="name" className="block mb-1 ml-1">Name</label>
                <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:dark:bg-gray-800" />
            </div>
            <div>
                <label for="email" className="block mb-1 ml-1">Email</label>
                <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:dark:bg-gray-800" />
            </div>
            <div>
                <label for="message" className="block mb-1 ml-1">Message</label>
                <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:dark:bg-gray-800"></textarea>
            </div>
            <div className='text-center'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </form>
    </section>
    );
};

export default Contact;