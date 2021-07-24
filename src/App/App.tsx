import React, { useEffect } from 'react';

import Status from '../Status/Status';
import MainSection from '../MainSection/MainSection';

import './App.scss';

function App() {
  useEffect(() => {
    document.title = 'Dapplets Project';
  }, []);

  return (
    <div className="App">
      <Status />
      <MainSection />
    </div>
  );
}

export default App;
