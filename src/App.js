import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Consulting from './components/pages/Consulting';
import Forge from './components/pages/Forge';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/home' exact component={Home} />
        <Route path='/consulting' component={Consulting} />
        <Route path='/forge' component={Forge} />
        <Route path='/products' component={Products} />
        <Route path='/services' component={Services} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
