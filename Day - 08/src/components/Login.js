import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container" id="main">
      <div className="sign-in">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p>or use your account</p>
          <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
          <input type="password" name="pswd" placeholder="Password" value={password} onChange={handlePasswordChange} required />
          <a href="#">Forget your Password</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            {/* No need for separate button handling */}
            <button id="signIn">Sign In</button>
          </div>
          <div className="overlay-right">
            <h1>Hello, friend</h1>
            <p>Enter your personal details and start the journey with us</p>
            {/* No need for separate button handling */}
            <button id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
