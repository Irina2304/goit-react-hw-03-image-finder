import { Component } from 'react';
import { Button } from './Button/Button';
import { fetchImg } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { Loader } from './Loader/Loader';
import { MainApp } from './App.styled';
import Notiflix from 'notiflix';



export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    perPage: 12,
    isLoadMore: false,
  };


  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
        this.setState({ loading: true, error: false, isLoadMore: false });
        const {page, query, perPage} = this.state
        fetchImg(page, query, perPage)
  
        .then((data) => {
          const { hits, totalHits } = data;

          if (hits.length === 0) {
            this.noImagesFound();
            return;
          }

          const totalPages = Math.ceil(totalHits / perPage);

          if (page < totalPages) {
            this.setState({ isLoadMore: true });
          }

          this.setState( prevState => ({
            images: [...prevState.images, ...hits],
          }));
        })
                
        .catch(() => {
          this.setState({ error: true });
        })

        .finally(() => {
          this.setState({ loading: false });
        })
      }
        
  }

  getValue = (value) => {

    this.setState({
      query: value,
      page: 1,
      images: [],
    })
  };


  onLoadMore = () => {
    
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  };


  noImagesFound() {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
    );
}


  render() {
   
    return (
      <MainApp>
        <Searchbar getValue={this.getValue}></Searchbar>
        {this.state.loading && (<Loader/>)}
        {this.state.error && (<ErrorMessage title='Whoops! Error! Please reload this page!' />)}
        {this.state.images.length > 0 && <ImageGallery data={this.state.images} />}
        {this.state.isLoadMore > 0 && <Button onClick={this.onLoadMore}/>}
      </MainApp>
    )
  }
}