// import { Modal } from "components/Modal/Modal"

export const ImageGalleryItem = ({data}) => {
    return (
        <li className="galleryItem">
            <img src= {data.webformatURL} alt="cat" />
        </li>
    )
}