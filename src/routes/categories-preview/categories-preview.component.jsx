import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesArray } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesArray)

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <Link to={`/shop/${title}`}>
            <CategoryPreview key={title} title={title} products={products} />
          </Link>
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
