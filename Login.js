import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    console.log('Logged in:', username, password);
  };

  const validateInputs = () => {
    setIsButtonDisabled(username.length === 0 || password.length === 0);
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} onKeyUp={validateInputs} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} onKeyUp={validateInputs} />
      <button onClick={handleLoginClick} disabled={isButtonDisabled}>
        Login
      </button>
    </div>
  );
};

export default Login;

document.addEventListener("DOMContentLoaded", function () {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginButton = document.getElementById("login-btn");
    const menuTab = document.getElementById("menu-tab");
    const logoutButton = document.getElementById("logout-btn");
  
    // Enable/disable login button based on input validity
    function updateLoginButton() {
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      const isValidUsername = username.trim().length > 0;
      const isValidPassword =
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /\d/.test(password) &&
        /[^a-zA-Z0-9]/.test(password);
  
      loginButton.disabled = !(isValidUsername && isValidPassword);
    }
  
    // Handle login button click
    loginButton.addEventListener("click", function () {
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // Perform login validation here
      if (/* perform your login validation */) {
        // Successful login, show menu tab and hide login form
        menuTab.style.display = "block";
        document.getElementById("login-form").style.display = "none";
      } else {
        alert("Invalid username or password. Please try again.");
      }
    });
  
    // Handle logout button click
    logoutButton.addEventListener("click", function () {
      // Clear input fields
      usernameInput.value = "";
      passwordInput.value = "";
  
      // Hide menu tab and show login form
      menuTab.style.display = "none";
      document.getElementById("login-form").style.display = "block";
    });
  
    // Add input event listeners to check input validity on every keystroke
    usernameInput.addEventListener("input", updateLoginButton);
    passwordInput.addEventListener("input", updateLoginButton);
  });