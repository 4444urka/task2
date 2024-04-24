import * as React from 'react'
import Header from './components/header';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './pages/homepage/homepage';
import SignUp from './pages/registration/registration';
import SignIn from './pages/login/login';


export default function App() {
  return(
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/SingUp' element={<SignUp />} />
          <Route path='/SingIn' element={<SignIn />} />
        </Routes>
      </Router>
  );
}