import AppStyle from './app-style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ResetStyles from './constants/global-styles/reset-styles';
import Header from './components/header/header';
import ProductContextProvider from './context/product-context';
import NotFound from './pages/not-found/not-found';
import Home from './pages/home/home';
import Product from './pages/product/product';
import Favorites from './pages/favorites/favorites';
import Cart from './pages/cart/cart';

const App: React.FC = () => {
  return (
    <ProductContextProvider>
      <ResetStyles />
      <AppStyle>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={Product} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AppStyle>
    </ProductContextProvider>
  );
};

export default App;
