import React from 'react';

const List = (props) => {
  return (
    <div>
    <h3>Lista</h3>
    <ul>
      {props.content.map(x => <li>{x}</li>) }
      </ul>
    </div>
  );
}
export default List;
