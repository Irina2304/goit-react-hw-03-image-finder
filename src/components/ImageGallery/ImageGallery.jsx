import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({ data }) => {
    console.log(data);
    return (
        
        <ul className="gallery">
            {data.map(item => (
                <ImageGalleryItem
                    key={item.id}
                    data={item.webformatURL}
                />
            ))}
        </ul>
    )
}