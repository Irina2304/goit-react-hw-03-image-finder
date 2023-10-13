import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImgGallery } from "./ImageGallery.styled"

export const ImageGallery = ({ data }) => {

    return (
        
        <ImgGallery className="gallery">
            {data.map(item => (
                <ImageGalleryItem
                    key={item.id}
                    data={item.webformatURL}
                    dataModal={item.largeImageURL}
                    tags={item.tags}
                />
            ))}
        </ImgGallery>
    )
}