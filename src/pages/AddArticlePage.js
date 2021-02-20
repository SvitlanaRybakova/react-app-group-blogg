import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ArticleContext } from '../contexts/ArticleContext';
import { inputs, button, pageTitle } from '../styles/AddArticlePage.module.css';
import { ThemeContext } from "../contexts/ThemeContext";
import { v4 as uuidv4 } from 'uuid'


function AddArticlePage() {
    const { addArticle } = useContext(ArticleContext);
    const { isGreenTheme, green, dark } = useContext(ThemeContext);
    const theme = isGreenTheme ? green : dark;


    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [date, setDate] = useState('')
    const [author, setAuthor] = useState('')
    const history = useHistory()

    function currentDate() {
        const today = new Date(); 
        // for months january-sept (index 1-9) add 0 in front of month's index
        const prefix = today.getMonth() <= 9 ? '0' : '' 
        const date = today.getFullYear() + '-' + prefix + (today.getMonth() + 1) + '-' + today.getDate();
        return date
    }

    const article = {
        id: uuidv4(),
        title,
        content,
        date: currentDate(),
        author
    }



    return (
        <form onSubmit={(e) => addArticle(e, article, history)}>
            <h3 className={pageTitle} style={{ color: theme.navbar }}>Add a new article</h3>
            <div className={inputs}>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Author"
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                <textarea
                    type="text"
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)}
                    required
                />

                <button
                    type='submit'
                    className={button}
                    style={{ background: theme.navbar, color: theme.fontColor }}
                >Submit</button>
            </div>
        </form>
    )
}

export default AddArticlePage