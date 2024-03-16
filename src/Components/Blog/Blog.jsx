import PropTypes from 'prop-types';
import { BsBookmark } from "react-icons/bs";

const Blog = ({ blog, handleAddToBookmarks}) => {
    console.log(blog);
    const {cover, title, name, author_img, posted_date, reading_time, hashtags} = blog
    return (
        <div className='mb-24'>
            <img className='rounded-2xl' src={cover} alt={`${name}'s blog`} />
            <div className='flex justify-between items-center my-8'>
                <div className='flex gap-5'>
                    <img className='w-[60px] rounded-lg' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{name}</h3>
                        <p className='font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-xl font-medium mr-4'>{reading_time} min read</span>
                    <button onClick={handleAddToBookmarks}><BsBookmark /></button>
                </div>
            </div>
            <h3 className='text-4xl font-bold my-5'>{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='mr-4' key={idx}><a href="">#{hash} </a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;