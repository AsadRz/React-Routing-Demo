import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * useParams hook which returns the object of URL parameters
 */

const Item = () => {
  const { name } = useParams();
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

export default Item;
