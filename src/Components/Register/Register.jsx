import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function Register() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });
  const [errList, setErrList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Registeration Successful");

  let navigate = useNavigate();

  function getUserData(e) {
    let userData = { ...user };
    userData[e.target.name] = e.target.value;
    setUser(userData);
  }

  async function sendRegisterDataToAPI() {
    let { data } = await axios.post(
      "https://route-egypt-api.herokuapp.com/signup",
      user
    );
    setLoading(false);

    if (data.message === "success") {
      setError("Registeration Successful");
      navigate("/login");
    } else {
      setError(data.message);
    }
  }

  function validateRegisterationData() {
    let schema = Joi.object({
      first_name: Joi.string().min(3).max(30).required(),
      last_name: Joi.string().min(3).max(30).required(),
      age: Joi.number().min(10).max(100).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/)
        .required(),
    });

    return schema.validate(user, { abortEarly: false });
  }

  function submitRegisterationForm(e) {
    setLoading(true);
    e.preventDefault();
    let validation = validateRegisterationData();
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
        {error != "Registeration Successful" ? (
          <div className="alert alert-danger my-2">{error}</div>
        ) : (
          ""
        )}
        <div className="form-color p-5 rounded">
          <h3 className="text-capitalize text-white pb-3  ">
            Create my account
          </h3>
          <form onSubmit={submitRegisterationForm}>
            <div className="d-flex mb-3">
              <div className="w-50 pe-2">
                <input
                  onChange={getUserData}
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  className="p-2 w-100 rounded"
                />
                {errList.filter(
                  (err) => err.context.label == "first_name"
                )[0] ? (
                  <div className="text-danger ">
                    {
                      errList.filter(
                        (err) => err.context.label == "first_name"
                      )[0]?.message
                    }
                  </div>
                ) : null}
              </div>
              <div className="w-50 ps-2">
                <input
                  onChange={getUserData}
                  type="text"
                  placeholder="Last Name"
                  className="p-2 w-100 rounded"
                  name="last_name"
                />
                {errList.filter(
                  (err) => err.context.label == "first_name"
                )[0] ? (
                  <div className="text-danger ">
                    {
                      errList.filter(
                        (err) => err.context.label == "last_name"
                      )[0]?.message
                    }
                  </div>
                ) : null}
              </div>
            </div>

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
                type="number"
                placeholder="Age"
                name="age"
                className="d-block w-100 p-2  rounded"
              />
              {errList.filter((err) => err.context.label == "first_name")[0] ? (
                <div className="text-danger ">
                  {
                    errList.filter((err) => err.context.label == "age")[0]
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
            <button className="btn btn-secondary w-100 p-2">
              Create Account
            </button>
          </form>
        </div>
      </div>

      {loading ? <Loading /> : null}
    </>
  );
}
