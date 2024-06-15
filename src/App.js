
import { useState,useEffect } from "react"
import Gallery from "./components/Gallery"
import SearchBar from "./components/SearchBar"
import ArtistView from "./components/ArtistView"
import AlbumView from "./components/AlbumView"
import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
function App(){
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState([])

  useEffect(() => {
      const fetchData = async () => {
          document.title = `${search} Music`
          const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
          const resData = await response.json()
          if (resData.results.length > 0) {
              setData(resData.results)
          } else {
              setMessage('Not Found')
          }
      }
      fetchData()
  }, [search])
  

  return (
      <Router>
        <Routes>
            <Route path={'/'} element={
                <div>
                    <SearchBar />
                    {message}
                    <Gallery data={data}/>
                </div>
            }/>
            <Route path={"/artist/:id"} element={<ArtistView/>}/>
            <Route path={"/album/:id"} element={<AlbumView/>}/>
        </Routes>
      </Router>
  )
}

export default App

