import { useEffect, useState } from "react";
import { deleteBlogs, getBlogs } from "../../utils/utils";
import Blog from "../Blog/Blog";
import EmptyState from "../EmptyState/EmptyState";

const Bookmarks = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const data = getBlogs()
        setBlogs(data)
    }, [])

    const handleDelete = id => {
        deleteBlogs(id)
        const data = getBlogs()
        setBlogs(data)
    }

    if (blogs.length < 1) {
        return <EmptyState message='No Bookmarks Available!'></EmptyState>
    }
    

    return (
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12 my-6">
            <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map(blog => <Blog
                        handleDelete={handleDelete}
                        deletable={true}
                        key={blog.id}
                        blog={blog}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;