import { IProductData } from '../../services/products';
import ProductCardStyle from './product-card-style';

interface IProductCard {
  product: IProductData;
}

const ProductCard: React.FC<IProductCard> = ({
  product: { id, title, description, category, image, price },
}) => {
  return (
    <ProductCardStyle>
      <div className="product-image">
        <img src={image} alt="Product" />
      </div>
      <div className="product-info">
        <div className="product-info-title">
          <h2>{title}</h2>
        </div>
        <div className="product-info-category">
          <span className="product-info-category">{category}</span>
        </div>
        <div className="product-info-description">
          <p>{description}</p>
        </div>
        <div className="product-info-bottom">
          <button className="product-info-cta" onClick={() => alert(id)}>
            See more
          </button>
          <div className="product-info-price">
            <span>$ {price}</span>
          </div>
        </div>
      </div>
    </ProductCardStyle>
  );
};

export default ProductCard;
