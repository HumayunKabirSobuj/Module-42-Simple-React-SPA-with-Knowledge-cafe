
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    console.log(blog);
    const { title, cover, reading_time, author_img, author,posted_date,hashtags } = blog;
    return (
        <div>
            <img className='h-96 w-full object-cover' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between '>
                <div className='flex gap-4 items-center'>
                    
                     <img className='w-14 h-14 ' src={author_img} alt="" />
                     <div>
                        <h1 className='text-2xl font-bold'>{author}</h1>
                        <p className='text-base font-light text-opacity-60'>{posted_date}</p>
                     </div>
                    

                </div>
                <div>

                    <span>{reading_time} min read</span>

                </div>
            </div>
            <h2 className="text-4xl font-bold">Title : {title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=> <span key={idx}> <a href=""> #{hash} </a> </span> )
                }
            </p>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;