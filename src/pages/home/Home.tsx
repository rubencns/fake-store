import React, { useEffect, useState } from 'react';
import ProductCardGrid from '../../components/product-card-grid/ProductCardGrid';
import Spinner from '../../components/spinner/Spinner';
import { getAllProducts, IProductData } from '../../services/products';
import HomeStyle from './home-style';

const Home: React.FC = () => {
  const [productList, setProductList] = useState<IProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        if (res !== undefined) setProductList(res);
        else setProductList([]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomeStyle>
      {loading ? (
        <div className="home-loading">
          <Spinner />
          <span className="home-loading-text">Loading...</span>
        </div>
      ) : (
        <ProductCardGrid products={productList} />
      )}
    </HomeStyle>
  );
};

export default Home;
