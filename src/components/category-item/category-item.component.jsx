import { useNavigate } from 'react-router-dom';
import './category-item.component.scss'

const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`shop/${title}`)} className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2> {title} </h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
