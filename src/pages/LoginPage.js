import React from "react";
import PropTypes from "prop-types";
import LoginInput from "../components/LoginInput";
import Language from "../components/Language";
import ToggleTheme from "../components/ToggleTheme";
import { login } from "../utils/api";

const LoginPage = ({ loginSuccess }) => {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="login-page">
      <div className="login-bar">
        <Language />
        <ToggleTheme />
      </div>
      <LoginInput login={onLogin} />
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func,
};

export default LoginPage;
