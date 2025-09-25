const PostCard = ({ post }) => {
    const { title, category, content } = post;
    return (
        <div className='card'>
            <div className='card-body'>
                <h3>{title}</h3>
                <p>Categoria : {category}</p>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default PostCard;