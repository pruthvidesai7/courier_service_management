import React from 'react';
import './css/App.css';
import { useNavigate } from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  
  const GoToSignUp = () =>{
    navigate("/register");
  }

  return (<>
  <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="text-center">
          Not Registered?{" "}
          <span className="link-primary" onClick={GoToSignUp}>
            Sign Up
          </span>
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-center mt-2">
        <a href="#"> Forgot password?</a>
        </p>
      </div>
    </form>
  </div>
  </>);
}

export default Login;