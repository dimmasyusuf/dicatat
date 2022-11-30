import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <h2>HALAMAN TIDAK DITEMUKAN</h2>
      <button onClick={() => navigate("/")}>Kembali ke Catatan</button>
    </div>
  );
}

export default NotFoundPage;
