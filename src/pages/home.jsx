import React from 'react';
import CardTemplate from '../templates/CardTemplate';
import CreateUser from '../templates/CreateUser';

const HomePage = () => {
  return (
    <div>
      <CreateUser />
      <CardTemplate />
    </div>
  );
};

export default HomePage;
