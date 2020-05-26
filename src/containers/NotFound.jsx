import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>No Encontrado</h1>
    <Link to="/">
      Regresa al home
    </Link>
  </>
);

export default NotFound;
