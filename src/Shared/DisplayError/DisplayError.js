import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const DisplayError = () => {
    const {logOut } = useContext(AuthContext);
      const navigate = useNavigate();
    const handleLogOut = () =>{
      logOut()
      .then(()=>{
        navigate('/login')
      })
      .catch(err=>console.log(err))
    }
    const error = useRouteError()
    return (
        <div className='mx-auto'>
            <h3 className="text-3xl text-red-500">Something went wrong</h3>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h2 className="text-3xl"> Please <button className='btn btn-primary' onClick={handleLogOut}>Sign Out</button></h2>
        </div>
    );
};

export default DisplayError;