import { useContext, Fragment } from "react";
import { Link } from "react-router-dom"

import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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
