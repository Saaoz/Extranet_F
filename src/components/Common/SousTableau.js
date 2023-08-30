import React from 'react';

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
                    <tr key={index} onClick={() => handleClick(row)} className="sous-tableau-row">
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
