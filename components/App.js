// components/App.js
import React from 'react';
import Header from './Header';
import Mainsection from './MainSection';
import Opportunities from './Opportunities';


function App() {
  return (
    <div className="App">
      <Header />
      <Mainsection />
      <Opportunities />
    </div>
  );
}

export default App;