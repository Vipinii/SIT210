import {Routes, Route} from "react-router-dom";
import {useState} from 'react'
import { useFirebase } from './context/firebase';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegisterPage from "./Pages/Register";
import LoginPage from "./Pages/Login";
import Navigation from "./Pages/Navigation";

function App() {

  return <Routes>
  <Route path="/" element={<Navigation/>}/>
  <Route path="/Register" element={<RegisterPage/>}/>
  <Route path="/Login" element={<LoginPage/>}/>
  </Routes>



}

export default App;
