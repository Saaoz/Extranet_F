import React from 'react';
 // Vous pouvez créer ce fichier pour définir vos styles

const TableauNeutre = ({ tableData, headers, ids, onRowClick }) => {
  return (
    <div className="list-container">
      <div className="list-header">
        {headers.map((header, index) => (
          <div key={index} className="list-header-cell">
            {header}
          </div>
        ))}
      </div>
      <div className="list-body">
        {tableData.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className="list-row" 
            onClick={() => onRowClick(ids[rowIndex])}
          >
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className="list-cell">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableauNeutre;
