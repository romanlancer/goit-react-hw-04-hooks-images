import styled from 'styled-components';

const ImageGallery = ({ pictures }) => {
  return (
    <ul>
      {pictures.map(({ id, webformatURL }) => (
        <li key={id} id={id}>
          <img src={webformatURL} alt="" />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
