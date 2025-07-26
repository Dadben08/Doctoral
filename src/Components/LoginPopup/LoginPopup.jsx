import React, { useState } from "react";
import "./LoginPopup.css";
import cross_icon from "../../assets/cross_icon.png";
import { useNavigate } from "react-router-dom";

const LoginPopup = () => {
  const navigate = useNavigate(); // Use navigate for programmatic navigation
  const [currState, setCurrState] = useState("Register"); // Default to Register for new student registration
  const [data, setData] = useState({
    studentName: "",
    email: "",
    password: "",
    studentId: "", // For new student registration
    gradeLevel: "", // For new student registration
  });

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(currState === "Register" ? "Registration Data" : "Login Data", data);
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={onSubmitHandler}>
        <div className="login-popup-title">
          <h2>{currState === "Register" ? "Student Registration" : "Student Login"}</h2>
          <img
            src={cross_icon}
            alt="Close"
            onClick={() => navigate("/")} // Navigate back to homepage on close
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Register" && (
            <>
              <input
                name="studentName"
                type="text"
                placeholder="Your Full Name"
                value={data.studentName}
                onChange={onChangeHandler}
                required
              />
              <input
                name="studentId"
                type="text"
                placeholder="Student ID"
                value={data.studentId}
                onChange={onChangeHandler}
                required
              />
              <input
                name="gradeLevel"
                type="text"
                placeholder="Grade Level"
                value={data.gradeLevel}
                onChange={onChangeHandler}
                required
              />
            </>
          )}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={data.email}
            onChange={onChangeHandler}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={onChangeHandler}
            required
          />
        </div>
        <button type="submit">
          {currState === "Register" ? "Register" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Register" ? (
          <p>
            Already registered?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        ) : (
          <p>
            New to the school?{" "}
            <span onClick={() => setCurrState("Register")}>Register here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
