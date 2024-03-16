import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmarks}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/Blogs/blogs.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h3 className="text-4xl">Total Blogs :{blogs.length}</h3>
            {
                blogs.map(blog => <Blog 
                    key={blog.Id} 
                    blog={blog}
                    handleAddToBookmarks={handleAddToBookmarks}>    
                    </Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func
}

export default Blogs;