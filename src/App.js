import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, HashRouter as Router } from 'react-router-dom';
import AppContainer from './app/root-routes/container'

function App() {
  return (
    <Router>
      <AppContainer />
    </Router>
  );
}

export default App;
