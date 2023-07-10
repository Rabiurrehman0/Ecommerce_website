

import React from 'react';

const Page404 = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '50px',
  };

  const headingStyle = {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
  };

  const messageStyle = {
    fontSize: '18px',
    color: '#777',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>404 - Page Not Found</h1>
      <p style={messageStyle}>The page you are looking for does not exist.</p>
    </div>
  );
};

export default Page404;


