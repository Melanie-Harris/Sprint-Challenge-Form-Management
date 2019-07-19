import React from 'react';
import {ProtectedRoute} from '../../BE/routes/protectedRoutes';
import { Route } from "react-router-dom";
import Registration from '../../BE/pages/Registration';
import AfterRegPage from '../../BE/pages/AfterRegPage';
import './App.css';

function App() {
  return (
    <div>
      <Route path="/" component={Registration} />
      <ProtectedRoute path="/AfterRegPage" component={AfterRegPage} />
    </div>
  );
}

export default App;
