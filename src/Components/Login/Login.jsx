import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errList, setErrList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Login Successful");

  let navigate = useNavigate();

  function getUserData(e) {
    let userData = { ...user };
    userData[e.target.name] = e.target.value;
    setUser(userData);
  }

  async function sendRegisterDataToAPI() {
    let { data } = await axios.post(
      "https://route-egypt-api.herokuapp.com/signin",
      user
    );
    setLoading(false);

    if (data.message === "success") {
      setError("Login Successful");
      localStorage.setItem("userToken", data.token);
      navigate("/");
    } else {
      setError(data.message);
    }
  }

  function validateLoginData() {
    let schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/)
        .required(),
    });

    return schema.validate(user, { abortEarly: false });
  }

  function submitLoginForm(e) {
    setLoading(true);
    e.preventDefault();
    let validation = validateLoginData();
    if (validation.error) {
      setLoading(false);
      setErrList(validation.error.details);
    } else {
      sendRegisterDataToAPI();
    }
  }

  return (
    <>
      <div className="container my-5 w-75 rounded">
        {error != "Login Successful" ? (
          <div className="alert alert-danger my-2">{error}</div>
        ) : (
          ""
        )}
        <div className="form-color p-5 rounded">
          <h3 className="text-capitalize text-white pb-3 text-center ">
            Log in to Game Over
          </h3>
          <form onSubmit={submitLoginForm}>
            <div className="mb-3">
              <input
                onChange={getUserData}
                type="email"
                placeholder="Email Address "
                className="d-block w-100 p-2 rounded"
                name="email"
              />
              {errList.filter((err) => err.context.label == "first_name")[0] ? (
                <div className="text-danger ">
                  {
                    errList.filter((err) => err.context.label == "email")[0]
                      ?.message
                  }
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <input
                onChange={getUserData}
                type="password"
                placeholder="Password"
                className="d-block w-100 p-2  rounded"
                name="password"
              />
              {errList.filter((err) => err.context.label == "first_name")[0] ? (
                <div className="text-danger ">
                  {
                    errList.filter((err) => err.context.label == "password")[0]
                      ?.message
                  }
                </div>
              ) : null}
            </div>
            <button className="btn btn-secondary w-100 p-2">Login</button>
          </form>
        </div>
      </div>

      {loading ? <Loading /> : null}
    </>
  );
}
