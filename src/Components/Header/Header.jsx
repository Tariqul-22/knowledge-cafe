import profileImage from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className='my-10 flex justify-between items-center'>
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={profileImage} alt="" />
            </div>
            <hr />
        </div>
    );
};

export default Header;