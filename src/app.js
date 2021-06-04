import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ToDo from './components/todo/todo.js';
import Header from './components/header.js';
import Settings from './components/settings.js';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ToDo} />
        <Route exact path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}