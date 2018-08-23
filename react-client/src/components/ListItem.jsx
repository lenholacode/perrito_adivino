import React from 'react';
//import items from './../../../database-mysql/index.js'

const ListItem = (props) => (
  <div>
    { props.item.description }
  </div>
)

export default ListItem;

//[Math.floor(Math.random() * 2)]
