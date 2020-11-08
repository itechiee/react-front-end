import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound(props) {
  return (
    <div>
      <h3>404 - Page not found</h3>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  );
} 

export default PageNotFound;