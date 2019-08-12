import React from 'react';

const Row = (props) => {
  return (
    <tr>
      {props.prop.map(y => <td>{y}</td>)}
    </tr>
  );
}
export default Row;
