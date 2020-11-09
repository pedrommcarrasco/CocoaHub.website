import React from 'react';
import Navbar from "components/Navbar/Navbar";
import NewsList from "components/News/NewsList";
import EditionsList from "components/Editions/EditionsList";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar /> 
      <Switch>
        <Route path="/news">
          <NewsList />
        </Route>
        <Route path="/editions">
          <EditionsList />
        </Route>
        <Route path="/">
          <NewsList />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
