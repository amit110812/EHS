import { useState } from "react";
import { Image, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

const UserSignupDetails = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [business, setBusiness] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  //   const Industry =["Pharma","Electronics","Telecom","Construction","Power","Railways","Healthcare"]
  const Industry = [
    {
      name: "Pharma",
      states: [
        {
          stateName: "Rajasthan",
          city: ["Udaipur", "MountAbu", "Jaipur"],
        },
        {
          stateName: "Madhya Pradesh",
          city: ["Indore", "Bhopal", "Jabalpur"],
        },
        {
          stateName: "Maharshtra",
          city: ["Mumbai", "Pune", "Wada"],
        },
      ],
    },
    {
      name: "Construction",
      states: [
        {
          stateName: "Gujrat",
          city: ["Ahmedabad", "Surat"],
        },
        {
          stateName: "Madhya Pradesh",
          city: ["Gwalior", "Raisen", "Jabalpur"],
        },
        {
          stateName: "Karnataka",
          city: ["Udupi", "Gokarna", "Hampi"],
        },
      ],
    },
  ];
  console.log(Industry?.filter(
    (item) => item?.name == business
  )[0]?.states?.filter((item)=>item.stateName==state));

  const body = {
    username: email,
    email: email,
    password: password,
  };    

  const isEmailValid = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };
  const isPasswordValid = (inputPassword) => {
    return inputPassword.trim().length > 8;
  };
  const handlePasswordChange = (event) => {
    // if (event.target.value.length > 0) {
    //   setShowEye(true)
    // } else {
    //   setShowEye(false)
    // }

    const inputPassword = event.target.value;
    setPassword(inputPassword);

    if (errors.password && inputPassword.trim().length > 8) {
      const updatedErrors = { ...errors };
      delete updatedErrors.password;
      setErrors(updatedErrors);
    }
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    if (errors.email && isEmailValid(inputEmail)) {
      const updatedErrors = { ...errors };
      delete updatedErrors.email;
      setErrors(updatedErrors);
    }
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!isEmailValid(email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (!isPasswordValid(password)) {
      validationErrors.password = "Please enter a valid password";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      setPassword("");
      setEmail("");
      setErrors({});
      // dispatch(signinuser(body));
      setTimeout(() => {
        navigate("/homescreen");
      }, 3000);
    }
  };

  return (
    <div className="user-creation ">
      <div className="user-creation-form mx-5 px-3">
        <ToastContainer />
        <div className="login-input-form">
          <h4 className="text-start login-header">New Employee Registration</h4>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3 my-4" controlId="formGroupEmail">
              <Form.Control
                type="text"
                value={email}
                placeholder="Email Id"
                onChange={handleEmailChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
              <Form.Control
                type="password"
                value={password}
                placeholder="Name"
                onChange={handlePasswordChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3 mt-4" controlId="formGroupPassword">
              <Form.Control
                type="password"
                value={password}
                placeholder="Phone Number"
                onChange={handlePasswordChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className="login-btns py-2 mb-3 mt-4">
              Next
            </Button>
          </Form>
          <Form onSubmit={handleLogin}>
            <p className="text-start">
              <b>Select Business : </b>
              {business !== "" && business}
            </p>
            {business == "" && (
              <div className="business-items">
                {Industry.map((item) => {
                  return (
                    <p
                      className="business-list"
                      onClick={() => setBusiness(item.name)}
                    >
                      {item.name}
                    </p>
                  );
                })}
              </div>
            )}
            {business !== "" && (
              <>
                <p className="text-start">
                  <b>State : </b> {state !== "" && state}
                </p>
                {state === "" && (
                  <div className="business-items">
                    {Industry?.filter(
                      (item) => item?.name == business
                    )[0]?.states?.map((item) => {
                      return (
                        <p
                          className="business-list"
                          onClick={() => setState(item?.stateName)}
                        >
                          {item?.stateName}
                        </p>
                      );
                    })}
                  </div>
                )}
              </>
            )}
            {state !== "" && (
              <>
                <p className="text-start">
                  <b>City : </b> {city !== "" && city}
                </p>
                {city === "" && (
                  <div className="business-items">
                    {Industry?.filter(
                      (item) => item?.name == business
                    )[0]?.states?.filter((item)=>item.stateName==state)[0]?.city?.map((item) => {
                      return (
                        <p
                          className="business-list"
                          onClick={() => setCity(item)}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                )}
              </>
            )}
            <Button type="submit" className="login-btns py-2 mb-3 mt-4">
              Create Profile
            </Button>
          </Form>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default UserSignupDetails;
