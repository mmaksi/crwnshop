// Custom components
import CategoryItem from "../directory-item/directory-item.component";

// Styled components
import { Container } from "./directory.styles.js"

const Directory = ({categories}) => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
};

export default Directory;
