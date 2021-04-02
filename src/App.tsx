import AppStyle from './app-style';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/not-found/not-found';
import Home from './pages/home/home';
import Product from './pages/product/product';
import ResetStyles from './constants/global-styles/reset-styles';
import Header from './components/header/header';
import ProductContextProvider from './context/product-context';

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
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AppStyle>
    </ProductContextProvider>
  );
};

export default App;
