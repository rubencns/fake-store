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
import Button from '../../components/button/button';
import { order, sortProductsByPrice } from '../../utils/sort-products';

const Home: React.FC = () => {
  const [productList, setProductList] = useState<IProductData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [productsLimit, setProductsLimit] = useState<number>(
    limitOfProductRetrieved
  );
  const [moreProductsToLoad, setMoreProductsToLoad] = useState<boolean>(true);
  const [categorySelected, setCategorySelected] = useState<string>('');
  const [order, setOrder] = useState<order | ''>('');
  const { state } = useProductContext();

  const fetchAllProducts = async () => {
    setLoading(true);
    const data = await getAllProducts(productsLimit);
    if (data !== undefined) {
      if (data.length === productList.length) setMoreProductsToLoad(false);
      if (order) setProductList([...sortProductsByPrice(data, order)]);
      else setProductList(data);
    }
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
    if (data) {
      if (data.length === productList.length) setMoreProductsToLoad(false);
      if (order) setProductList([...sortProductsByPrice(data, order)]);
    }
    setCategorySelected(category);
    setLoading(false);
  };

  const loadMore = () => {
    setProductsLimit(productsLimit + limitOfProductRetrieved);
    if (categorySelected === 'see all') return fetchAllProducts();
    fetchProductsByCategory(categorySelected);
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

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.selectedOptions[0].value;
    if (selected === 'asc' || selected === 'desc') {
      setOrder(selected);
      setProductList([...sortProductsByPrice(productList, selected)]);
    }
  };

  return (
    <HomeStyle>
      <>
        <div className="home-categories">
          <div className="home-categories-product">
            <Button
              text="All products"
              active={categorySelected === 'see all'}
              onClick={() => fetchAllProducts()}
            />
            {categories.map((category, index) => (
              <Button
                key={`home-categories-item__${index}`}
                active={category === categorySelected}
                onClick={() => fetchProductsByCategory(category)}
                text={category}
              />
            ))}
          </div>
          <div className="home-categories-filter">
            <select onChange={handleSelect}>
              <option>Sort By Price</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
        <ProductCardGrid
          products={productList}
          loadMore={loadMore}
          moreProductsToLoad={moreProductsToLoad}
        />
      </>
    </HomeStyle>
  );
};

export default Home;
