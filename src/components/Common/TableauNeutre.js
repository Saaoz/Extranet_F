import React from 'react';


const TableauNeutre = ({ tableData, headers, ids, onRowClick }) => { 
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
        {tableData.map((row, rowIndex) => (
          <tr className='under_t_body' key={rowIndex} onClick={() => onRowClick(ids[rowIndex])}>
            {row.map((cell, cellIndex) => (
              <td className='t_content' key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableauNeutre;