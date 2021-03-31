import AppStyle from './app-style';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NotFound from './pages/not-found/not-found';
import Home from './pages/home/home';
import Product from './pages/product/product';

const App: React.FC = () => {
  return (
    <AppStyle>
      <Router>
        <Link className="app-link" to="/">
          <h1>Fake Store</h1>
        </Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products/:id" component={Product} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppStyle>
  );
};

export default App;
