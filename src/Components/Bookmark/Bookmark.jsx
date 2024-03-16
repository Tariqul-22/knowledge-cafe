import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className="p-6 bg-white rounded-lg mb-5">
            <p className="text-lg font-semibold">{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark :PropTypes.object
}

export default Bookmark;