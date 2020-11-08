import React from 'react';
import Navbar from "components/Navbar/Navbar";
import NewsList from "components/News/NewsList";

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <NewsList />
    </div>
  );
}

export default App;
