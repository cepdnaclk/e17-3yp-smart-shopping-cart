import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Rout from './components/Rout'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    
      <Router>
        <section id="container" class="">
        <Header/>
        <Navigation/>
        <Rout/>
        </section>
      </Router>
    
  );
}

export default App;
