import React from 'react';

const getBackgroundColor = (etat) => {
    switch (etat) {
        case 'attente':
            return 'lightcoral'; // rouge clair
        case 'gestion':
            return 'lightblue'; // bleu clair
        case 'valide':
            return 'lightgreen'; // vert clair
        default:
            return ''; // par défaut, pas de couleur de fond
    }
};

const SousTableau = ({ headers, data, handleClick }) => {
    return (
        <table className="sous-tableau">
            <thead>
                <tr className="sous-tableau-header">
                    {headers.map((header, index) => (
                        <th key={index} className="sous-tableau-th">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr
                        key={index}
                        onClick={() => handleClick(row)}
                        className="sous-tableau-row"
                        style={{ backgroundColor: getBackgroundColor(row.etat) }} // Assurez-vous que 'etat' correspond au nom de la clé dans vos objets de données
                    >
                        {headers.map((header, index) => (
                            <td key={index} className="sous-tableau-td">{row[header.toLowerCase()]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SousTableau;
