import styles from "../styles/ArticleItem.module.css";

function ArticleItem(){
  return(
    <div className="articleItem">
      <section>
      <h1 className="header">Article header</h1>
      <p className="article">Lorem Impsum</p>
      <span className="timestamp">12:34 2021-02-16</span>
      <span className={styles.author}>Mrs Authorsen</span>

      </section>
    </div>
  );
}

export default ArticleItem;