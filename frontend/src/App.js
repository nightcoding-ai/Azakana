import React,{ Component} from 'react';
import Nav from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Statistiques from './components/pages/Statistiques';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Patch_notes from './components/pages/Patch_notes';
import Team from './components/pages/Team';
import Champions from './components/pages/Champions';
import E_sport from './components/pages/E_sport';
import Connected from './components/pages/Connected';
import Cookies from 'js-cookie';

class App extends React.Component{
  render(){
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/statistiques' component={Statistiques} />
          <Route path='/team' component={Team} />
          <Route path='/patch-notes' component={Patch_notes} />
          <Route path='/champions' component={Champions} />
          <Route path='/e-sport' component={E_sport} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/connected' component={Connected} />
        </Switch>
      </Router>
    </>

  );
 }
}


export default App;
