import React from "react";

const HeaderButtons = ({
  onChoiceChange,
  currentChoice,
  isFromProject,
  isFromMarche,
  handleBackToDashboard,
  handleLogout,
}) => {
  return (
    <>
      <button onClick={handleBackToDashboard}>HOME</button>
      <button
        onClick={() => {
          if (isFromMarche) {
            onChoiceChange("marche"); 
          } else {
            onChoiceChange(isFromProject ? "listLot" : "listProjet");
          }
        }}
        className={
          currentChoice === (isFromMarche ? "marche" : isFromProject ? "listLot" : "listProjet")
            ? "active"
            : ""
        }
      >
        {isFromMarche ? "Marché" : isFromProject ? "Liste des Lots" : "Liste des Projets"}
      </button>
      <button
        onClick={() => onChoiceChange("listDocument")}
        className={currentChoice === "listDocument" ? "active" : ""}
      >
        Liste des documents
      </button>
      <button
        onClick={() => onChoiceChange("listNotice")}
        className={currentChoice === "listNotice" ? "active" : ""}
      >
        Liste des notices
      </button>
      <button onClick={handleLogout}>Se déconnecter</button>
    </>
  );
};

export default HeaderButtons;
