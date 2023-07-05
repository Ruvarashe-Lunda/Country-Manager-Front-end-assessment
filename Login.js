import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    setIsButtonDisabled(!validateForm(value, password));
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    setIsButtonDisabled(!validateForm(username, value));
  };

  const validateForm = (username, password) => {
    // Check if username and password are not null
    if (username && password) {
      // Check password length and complexity requirements
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      return passwordRegex.test(password);
    }
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Logged in!');
  };

  const handleLogout = () => {
    // Perform logout logic here
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit" disabled={isButtonDisabled}>
          Login
        </button>
      </form>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LoginForm;