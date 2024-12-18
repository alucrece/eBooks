import React, { useContext, useState } from "react";
import "./Login.css";
import "../assets/okpng.png";
import image from "../assets/log.svg";
import image2 from "../assets/register.svg";
import { useLoginUserMutation } from "../services/appApi";
import { useSignupUserMutation } from "../services/appApi";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";

export default function Login() {

    const [toggleClass, setToggleClass] = useState("false");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { socket } = useContext(AppContext);
    const [loginUser, { isLoading, error }] = useLoginUserMutation();
    const [signupUser] = useSignupUserMutation();
    
    function handleLogin(e) {
        e.preventDefault();
        loginUser({ email, password }).then(({ data }) => {
            if (data) {
                socket.emit("new-user");
                navigate("/chat");
            }
        });
    }
    async function handleSignup(e) {
        e.preventDefault();
        signupUser({ name, email, password }).then(({ data }) => {
            if (data) {
                console.log(data);
                navigate("/chat");
            }
        });
    }
    const loginBtn = () => {
        setToggleClass(!toggleClass);
    };

  return (
    <div>
      <title>Sign in &amp; Sign up Form</title>
      <div className={`container ${toggleClass ? "sign-up-mode" : "sign-in-mode"}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form" onSubmit={handleLogin}>
              <h2 className="title">Sign in</h2>
              {error && <p className="alert alert-danger">{error.data}</p>}
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" />
            </form>
            <form action="#" className="sign-up-form" onSubmit={handleSignup}>
              <h2 className="title">Sign up</h2>
              {error && <p className="alert alert-danger">{error.data}</p>}
              <div className="input-field">
                <i className="fas fa-user" />
                <input type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
              </div>
              <input type="submit" className="btn" defaultValue="Sign up" />
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p> Please register to join our community and start chatting with your friends </p>
              <button className="btn transparent" id="sign-up-btn" onClick={loginBtn} >
                Sign up
              </button>
            </div>
            <img src= {image2} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p> Login to chat with your friends </p>
              <button className="btn transparent" id="sign-in-btn" onClick={loginBtn} >
                Sign in
              </button>
            </div>
            <img src= {image} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}