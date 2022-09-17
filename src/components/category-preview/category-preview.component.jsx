import { useNavigate } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.styles.scss";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="title" onClick={() => navigate(`${title}`)}>
        {title.toUpperCase()}
      </h2>
      <div className="category-preview-container">
        <div className="preview">
          {products
            .filter((product, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPreview;
