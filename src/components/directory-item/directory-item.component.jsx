// Packages imports
import { useNavigate } from 'react-router-dom';

// Styled components
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles'

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  const navigate = useNavigate();

  return (
    <DirectoryItemContainer onClick={() => navigate(`shop/${title}`)}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2> {title} </h2>
        <p>SHOP NOW</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
