import React from 'react';
import { Link, Route, useRouteMatch } from 'react-router-dom';
import { productData } from './Constants';
import Product from './Product';

const Products = () => {
  const { url, path } = useRouteMatch();
  const linkList = productData.map((item) => {
    return (
      <li key={item.id}>
        <Link to={`${url}/${item.id}`}>{item.name}</Link>
      </li>
    );
  });
  return (
    <div>
      <div>
        <div>
          <h3>Products</h3>
          <ul>{linkList}</ul>
        </div>
      </div>

      <Route path={`${path}/:productId`}>
        <Product data={productData} />
      </Route>
      <Route exact path={url}>
        <p>Please select a product.</p>
      </Route>
    </div>
  );
};

export default Products;
