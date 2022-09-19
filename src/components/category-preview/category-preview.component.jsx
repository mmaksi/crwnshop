// Packages imports
import { useNavigate } from "react-router-dom";

// Custom components
import ProductCard from "../product-card/product-card.component";

// Styled components
import { CategoryPreviewContainer, Preview, Title } from "./category-preview.styles.js";

const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();

  return (
    <>
      <Title onClick={() => navigate(`${title}`)}>
        {title.toUpperCase()}
      </Title>
      <CategoryPreviewContainer>
        <Preview>
          {products
            .filter((product, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </Preview>
      </CategoryPreviewContainer>
    </>
  );
};

export default CategoryPreview;
