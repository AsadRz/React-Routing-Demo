import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import Item from './Item';

/**
 * useRouteMatch() hook is used to gain access
 * to match object. As match.url (for links) and match.path(for routes) are used
 * for creating nested routes and links
 */

const Category = () => {
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

      {/* :name is a path parameter and catches everything after category/ until another forward slash is encountered. So, a path name like products/running-shoes will create a params object as follows:

      {
        name: "running-shoes";
      } 

      */}

      <Route path={`${path}/:name`}>
        <Item />
      </Route>
    </div>
  );
};

export default Category;
