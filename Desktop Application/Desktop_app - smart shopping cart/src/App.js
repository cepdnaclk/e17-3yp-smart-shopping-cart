import {createContext, useReducer} from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Rout from './components/Rout'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {initialState, reducer} from './reducer/useReducer';

  export const userContext = createContext();

const App = () => {


    const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <Router>
      
        <section id="container" class="">
       
          <userContext.Provider value={{state, dispatch}}>
          
        {/* <Navigation/>
          <Header/> */}
          <Rout/>
          </userContext.Provider>
     
          
     
        </section>
        
      </Router>
    
  );
}

export default App;
