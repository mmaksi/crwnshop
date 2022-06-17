import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";
import styles from "./category.module.scss"

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [categoryProducts, setCategoryProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setCategoryProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <div className={styles["category-container"]}>
      {categoryProducts && categoryProducts.map((categoryProduct) => (
        <ProductCard key={categoryProduct.id} product={categoryProduct} />
      ))}
    </div>
  );
};

export default Category;
