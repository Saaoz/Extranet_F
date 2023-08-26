import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./style/App.css";
import "./style/reset.css";
import "./style/helpers.css";
import SigninPage from "../src/page/Sign_in";
import ResetPage from "./page/Reset";
import LoginPage from "./page/Login";
import Dashboardaccueil from "./page/Dashboard_accueil";
import Dashboardprojet from "./page/Dashboard_projet";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign_in" element={<SigninPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/accueil" element={<Dashboardaccueil />} />
        <Route path="/projet/:projetId" element={<Dashboardprojet />} />
        {/* Autres routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;