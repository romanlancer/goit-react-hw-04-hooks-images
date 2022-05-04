import styled from 'styled-components';
import { FaRegThumbsUp, FaRegEye, FaRegComments } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
const ImageGallery = ({ pictures }) => {
  return (
    <ImageList>
      {pictures.map(
        ({ id, webformatURL, tags, likes, views, comments, downloads }) => (
          <ImageItem key={id} id={id}>
            <div>
              <ImageWrapper>
                <Image src={webformatURL} alt={tags} loading="lazy" />
              </ImageWrapper>

              <InfoWrapper>
                <Info>
                  <b>
                    <FaRegThumbsUp size={24} color="#2bb9a9" />
                  </b>
                  <Comments> {likes}</Comments>
                </Info>
                <Info>
                  <b>
                    <FaRegEye size={24} color="#2bb9a9" />
                  </b>
                  <Comments>{views}</Comments>
                </Info>
                <Info>
                  <b>
                    <FaRegComments size={24} color="#2bb9a9" />
                  </b>
                  <Comments>{comments}</Comments>
                </Info>
                <Info>
                  <b>
                    <FiDownload size={24} color="#2bb9a9" />
                  </b>
                  <Comments>{downloads}</Comments>
                </Info>
              </InfoWrapper>
            </div>
          </ImageItem>
        )
      )}
    </ImageList>
  );
};

export default ImageGallery;

const ImageList = styled.ul`
  margin: 0 auto;
  display: grid;
  gap: 25px;
  padding: 0 30px;

  @media screen and (min-width: 480px) {
    width: 480px;
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const ImageItem = styled.li`
  box-shadow: 0px 3px 5px -4px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 3px 5px -4px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 3px 5px -4px rgba(0, 0, 0, 1);
  border: 1px solid #e2d3d3bc;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transform: scale(1);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  border: 3px solid transparent;
`;

const InfoWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 11px 13px -3px rgba(0, 0, 0, 0.21) inset;
  -webkit-box-shadow: 0px 11px 13px -3px rgba(0, 0, 0, 0.21) inset;
  -moz-box-shadow: 0px 11px 13px -3px rgba(0, 0, 0, 0.21) inset;
`;
const Info = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Comments = styled.b`
  color: #2bb9a9;
  font-size: 14px;
`;
