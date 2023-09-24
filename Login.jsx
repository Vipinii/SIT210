import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from "../context/firebase";
import './Login.css'; 
const LoginPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login a user");
    const result = await firebase.signinUserWithEmailAndPass(email, password);
    console.log("successful", result);
  };
 
    
    const clickHandlerr = () => {
      navigate('/Register'); // Navigate to the Login page when the button is clicked
    };
    const clickHandlerhome = () => {
      navigate('/'); // Navigate to the Login page when the button is clicked
    };
  return (
    <div className="wrapper">
      <header>Log in</header>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="input-area">
            <i className="icon">✉</i>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email" id="exampleInputEmail1" placeholder="Email address" />
          </div>
        </div>
        <div className="field">
          <div className="input-area">
            <i className="icon">🔒</i>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password" id="exampleInputPassword1" placeholder="Password" />
          </div>
        </div>
        <button className="btn btn-outline-success text-white font-weight-bold btn-3d" type="submit" onClick={clickHandlerhome}>Log In</button>
      </form>
      <div className="sign-txt" >Not a member? <a href="#" onClick={clickHandlerr}>Signup now</a></div>
    </div>
  );
};

export default LoginPage;
