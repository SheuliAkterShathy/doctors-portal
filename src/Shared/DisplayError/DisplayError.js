import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const DisplayError = () => {
    const {logOut } = useContext(AuthContext);

    const handleLogOut = () =>{
      logOut()
      .then(()=>{})
      .catch(err=>console.log(err))
    }
    const error = useRouteError()
    return (
        <div>
            <h3 className="text-3xl text-red-500">Something went wrong</h3>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h2 className="text-3xl"> Please <button onClick={handleLogOut}>Sign Out</button></h2>
        </div>
    );
};

export default DisplayError;