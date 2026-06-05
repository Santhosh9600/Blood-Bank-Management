import { Link, useNavigate } from "react-router-dom";
import React,{useState} from "react";
import axios from "axios";

const Register = () => {

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [email,setEmail] = useState("");
const [phone_number,setPhoneNumber] = useState("");

const navigate = useNavigate();

const handleForm = (e) => {
  e.preventDefault();

  axios.post("http://localhost:3001/register",{
    username: username,
    password: password,
    email: email,
    phone_number: phone_number
  })
  .then((res)=>{
      alert("Register Successfully");
      navigate("/");
  })
  .catch((err)=>{
      console.log(err);
  });
};

return(
<>
<div className="login-container1">

<form className="login-form1" onSubmit={handleForm}>

<h2>Register</h2>

<div className="input-group1">
<label htmlFor="username">Username</label>
<input type="text" id="username" placeholder="Enter username" pattern="[A-Za-z]{5,}" value={username} onChange={(e)=>setUsername(e.target.value)}required/>
</div>

<div className="input-group1">
<label htmlFor="password">Password</label>
<input type="password" id="password" placeholder="Enter password" pattern="[1-9]{5,}" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
</div>

<div className="input-group1">
<label htmlFor="email">Email</label>
<input type="email" id="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
</div>

<div className="input-group1">
<label htmlFor="phone_number">Phone Number</label>
<input type="text" id="phone_number" placeholder="Enter Number" value={phone_number} onChange={(e)=>setPhoneNumber(e.target.value)}required/>
</div>

<button className="button1" type="submit">Sign Up</button>

</form>

</div>

<div className="footer-register">Blood Sharing Portal</div>
</>
)
}

export default Register;
