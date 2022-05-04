import { fetchPictures } from './PixabayApi';
import { Component } from 'react';
import ImageGallery from '../components/ImageGallery';
import Loader from '../components/Loader';
import Button from '../components/Button';
import { Notify } from 'notiflix';

import Searchbar from '../components/Searchbar';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class SearchInfo extends Component {
  static defaultProps = {
    initialPage: 1,
  };
  state = {
    pictures: [],
    error: null,
    status: Status.IDLE,
    page: this.props.initialPage,
  };

  incrementPage = () => {
    this.setState(
      prevState => ({
        page: (prevState.page += 1),
      }),
      () => {
        const nextQuery = this.props.query;

        this.setState({ status: Status.PENDING });
        const page = this.state.page;
        console.log(page);
        fetchPictures(nextQuery, page).then(data => {
          console.log(data);
          this.setState({
            pictures: [...this.state.pictures, ...data.hits],
            status: Status.RESOLVED,
          });
        });
      }
    );
  };

  resetPage = () => {
    this.setState({ page: 1 });
  };

  componentDidUpdate(prevProps) {
    const prevQuery = prevProps.query;
    const nextQuery = this.props.query;
    const page = this.state.page;

    if (prevQuery !== nextQuery) {
      this.setState({ status: Status.PENDING });
      this.resetPage();
      fetchPictures(nextQuery, page).then(pictures => {
        if (pictures.totalHits !== 0 && pictures.hits.length !== 0) {
          Notify.success(`Hooray! We found ${pictures.totalHits} images.`);
        } else {
          Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        }
        this.setState({
          pictures: [...pictures.hits],
          status: Status.RESOLVED,
        });
      });
    }
  }

  render() {
    const { pictures, status } = this.state;

    const { query } = this.props;

    if (status === 'pending') {
      return (
        <>
          <Loader query={query} />;
          <ImageGallery pictures={pictures} />
        </>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery pictures={pictures} />
          {pictures.length !== 0 && (
            <Button incrementPage={this.incrementPage} />
          )}
        </>
      );
    }
  }
}
