import React from 'react';
import { useNavigate } from 'react-router-dom'; // import du hook useNavigate

const TableauNeutre = ({ tableData, headers, onRowClick }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/projet${id}`);
  };
  return (
    <table className='table_interact'>
      <thead className='t_header'>
        <tr className='under_t_header'>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody className='t_body'>
        {tableData.map((row, index) => (
          <tr className='under_t_body' key={index} onClick={() => handleClick(row.id)}>
            {row.map((cell, index) => (
              <td className='t_content' key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableauNeutre;