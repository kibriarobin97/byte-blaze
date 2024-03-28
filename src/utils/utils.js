import toast from "react-hot-toast"

export const getBlogs = () => {
    let blogs = []
    const storedBlogs = localStorage.getItem('blogs')
    if (storedBlogs) {
        blogs = JSON.parse(storedBlogs)
    }
    return blogs;
}

export const saveBlogs = blog => {
    let blogs = getBlogs()
    const existsBlogs = blogs.find(b => b.id === blog.id)
    if(!existsBlogs){
        blogs.push(blog)
        localStorage.setItem('blogs', JSON.stringify(blogs))
        toast.success('Successfully added to bookmark')
    }
    else{
        return toast.error('Already bookmarked')
    }
}


export const deleteBlogs = (id) => {
    let blogs = getBlogs()
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Successfully deleted this item')
}