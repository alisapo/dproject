import React, { useEffect } from 'react';

import Status from '../Status/Status';
import MainSection from '../MainSection/MainSection';
import FilterSection  from '../FilterSection/FilterSection';

import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'Dapplets Project';
  });

  return (
    <div className="App">
      <Status />
      <FilterSection />
      <MainSection />
    </div>
  );
}

export default App;
