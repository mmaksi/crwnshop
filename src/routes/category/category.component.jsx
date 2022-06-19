import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import styles from "./category.module.scss"

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap)

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
