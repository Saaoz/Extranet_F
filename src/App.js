import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "./style/App.css";
import "./style/reset.css";
import "./style/helpers.css";
import "./style/colors_fonts.css";
import SigninPage from "../src/page/Sign_in";
import ResetPage from "./page/Reset";
import LoginPage from "./page/Login";
import Dashboardaccueil from "./page/Dashboard_accueil";
import Dashboardprojet from "./page/Dashboard_projet";
import DashboardMarche from "./page/Dashboard_marche";
import ProfilePage from "./page/ProfilePage";



const InnerApp = () => {
  // Utilisation du Hook useLocation pour récupérer les informations sur la localisation actuelle
  const location = useLocation();
  // Récupération de la propriété scrollTo du state, si elle existe grâce à la conditiion "?"
  const scrollTo = location.state?.scrollTo;

  return (
    <Routes>
      <Route path="/sign_in" element={<SigninPage />} />
      <Route path="/reset" element={<ResetPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/accueil" element={<Dashboardaccueil />} />
      <Route path="/projet/:projetId" element={<Dashboardprojet />} />
      <Route path="/marche/:projetId/:nom" element={<DashboardMarche />} />

      {/* Passer scrollTo au composant ProfilePage en tant que prop */}
      <Route path="/profilePage" element={<ProfilePage scrollTo={scrollTo} />} />
    </Routes>
  );
};


const App = () => {
  return (
    <>
      {/* ToastContainer pour afficher des notifications à l'utilisateur */}
      <ToastContainer />
      {/* Utilisation de BrowserRouter pour gérer le routage de l'application */}
      <BrowserRouter>
        {/* Appel du composant InnerApp à l'intérieur de BrowserRouter */}
        <InnerApp />
      </BrowserRouter>
    </>
  );
};

export default App;



