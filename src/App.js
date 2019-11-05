import React from 'react';
import { Login } from './App/LoginComponet/Login';
import { Main } from './App/MainComponet/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={LoginView} />
          <Route path="/main" component={MainView} />
        </div>
      </div>
    </Router>
  );
}

const LoginView = () => (
  <div>
    <Login />
  </div>
);

const MainView = () => (
  <div>
    <Main />
  </div>
);

export default App;
