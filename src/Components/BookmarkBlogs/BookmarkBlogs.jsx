import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const BookmarkBlogs = ({bookmarks, spentTime}) => {
    console.log(typeof spentTime);

    return (
        <div className="w-1/3 ml-4">
            <div className="w-full h-20 border-2 border-solid border-green-400 flex justify-center items-center rounded-lg bg-purple-100">
                <p className="text-violet-600 text-2xl font-bold">Spent time on read : <span>{spentTime}</span> min</p>
            </div>
            <div className="w-full mt-5 p-6 bg-red-50 rounded-xl">
                <h3 className='text-2xl font-bold text-center py-4'>Bookmarked Blogs : {bookmarks.length}</h3>

                {
                    bookmarks.map((bookmark, idx) => <Bookmark 
                        key={idx}
                        bookmark={bookmark}>   
                        </Bookmark>)
                }

            </div>
            
        </div>
    );
};


BookmarkBlogs.propTypes = {
    bookmarks: PropTypes.array,
    spentTime: PropTypes.number
}

export default BookmarkBlogs;