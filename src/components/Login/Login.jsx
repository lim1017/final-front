// imports & initialization
import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import axios from "axios";

import MUButton from "@material-ui/core/Button";

import { Redirect, Route } from "react-router-dom";

// exported function
function Login(props) {
  const [loggedIn, setLoggedIn] = useState({ name: null, id: null });

  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const [userExists, setUserExists] = useState(true);
  const [userExistsRegister, setUserExistsRegister] = useState(false);
  const [emptyFieldError, setEmptyFieldError] = useState({
    error: false,
    button: "",
  });

  const [button1, setButton1] = useState({
    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    x: 0,
  });
  const [button2, setButton2] = useState({
    color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    x: 0,
  });

  const style = {
    background: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    width: 105,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px #4a148c 30%",
    marginLeft: 0,
  };

  const clearErrors = () => {
    setUserExists(true);
    setUserExistsRegister(false);
  };

  const isEmptyField = (button) => {
    if (!username.trim()) {
      setEmptyFieldError({ error: true, button });
      return true;
    } else {
      setEmptyFieldError({ error: false, button });
      return false;
    }
  };

  function logout() {
    localStorage.clear();
    setUsername(null);
  }

  function login() {
    clearErrors();

    if (isEmptyField("Login")) return;
    Promise.all([axios.get(`/api/account/${username}`)])
      .then((response) => {
        console.log(response);
        if (response[0].data.length === 0) {
          setUserExists(false);
        } else {
          setUserExists(true);
          const userz = response[0].data[0];
          localStorage.setItem("username", userz.name);
          localStorage.setItem("id", userz.id);
          setLoggedIn({ name: userz.name, id: userz.id });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function register() {
    clearErrors();
    if (isEmptyField("Register")) return;

    Promise.all([axios.put(`/api/account/register`, { username })])
      .then((response) => {
        console.log(response);
        if (response[0].status === 200) {
          setUserExistsRegister(true);
        } else {
          // localStorage.setItem("newUser", true);
          login();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleChangeName(event) {
    setEmptyFieldError({ error: false, button: "" });
    setUsername(event.target.value);
  }

  return (
    <>
      <div className="login-box">
        {loggedIn.id !== null ? (
          <>
            <Button variant="outline-success" onClick={() => logout()}>
              Logout
            </Button>
            <Route exact path="/welcome">
              {loggedIn ? <Redirect to="/admin/dashboard" /> : null}
            </Route>
          </>
        ) : null}

        <Form inline onSubmit={login}>
          <FormControl
            style={{
              marginRight: "10px",
              width: "15em",
              textAlign: `center`,
              background: "gray",
            }}
            type="text"
            placeholder="Login with existing name"
            className="mr-sm-2"
            onChange={handleChangeName}
          />
          <MUButton
            style={{
              ...style,
              background: button1.color,
              width: 105 - button1.x,
              marginLeft: button1.x,
            }}
            onMouseLeave={() =>
              setButton1({
                ...button1,
                color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
              })
            }
            onMouseOver={() =>
              setButton1({
                ...button1,
                color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
              })
            }
            onMouseUp={() =>
              setButton1({
                ...button1,
                x: 0,
              })
            }
            onMouseDown={() =>
              setButton1({
                ...button1,
                x: 2,
              })
            }
            onClick={() => login()}
          >
            Login
          </MUButton>
        </Form>
        <br style={{ marginTop: "1em" }}></br>

        <Form inline onSubmit={register}>
          <FormControl
            style={{
              marginRight: "10px",
              width: "15em",
              textAlign: `center`,
              background: "gray",
            }}
            type="text"
            placeholder="Enter any name to register"
            className="mr-sm-2"
            onChange={handleChangeName}
          />

          <MUButton
            style={{
              ...style,
              background: button2.color,
              width: 105 - button2.x,
              marginLeft: button2.x,
            }}
            onMouseLeave={() =>
              setButton2({
                ...button2,
                color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
                x: 0,
              })
            }
            onMouseOver={() =>
              setButton2({
                ...button2,
                color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)",
              })
            }
            onMouseUp={() =>
              setButton2({
                ...button2,
                x: 0,
              })
            }
            onMouseDown={() =>
              setButton2({
                ...button2,
                x: 2,
              })
            }
            onClick={() => register()}
          >
            Register
          </MUButton>
        </Form>
        <div style={{ height: "3em", marginTop: "0.5em" }}>
          {userExists === false ? (
            <p style={{ color: "red", fontSize: 20, fontWeight: 600 }}>
              User not found, please register
            </p>
          ) : null}

          {userExistsRegister ? (
            <p style={{ color: "red", fontSize: 20, fontWeight: 600 }}>
              Existing user, choose a new name
            </p>
          ) : null}

          {emptyFieldError.error ? (
            <p style={{ color: "red", fontSize: 20, fontWeight: 600 }}>
              Empty {emptyFieldError.button} field
            </p>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Login;
