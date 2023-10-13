// import { Modal } from "components/Modal/Modal"

export const ImageGalleryItem = ({data}) => {
    return (
        <li className="galleryItem">
            <div>
                <img src= {data} alt="cat" />
            </div>
        </li>
    )
}