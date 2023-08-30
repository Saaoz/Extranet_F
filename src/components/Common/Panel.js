import React from 'react';

const Panel = ({ marcheInfo, lotInfo, montantActuel }) => {
    return (
        <div className="marche-info-container">
            <h2>Informations du marché - {marcheInfo.nom}</h2>
            <div className="marche-info">
                <div className="info-card">
                    <p className="info-title">Montant initial du projet</p>
                    <p className="info-value">{lotInfo.montant} €</p>
                </div>
                <div className="info-card">
                    <p className="info-title">Prix du marché actuel</p>
                    <p className="info-value">{montantActuel} €</p>
                </div>
                <div className="info-card">
                    <p className="info-title">Date de début</p>
                    <p className="info-value">{lotInfo.date_debut}</p>
                </div>
                <div className="info-card">
                    <p className="info-title">Date de fin</p>
                    <p className="info-value">{lotInfo.date_fin}</p>
                </div>
            </div>
        </div>
    );
};

export default Panel;
