import React from 'react';
import Row from "./Row.js";

const Table = (props) => {
  return (
    <table>
      <tr>{props.headers.map(x => <th>{x}</th>)}</tr>
        {props.contents.map(x => <Row prop={x} />)}
    </table>
  );
}
export default Table;
