import React from 'react';
import {Route} from "react-router-dom";
import Registration from './pages/Registration';
import AfterRegPage from './pages/AfterRegPage';
import PrivateRoute from './components/PrivateRoute';
import AddRegistrant from './pages/AddRegistrant';

// import Meals from './pages/AfterRegPage'
import './App.css';

function App() {
  return (
    <div>
    
    <div>
      <Route exact path="/" component={Registration} />
      <PrivateRoute path="/AfterRegPage" component={AfterRegPage} />
      <PrivateRoute path="/AddRegistrant" component={AddRegistrant} />
    </div>
    </div>
  );
}

export default App;
