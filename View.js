import React from 'react';
import '../style.css';
export const View = ({ dets, deleteDets }) => {
  return dets.map((Det) => (
    <tr key={Det.Id}>
      <td>{Det.Name}</td>
      <td>{Det.Id}</td>
      <td>{Det.College}</td>  
      <td>{Det.Branch}</td>
      <td>
      <button onClick={() => deleteDets(Det.Id)}>Delete</button>
      </td>      
    </tr>
  ));
};
