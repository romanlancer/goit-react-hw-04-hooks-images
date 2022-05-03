import { fetchPictures } from './PixabayApi';
import { Component } from 'react';
import ImageGallery from '../components/ImageGallery';
import Loader from '../components/Loader';
import { Notify } from 'notiflix';
import Searchbar from '../components/Searchbar';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class SearchInfo extends Component {
  state = {
    pictures: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.query;
    const nextName = this.props.query;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      fetchPictures(nextName).then(pictures => {
        if (pictures.totalHits !== 0 && pictures.hits.length !== 0) {
          Notify.success(`Hooray! We found ${pictures.totalHits} images.`);
        } else {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        this.setState({ pictures, status: Status.RESOLVED });
      });
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  render() {
    const { pictures, status } = this.state;
    const { query } = this.props;

    if (status === 'pending') {
      return <Loader query={query} />;
    }

    if (status === 'resolved') {
      return <ImageGallery pictures={pictures.hits} />;
    }
  }
}
