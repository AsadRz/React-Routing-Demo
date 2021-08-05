import React from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
  const { name } = useParams();
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default Item;
