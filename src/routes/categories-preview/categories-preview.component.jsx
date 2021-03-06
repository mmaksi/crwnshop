import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <Link key={title} to={`/shop/${title}`}>
              <CategoryPreview title={title} products={products} />
            </Link>
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
