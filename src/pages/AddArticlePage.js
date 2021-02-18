import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ArticleContext } from '../contexts/ArticleContext'
import { inputs } from '../styles/AddArticlePage.module.css'


function AddArticlePage() {
    const { addArticle } = useContext(ArticleContext)
    

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [author, setAuthor] = useState('')
    const history = useHistory()

    function currentDate() {
        const today = new Date();
        const date = today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear();
        return date
    }

    const article = {
        id: 'some id',
        title,
        content,
        date: currentDate(),
        author
    }

    

    return(
        <form onSubmit={(e) => addArticle (e, article, history)}>
            <h3>Add a new article:</h3>
            <div className={inputs}>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
                <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)}/>
                <textarea type="text" placeholder="Content" onChange={(e) => setContent(e.target.value)}/>
                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default AddArticlePage