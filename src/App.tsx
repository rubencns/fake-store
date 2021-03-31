import AppStyle from './app-style';
import Home from './pages/home/Home';

const App: React.FC = () => {
  return (
    <AppStyle>
      <h1>Fake Store</h1>
      <Home />
    </AppStyle>
  );
};

export default App;
