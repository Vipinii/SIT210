// RegisterPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFirebase } from '../context/firebase';
import './RegisterPage.css';

const RegisterPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      alert('Password and confirm password do not match');
      return;
    }

    try {
      await firebase.signupUserWithEmailAndPassword(name, lastname, email, password);
      navigate('/Login');
    } catch (error) {
      alert('Error creating account: ' + error.message);
    }
  };

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate('/Login');
    }
  }, [firebase, navigate]);

  return (
    <div className="container" style={{ marginTop: 50, marginRight: 200, marginLeft: 30 }}>
      <header>Sign Up</header>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            First Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter your first name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputLastName" className="form-label">
            Last Name
          </label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
            type="text"
            className="form-control"
            id="exampleInputLastName"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Confirm Password
          </label>
          <input
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
