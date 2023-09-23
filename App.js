import {useEffect, useState} from "react";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import{app} from "./firebase";
import Background from "./Background";
import SignupPage from "./webpages/Signup";
import SigninPage from "./webpages/Signin";
import "./App.css";

const auth=getAuth (app);
function App() {
  

  const [user, setUser]=useState(null);

   useEffect(()=>{
      onAuthStateChanged(auth,user =>{
        if(user){
          // logged in
           setUser(user);
         console.log("hey, user logged in", user);
         }else{
        //not logged in

        console.log("You need to login");
        setUser(null);
        }
      });

   }, []);

    if (user==null){
      return (
        <div className="APP">

        <SignupPage /> 
        <SigninPage/>
        </div>
          );
        }

    else{
      return (
        <div className="APP">
        <nav className="navbar bg-light-blue" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand text-attractive font-weight-bold">DEV@Deakin</a>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ background: 'white', height: '35px', width: '1200px' }} />
                <span style={{ marginRight: '35px' }}></span>
                <button className="btn btn-outline-success text-white font-weight-bold btn-3d" type="submit">Login</button>
                <span style={{ marginRight: '10px' }}></span>
                <button onClick ={()=>signOut(auth)}className="btn btn-outline-success text-white font-weight-bold btn-3d" type="submit">LogOut</button>
              </form>
            </div>
          </nav>
      
       <Background/>
        </div>
          );
    }
     
      
   


}

export default App;
