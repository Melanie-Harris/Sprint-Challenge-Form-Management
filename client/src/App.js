import React from 'react';
// import {ProtectedRoute} from '../../BE/routes/protectedRoutes';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Registration from './pages/Registration';
import AfterRegPage from './pages/AfterRegPage';
import PrivateRoute from './pages/PrivateRoute';
import './App.css';

function App() {
  return (
    <div>
    <div>
      <Route path="/" component={Registration} />
      <PrivateRoute path="/AfterRegPage" component={AfterRegPage} />
    </div>
    </div>
  );
}

export default App;
