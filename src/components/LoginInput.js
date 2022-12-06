import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import { LocaleConsumer } from "../contexts/LocaleContext";

function LoginInput(props) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  function onSubmitHandler(event) {
    event.preventDefault();

    props.login({
      email: email,
      password: password,
    });
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <form className="login-form" onSubmit={onSubmitHandler}>
            <input
              className="login-form__input"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onEmailChange}
            />
            {locale === "id" ? (
              <input
                className="login-form__input"
                type="password"
                id="password"
                placeholder="Kata Sandi"
                value={password}
                onChange={onPasswordChange}
              />
            ) : (
              <input
                className="login-form__input"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
              />
            )}
            <button type="submit" className="login-form__button">
              {locale === "id" ? "Masuk" : "Login"}
            </button>
            <p>{locale === "id" ? "Atau" : "Or"}</p>
            <Link to="/register" className="login-form__link">
              <button className="login-form__register">
                {locale === "id" ? "Buat Akun Baru" : "Create New Account"}
              </button>
            </Link>
          </form>
        );
      }}
    </LocaleConsumer>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func,
};

export default LoginInput;
