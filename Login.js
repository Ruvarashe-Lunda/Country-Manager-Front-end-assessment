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