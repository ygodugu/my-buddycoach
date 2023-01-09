import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./LoginFormValidationRules";
import { Redirect } from "react-router-dom";
import "./form.css"
import logo from "./LoginLogo.png";

const Form = props => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  );
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
    props.parentCallback(true);
    return <Redirect to="/default" />;
  }

  return (
    <div className="section is-fullheight">
    {loggedIn && <Redirect to="/default" />}
    <div className="UpdateBadges">

        <div style={{
            width : "100%",
            height: "100%",
            backgroundImage : `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
            backgroundPosition : "center",
            backgroundSize : "cover"
            }}>
            <img src={logo} alt={logo} className="logoImg"/>
            <form style={{
                margin : "auto",
                padding: "15px",
                maxWidth:"400px",
                alignItems:"center",
            }}
            onSubmit={handleSubmit} noValidate
            >
            <h3 className="code">Login</h3>
            <label className="label">Email Address</label>
                <div className="control">
                    <input
                        autoComplete="off"
                        className={`input ${errors.email && "is-danger"}`}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email || ""}
                        required
                    />
                    {errors.email && (
                        <p className="help is-danger">{errors.email}</p>
                    )}
                </div>
            <div className="field">
                    <label className="label">Password</label>
                <div className="control">
                    <input
                        className={`input ${errors.password && "is-danger"}`}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password || ""}
                        required
                    />
                </div>
                    {errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                    )}
            </div>
            <button
                type="submit"
                className="button is-block is-info is-fullwidth"
                    >
                Login
            </button>
            </form>
        </div>
    </div>
</div>
  );
};

export default Form;
