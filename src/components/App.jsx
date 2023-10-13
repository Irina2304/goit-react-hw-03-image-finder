import { Component } from 'react';
import { Button } from './Button/Button';
import { fetchImg } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { MainApp } from './App.styled';
import Notiflix from 'notiflix';
import { Radio } from  'react-loader-spinner'

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
    perPage: 12,
  };


  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
        this.setState({ loading: true, error: false });
        const {page, query, perPage} = this.state
        fetchImg(page, query, this.perPage)
  
        .then((data) => {
          const { hits, totalHits } = data;

          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
          }));

          const totalPages = Math.ceil(totalHits / perPage);
          if (page === totalPages) {
            this.endOfSearch();
            Button.setAttribute('disabled', '');
          }
        })
                
        .catch(() => {
          this.setState({ error: true });
        })

        .finally(() => {
          this.setState({ loading: false });
        })
      }
        
  }

  onSubmit = (evt) => {
    evt.preventDefault();

    this.setState({
      query: evt.currentTarget.elements.input.value,
      page: 1,
      images: [],
    })
  };


  onLoadMore = () => {
    
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  };


  endOfSearch() {
    Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
  }


  render() {
   
    return (
      <MainApp>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {this.state.loading && (
          <Radio
            visible={true}
            height="80"
            width="80"
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass="radio-wrapper"
          />)}
        {this.state.error && (<ErrorMessage title='Whoops! Error! Please reload this page!' />)}
        {this.state.images.length > 0 && <ImageGallery data={this.state.images} />}
        {this.state.images.length > 0 && <Button onClick={this.onLoadMore}/>}
      </MainApp>
    )
  }
}