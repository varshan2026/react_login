import { useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import LoginInput from './components/login_input'
import Success from './components/success'
import Fail from './components/fail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginInput />} />
          <Route path="/success" element={<Success />} />
          <Route path="/fail" element={<Fail />} />
        </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
