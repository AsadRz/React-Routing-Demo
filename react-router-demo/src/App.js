import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Category from './components/Category';
import Products from './components/Products';
import Home from './components/Home';

function App() {
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
        </ul>
      </nav>
      <Route path='/' exact component={Home} />
      <Route path='/category' component={Category} />
      <Route path='/products' component={Products} />
    </div>
  );
}

export default App;
