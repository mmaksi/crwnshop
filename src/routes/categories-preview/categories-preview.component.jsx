import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

  const categoriesPreviewComponent = (
    Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return (
        <Link key={title} to={`/shop/${title}`}>
          <CategoryPreview title={title} products={products} />
        </Link>
      );
    })
  )

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        currentUser ? categoriesPreviewComponent : <Authentication/>
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
