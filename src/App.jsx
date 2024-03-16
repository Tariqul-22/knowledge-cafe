
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookmarkBlogs from './Components/BookmarkBlogs/BookmarkBlogs'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) =>{
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex mt-8'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <BookmarkBlogs bookmarks={bookmarks}></BookmarkBlogs>
      </div>
    </div>
  )
}

export default App
