import React from "react";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { MdOutlineLanguage } from "react-icons/md";

function Language() {
  return (
    <LocaleConsumer>
      {({ locale, toggleLocale }) => {
        return (
          <div className="navbar-language">
            <button className="navbar-language__button" onClick={toggleLocale}>
              <div className="navbar-language__icon">
                <MdOutlineLanguage />
              </div>
              {locale === "id" ? "Bahasa Indonesia" : "English"}
            </button>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

export default Language;
