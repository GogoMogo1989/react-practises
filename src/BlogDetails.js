import { useParams } from "react-router-dom"
import useFetch from "./useFetch"
import { useHistory } from "react-router-dom"

const BlogDetails = () => {

    const { id } = useParams()
    const { data, isPending, error} = useFetch('http://localhost:8000/blogs/' +id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' +data.id,{
            method: 'Delete'
        }).then(()=>{
           history.push('/')
        })
    }
    

    return(
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>Something wrong...</div>}
            {data && 
                <article>
                    <h2>{data.title}</h2>
                    <h3>{data.author}</h3>
                    <p>{data.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>}
        </div>
    )
}

export default BlogDetails