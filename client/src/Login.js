import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {

const navigate = useNavigate();

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();   

  alert("Login Successfully");

  if (username === "admin") {
    navigate("/User");  
  } else {
    navigate("/Home");   
  }
};

return (
<>
<div className="login-container">

<form className="login-form" onSubmit={handleSubmit}>
  <h2>Login</h2>

  <div className="input-group">
    <label>Username</label>
    <input 
      type="text"
      placeholder="Enter username"
      pattern="[A-Za-z]{5,}"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      required
    />
  </div>

  <div className="input-group">
    <label>Password</label>
    <input
      type="password"
      placeholder="Enter password"
      pattern="[1-9]{5,}"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>

  <button className="button" type="submit">Login</button>

  <p className="signup-link">
    Don't have an account? <a href="/Register">Sign Up</a>
  </p>

</form>

</div>

<div className="footer-login">
  Blood Sharing Portal
</div>

</>
);
}

export default Login;
