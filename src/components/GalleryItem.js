import { useState } from 'react'
import { Link } from 'react-router-dom'

const GalleryStyles = {'border': '1px solid black', margin: '8px', padding: '8px'}

function GalleryItem(props){
    let {item} = props
    console.log(item)
    let [isDetailView, setIsDetailView] = useState(false)
    const simpleView = () => {
        return (
            <div >
                <h3>{item.trackName}</h3>
                <h4>{item.collectionName}</h4>
            </div>
        )
    }
    const detailView = () => {
        return (
            <div>
                <h2>{item.trackName}</h2>
                <h3>
                    <Link to={`/artist/${item.artistId}`}>
                        {item.artistName}
                    </Link>
                </h3>
                <h3>
                    <Link to={`/album/${item.collectionId}`}>
                        {item.collectionName}
                    </Link>
                </h3>
                <h4>{item.primaryGenreName}</h4>
                <h4>{item.releaseDate}</h4>
            </div>
        )
    }
    return (
        <div onClick={() => setIsDetailView(!isDetailView)}
        style={GalleryStyles}>
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {isDetailView ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem
