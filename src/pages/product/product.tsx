import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../../components/loading/loading';
import ProductCard from '../../components/product-card/product-card';
import { getSingleProduct, IProductData } from '../../services/products';
import ProductStyle from './product-style';

const Product: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProductData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getSingleProduct(id)
      .then((res) => {
        setLoading(false);
        setProduct(res);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <ProductStyle>
      {loading ? <Loading /> : product && <ProductCard product={product} />}
    </ProductStyle>
  );
};

export default Product;
