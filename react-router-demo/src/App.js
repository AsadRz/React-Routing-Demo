import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Category from './components/Category';
import Products from './components/Products';
import Home from './components/Home';

import Login from './components/Login';
import PrivateRoute from './PrivateRoute';

function App() {
  const admin = () => {
    return (
      <div>
        <h3>admin</h3>
      </div>
    );
  };
  return (
    <div className='App'>
      <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/category'>Category</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/category'>
          <Category />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/admin' component={admin} />
        {/* /:id part is used for dynamic routing */}
      </Switch>
    </div>
  );
}

export default App;
