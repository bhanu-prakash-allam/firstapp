import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
  const handleLogout = () => {
    window.localStorage.clear();
  };

  return (
    <Link to="/login" className="btn btn-primary btn-sm mx-2" onClick={handleLogout}>
      Logout
    </Link>
  );
}

export default Logout