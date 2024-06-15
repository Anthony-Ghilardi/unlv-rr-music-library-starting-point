import GalleryItem from './GalleryItem'

function Gallery(props){
    // each of the gallery items for the results in my search
    const galleryItems = props.data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })
    return (
        <div>
           {galleryItems}
        </div>
    )
}

export default Gallery
