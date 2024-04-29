import * as React from 'react'
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './pages/homepage/homepage';
import SignUp from './pages/userRegistration/userRegistration';
import SignIn from './pages/login/login';
import CompanyRegistration from './pages/companyRegistration/companyRegistration';


export default function App() {
  return(
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/SingUp' element={<SignUp />} />
          <Route path='/SingIn' element={<SignIn />} />
          <Route path='/companyRegister' element={<CompanyRegistration />} />
        </Routes>
      </Router>
  );
}