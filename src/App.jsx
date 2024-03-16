
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookmarkBlogs from './Components/BookmarkBlogs/BookmarkBlogs'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = () =>{
    console.log('bookmark added');
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex mt-8'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <BookmarkBlogs></BookmarkBlogs>
      </div>
    </div>
  )
}

export default App
