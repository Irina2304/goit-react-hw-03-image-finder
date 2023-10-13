import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ data }) => {

    return (
        
        <ul className="gallery">
            {data.map(item => (
                <ImageGalleryItem
                    key={item.id}
                    data={item.webformatURL}
                    dataModal={item.largeImageURL}
                    tags={item.tags}
                />
            ))}
        </ul>
    )
}