import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Item from './Item';

const Category = () => {
  console.log(useRouteMatch());
  const { url, path } = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${url}/boot`}>Boots</Link>
        </li>
        <li>
          <Link to={`${url}/footwear`}>Footwear</Link>
        </li>
      </ul>

      <Route path={`${path}/:name`}>
        <Item />
      </Route>
    </div>
  );
};

export default Category;
