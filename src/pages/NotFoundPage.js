import React from "react";
import { useNavigate } from "react-router-dom";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="not-found-page">
            <h1>404</h1>
            {locale === "id" ? (
              <h2>HALAMAN TIDAK DITEMUKAN</h2>
            ) : (
              <h2>PAGE NOT FOUND</h2>
            )}
            <button onClick={() => navigate("/")}>
              {locale === "id" ? "Kembali ke Beranda" : "Back to Home"}
            </button>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

export default NotFoundPage;
