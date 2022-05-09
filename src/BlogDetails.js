import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

const BlogDetails = () => {

    const { id } = useParams()
    const { data, isPending, error} = useFetch('http://localhost:8000/blogs/' +id)

    

    return(
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>Something wrong...</div>}
            {data && 
                <article>
                    <h2>{data.title}</h2>
                    <h3>{data.author}</h3>
                    <p>{data.body}</p>
                </article>}
        </div>
    )
}

export default BlogDetails