import styles from "../styles/ArticleItem.module.css";
import { ArticleContext } from "../contexts/ArticleContext";
import { useContext } from "react";

function ArticleItem(){
  const { articles } = useContext(ArticleContext)
  return(
    <div className={styles.articleItem}>
      {articles.map(article =>{
        return(
          <section className={styles.content}>
          <h1 className={styles.header}>{article.title}</h1>
          <p className={styles.article}>{article.content}</p>
          <div className={styles.detailContainer}>
            <span className={styles.timestamp}>{article.date}</span>
            <span className={styles.author}>{article.author}</span>
          </div>
      </section>
        )
      })}
    </div>
  );
}

export default ArticleItem;