import React from 'react';
import { useNavigate } from 'react-router-dom'; // import du hook useNavigate

const TableauNeutre = ({ tableData, headers, onRowClick }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/projet${id}`);
  };
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} onClick={() => handleClick(row.id)}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableauNeutre;