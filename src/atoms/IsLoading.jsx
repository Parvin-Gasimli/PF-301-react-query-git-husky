import React from 'react';

const IsLoading = () => {
  return (
    <div className="fixed left-0 right-0 flex items-center justify-center h-screen w-screen">
      <img
        class="w-20 h-20 animate-spin"
        src="https://www.svgrepo.com/show/448500/loading.svg"
        alt="Loading icon"
      ></img>
    </div>
  );
};

export default IsLoading;
