import React from 'react';
import Rotas from './routes';
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

function Web() {
  return (
    <div className='Web'>
      <ToastContainer autoClose={3000} />
      <Rotas />
    </div>
  );
}


export default Web;
