import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import { LocaleConsumer } from "../contexts/LocaleContext";

function RegisterInput(props) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");

  function onSubmitHandler(event) {
    event.preventDefault();

    props.register({
      name: name,
      email: email,
      password: password,
    });
  }

  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <form className="register-form" onSubmit={onSubmitHandler}>
            {locale === "id" ? (
              <input
                className="register-form__input"
                type="text"
                id="name"
                placeholder="Nama"
                value={name}
                onChange={onNameChange}
              />
            ) : (
              <input
                className="register-form__input"
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={onNameChange}
              />
            )}
            <input
              className="register-form__input"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onEmailChange}
            />
            {locale === "id" ? (
              <input
                className="register-form__input"
                type="password"
                id="password"
                placeholder="Kata Sandi"
                value={password}
                onChange={onPasswordChange}
              />
            ) : (
              <input
                className="register-form__input"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
              />
            )}
            {locale === "id" ? (
              <input
                className="register-form__input"
                type="password"
                id="confirmPassword"
                placeholder="Konfirmasi Kata Sandi"
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
              />
            ) : (
              <input
                className="register-form__input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={onConfirmPasswordChange}
              />
            )}
            <button type="submit" className="register-form__button">
              {locale === "id" ? "Daftar" : "Register"}
            </button>
          </form>
        );
      }}
    </LocaleConsumer>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
