import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import ArchivePage from "./pages/ArchivePage";
import TrashPage from "./pages/TrashPage";
import CreatePage from "./pages/CreatePage";
import DetailPage from "./pages/DetailPage";
import NoteLogo from "./components/NoteLogo";
import BottomBar from "./components/BottomBar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="app">
      <NoteLogo />
      <BottomBar />
      <sidebar>
        <SideBar />
      </sidebar>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/note/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
