// Packages imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Files imports
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";
import { selectCurrentUser } from "../../store/user/user.selector";
import Authentication from "../authentication/authentication.component";

// Styled components
import { Container, Title } from "./category.styles.js";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const currentUser = useSelector(selectCurrentUser);

  const [categoryProducts, setCategoryProducts] = useState(
    categoriesMap[category]
  );

  const categoryComponent = (
    <>
    <Title>{category.toUpperCase()}</Title>
    {isLoading ? (
      <Spinner />
    ) : (
      <Container>
        {categoryProducts &&
          categoryProducts.map((categoryProduct) => (
            <ProductCard key={categoryProduct.id} product={categoryProduct} />
          ))}
      </Container>
    )}
  </>
  )

  useEffect(() => {
    setCategoryProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    currentUser ? categoryComponent : <Authentication/>
  );
};

export default Category;
