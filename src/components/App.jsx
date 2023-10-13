import { Component } from 'react';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
import { fetchImg } from 'api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };


  handleSubmit = evt => {
     evt.preventDefault();

  //   // Сохраняем термин поиска (query)
  //   // Сбрасываем page в 1
  //   // Очистить массив картинок
  // };

  // handleSubmit = evt => {
  //   evt.preventDefault();

  //   // Сохраняем термин поиска (query)
  //   // Сбрасываем page в 1
  //   // Очистить массив картинок
  // };

  // handleLoadMore = () => {
  //   this.setState(prevState => prevState.page + 1);
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.query !== this.state.query ||
  //     prevState.page !== this.state.page
  //   ) {
  //     // HTTP-запрос с setState
  //   }
  // }

  render() {
    fetchImg(this.state.page)
  
      .then((data) => {
        const { hits } = data;
        // console.dir(hits);
      })
    
        
    return (
      <div>
        <Searchbar></Searchbar>
        <ImageGallery data = {data}></ImageGallery>
        {/* <onSubmit={this.handleSubmit}>Search form</onSubmit=>
        {this.state.images.length > 0 && <div>GALLERY</div>}
        {this.state.loading && <div>Loader...</div>} */}
        <button onClick={this.handleLoadMore}>Load more</button>
      </div>
    )
  }
}