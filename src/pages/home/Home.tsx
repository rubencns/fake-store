import React, { useEffect, useState } from 'react';
import Loading from '../../components/loading/loading';
import ProductCardGrid from '../../components/product-card-grid/product-card-grid';
import { limitOfProductRetrieved } from '../../constants/product-constants';
import {
  getAllCategories,
  getAllProducts,
  getProductsByCategory,
  IProductData,
} from '../../services/products';
import HomeStyle from './home-style';
import { useProductContext } from '../../context/product-context';

const Home: React.FC = () => {
  const [productList, setProductList] = useState<IProductData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [productsLimit, setProductsLimit] = useState<number>(
    limitOfProductRetrieved
  );
  const [categorySelected, setCategorySelected] = useState<string>('');
  const { state } = useProductContext();

  const fetchAllProducts = async () => {
    setLoading(true);
    const data = await getAllProducts(productsLimit);
    if (data !== undefined) setProductList(data);
    setCategorySelected('see all');
    setLoading(false);
  };

  const fetchAllCategories = async () => {
    const data = await getAllCategories();
    if (data) setCategories(data);
  };

  const fetchProductsByCategory = async (category: string) => {
    setLoading(true);
    const data = await getProductsByCategory(category);
    if (data) setProductList(data);
    setCategorySelected(category);
    setLoading(false);
  };

  const loadMore = () => {
    setProductsLimit(productsLimit + limitOfProductRetrieved);
    fetchAllProducts();
  };

  useEffect(() => {
    fetchAllProducts();
    fetchAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (categorySelected === 'favorites') setProductList(state.favorites);
    if (categorySelected === 'cart') setProductList(state.cart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.favorites, state.cart]);

  return (
    <HomeStyle>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="home-categories">
            <div className="home-categories-product">
              <button
                className={`home-categories-item${
                  categorySelected === 'see all' ? ' isSelected' : ''
                }`}
                onClick={() => fetchAllProducts()}
              >
                All products
              </button>
              {categories.map((category, index) => (
                <button
                  key={`home-categories-item__${index}`}
                  className={`home-categories-item${
                    category === categorySelected ? ' isSelected' : ''
                  }`}
                  onClick={() => fetchProductsByCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <ProductCardGrid products={productList} loadMore={loadMore} />
        </>
      )}
    </HomeStyle>
  );
};

export default Home;
