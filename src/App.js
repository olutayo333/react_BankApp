import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';
import Error404 from './components/Error404';
import Homepage from './components/Homepage';
import Signin from './components/Signin';
//import Signup from './components/Signup';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Testing from './components/Testing'; import Navbar from './components/Navbar';
import Example from './components/Example';

function App() {
  
  return (
    <>
    <Router>

        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/card' element={<Cards/>}/>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/*' element={<Error404/>}/>
            <Route path='/testing' element={<Testing/>}/>
            <Route path='/example' element={<Example/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
