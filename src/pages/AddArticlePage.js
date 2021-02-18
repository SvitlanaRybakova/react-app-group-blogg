import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ArticleContext } from '../contexts/ArticleContext'

function AddArticlePage() {
    const { handleSubmit } = useContext(ArticleContext)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [author, setAuthor] = useState('')
    const history = useHistory()

    const article = {
        id: 'some id',
        title,
        content,
        date: '18 feb 2020',
        author
    }

    return(
        <form onSubmit={(e) => handleSubmit(e, article, history)}>
            <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="content" onChange={(e) => setContent(e.target.value)}/>
            <input type="text" placeholder="author" onChange={(e) => setAuthor(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddArticlePage