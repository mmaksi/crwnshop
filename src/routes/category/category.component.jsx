import { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "../../components/product-card/product-card.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categories.selector";
import styles from "./category.module.scss";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  const [categoryProducts, setCategoryProducts] = useState(
    categoriesMap[category]
  );

  useEffect(() => {
    setCategoryProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className={styles["category-title"]}>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles["category-container"]}>
          {categoryProducts &&
            categoryProducts.map((categoryProduct) => (
              <ProductCard key={categoryProduct.id} product={categoryProduct} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
