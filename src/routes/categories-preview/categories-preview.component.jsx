// Packages imports
import { useSelector } from "react-redux";

// Files imports
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Authentication from "../authentication/authentication.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const currentUser = useSelector(selectCurrentUser);

  const categoriesPreviewComponent = Object.keys(categoriesMap).map((title) => {
    const products = categoriesMap[title];

    return <CategoryPreview key={title} title={title} products={products} />;
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : currentUser ? (
        categoriesPreviewComponent
      ) : (
        <Authentication />
      )}
    </>
  );
};

export default CategoriesPreview;
