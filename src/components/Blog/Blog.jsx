import { Link } from "react-router-dom";
import placeholderImage from '../../assets/404.jpg'
import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';


const Blog = ({ blog, deletable, handleDelete }) => {

    const { title, description, published_at, cover_image, id } = blog;

    return (
        <div className="flex relative">
            <Link
                to={`/blog/${id}`}
                className="max-w-sm mx-auto group transition border-2 border-primary hover:scale-105 hover:border-secondary border-opacity-30 rounded-md hover:no-underline focus:no-underline ">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={cover_image || placeholderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {
                deletable && <div onClick={()=>handleDelete(id)} className="absolute bg-primary hover:bg-secondary cursor-pointer bg-opacity-40 rounded-full p-1 hover:scale-105 -top-4 -right-4"><MdDeleteForever className="text-3xl text-white" /></div>
            }
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object,
    deletable: PropTypes.bool,
    handleDelete: PropTypes.func
}

export default Blog;