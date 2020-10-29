import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage'
import RegisterPage from './pages/RegisterPage';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>

         <Route path="/" exact>
          <Home />
         </Route>

         <Route  path="/register">
          <RegisterPage />
         </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
