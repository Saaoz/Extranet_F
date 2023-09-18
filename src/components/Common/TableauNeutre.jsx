import React from 'react';

const Tableau = ({ headers, data, handleClick }) => {
  if (!Array.isArray(data)) {
    console.error("Le prop 'data' doit être un tableau");
    return <div>Une erreur est survenue</div>;
  }

  return (
    <>
      <div className='tabl t_header'>
        {Array.isArray(headers) && headers.map((header, index) => (
          <p key={index}>{header}</p>
        ))}
      </div>
      <div className='global_t_content'>
        {Array.isArray(data) && data.map((item, index) => (
          <div className='tabl t_content' onClick={() => handleClick(item)} key={index}>
            {Array.isArray(headers) && headers.map((header, i) => (
              <p className={i === 0 ? 't_s_content' : ''} key={i}>
                {item[header.toLowerCase()]}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tableau;
