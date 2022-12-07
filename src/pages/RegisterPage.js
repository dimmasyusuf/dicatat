import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import Language from "../components/Language";
import ToggleTheme from "../components/ToggleTheme";
import { register } from "../utils/api";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegister(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <div className="register-bar">
        <Language />
        <ToggleTheme />
      </div>
      <RegisterInput register={onRegister} />
    </section>
  );
}

RegisterPage.propTypes = {
  register: PropTypes.func,
};

export default RegisterPage;
