import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({data}) => {
    return (
        
        <ul>
            console.log(data);
            {data.map(item => (
                <ImageGalleryItem key={item.data.id} data={data} />
            ))}
        </ul>
    )
}