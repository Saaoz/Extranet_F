import React from 'react';

const TableauNeutre = ({ donnees, entetes }) => {
    return (
        <table>
            <thead>
                <tr>
                    {entetes.map((entete, index) => (
                        <th key={index}>{entete}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {donnees.map((ligne, index) => (
                    <tr key={index}>
                        {ligne.map((cellule, index) => (
                            <td key={index}>{cellule}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableauNeutre;