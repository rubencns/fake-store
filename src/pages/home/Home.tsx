import React, { useEffect, useState } from 'react';
import Loading from '../../components/loading/loading';
import ProductCardGrid from '../../components/product-card-grid/product-card-grid';
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
      {loading ? <Loading /> : <ProductCardGrid products={productList} />}
    </HomeStyle>
  );
};

export default Home;
