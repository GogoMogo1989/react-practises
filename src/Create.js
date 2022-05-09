
import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create= () => {

    const[title, setTitle] = useState("")
    const[body, setBody] = useState("")
    const[author, setAuthor] = useState("mario") 
    const[isPending, setIsPending] = useState(false)
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault() //emiatt ha a submutra kattintounk, nem töldőik be az oldal egyből
        const blog = {title, body, author}

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {  //ez a post method pattern
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added")
            setIsPending(false)
            history.push('/') //ezzel a methódussal a submit után, a homepage-re irányít a honlap.
        }) 
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    
                >
                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) =>setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="joshi">joshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                { isPending && <button disabled>Add blog...</button>}
                <p>{ title }</p>
                <p> {body}</p>
                <p> {author}</p>
            </form>
        </div>
    )
}
export default Create