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
import { selectCurrentUser } from "../../store/user/user.selector";
import Authentication from "../authentication/authentication.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const currentUser = useSelector(selectCurrentUser);

  const [categoryProducts, setCategoryProducts] = useState(
    categoriesMap[category]
  );

  const categoryComponent = (
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
  )

  useEffect(() => {
    setCategoryProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    currentUser ? categoryComponent : <Authentication/>
  );
};

export default Category;
