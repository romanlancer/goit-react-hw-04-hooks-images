import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
const ImageGallery = ({ pictures, setInfoForModal }) => {
  return (
    <ImageList>
      {pictures.map(
        ({
          id,
          webformatURL,
          tags,
          likes,
          views,
          comments,
          downloads,
          largeImageURL,
        }) => (
          <ImageGalleryItem
            setInfoForModal={setInfoForModal}
            key={id}
            id={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            likes={likes}
            views={views}
            comments={comments}
            downloads={downloads}
          />
        )
      )}
    </ImageList>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string,
      id: PropTypes.number,
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
      likes: PropTypes.number,
      views: PropTypes.number,
      comments: PropTypes.number,
      downloads: PropTypes.number,
    })
  ),
  setInfoForModal: PropTypes.func,
};
