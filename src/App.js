
    import React ,{Component} from 'react';
    import './App.css';
    import Header from './components/Header/Header.js';
    import Nav from './components/Nav/Nav';
    import Profile from './components/Profile/Profile';
    import Dialogs from './components/Dialogs/Dialogs';
    import {BrowserRouter,Route} from 'react-router-dom';
    const App = () => {
      return (
        <BrowserRouter>
        <div className="app-wraper">
       <Header/>
       <Header/>
       <Nav/>
        <div className="app-wraper-content">
        <Route path="/Profile" component={Profile} />
        <Route path="/Dialogs" component={Dialogs} />
      
      </div>
      </div>
      </BrowserRouter>
      );
    }
    
    
    
    
    



export default App;
