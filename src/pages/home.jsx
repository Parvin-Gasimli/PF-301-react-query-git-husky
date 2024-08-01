import React from 'react';
import CardTemplate from '../templates/CardTemplate';
import CreateUser from '../templates/CreateUser';

const HomePage = () => {
  return (
    <div>
      <CreateUser iseEdit={false} data={[]} />
      <CardTemplate />
    </div>
  );
};

export default HomePage;
