
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookmarkBlogs from './Components/BookmarkBlogs/BookmarkBlogs'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [spentTime, setSpentTime] = useState(0)

  const handleAddToBookmarks = (blog) =>{
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleSpentTime = (givenId, time) =>{
    setSpentTime(spentTime + time);
    // remove Bookmark which is read
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.Id !== givenId);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <div className='md:flex mt-8'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleSpentTime={handleSpentTime}></Blogs>
        <BookmarkBlogs bookmarks={bookmarks} spentTime={spentTime}></BookmarkBlogs>
      </div>
    </div>
  )
}

export default App
