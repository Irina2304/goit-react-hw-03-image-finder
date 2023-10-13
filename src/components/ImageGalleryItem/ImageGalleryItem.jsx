
import { Component } from 'react';
import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { data, dataModal, tags } = this.props;

    return (
      
        <li className="galleryItem">
            <div >
                <img src={data} alt={tags} onClick={this.openModal}/>
              
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <div>
                        <img src={dataModal} alt={tags} width={700}/>
                    </div>
                </Modal>
            </div>
        </li>
    );
  }
}


