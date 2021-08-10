import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import login from './components/login'

function App() {
  return (
    
      <Router>
        <section id="container" class="">
        <Header/>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Content}></Route>
          <Route path="/login" component={login}></Route>
        </Switch>
        </section>
      </Router>
    
  );
}

export default App;
