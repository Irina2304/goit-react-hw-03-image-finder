import { Component } from 'react';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchImg } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };


  componentDidUpdate(_, prevState) {
    if (
        prevState.query !== this.state.query ||
        prevState.page !== this.state.page
        ){
          fetchImg(this.state.page, this.state.query)
        
          .then((data) => {
            this.setState({ loading: true, error: false });
            const { hits } = data;
            this.setState({images: hits})
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


  render() {
    
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        {this.state.loading && (
          <Loader/>
        )}
        {this.state.error && (
          <ErrorMessage/>
        )}
        {this.state.images.length > 0 && <ImageGallery data = {this.state.images}/>}
        {this.state.loading && <Loader/>}
        <Button onClick={this.onLoadMore}/>
      </div>
    )
  }
}