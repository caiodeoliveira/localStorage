import React from "react";
import "../../styles.css";

export const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <div className="form-bg">
        <div className="form-login">
          <label htmlFor="login" className="label-login">
            NickName
          </label>
          <input type="text" name="" id="login" placeholder="Enter your name" />
        </div>
        <div className="form-password">
          <label htmlFor="password" className="label-password">
            Password
          </label>
          <input
            type="text"
            name=""
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <input type="button" value="Submit" className="submit-btn" />
      </div>
    </>
  );
};
