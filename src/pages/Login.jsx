import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>
        Inicia sesión en tu cuenta
      </h2>
      <form className='mt-8 max-w-md'>
        <div>

            <button onClick={() => loginWithRedirect()} type='submit' 
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
            {/* className='rounded-full py-3 px-6 bg-indigo-500 p-2 my-4 text-white shadow-md hover:bg-indigo-700'> */}
                Iniciar Sesion
            </button>

        </div>
      </form>
    </div>
  );
};

export default Login;



