import Modal from 'react-modal';

export const ModalWindow = ({ isModalOpen, closeModal, dataModal, tags }) => {
    
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
    
    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
        <div>
            <img src={dataModal} alt={tags} width={700}/>
        </div>
        </Modal>
    )
    
}