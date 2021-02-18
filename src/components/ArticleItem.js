import styles from "../styles/ArticleItem.module.css";

function ArticleItem(){
  return(
    <div className={styles.articleItem}>
      <section className={styles.content}>
      <h1 className={styles.header}>Article header 1</h1>
      <p className={styles.article}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className={styles.detailContainer}>
      <span className={styles.timestamp}>12:34 2021-02-16</span>
      <span className={styles.author}>Mrs. Authorsen</span>
      </div>
      </section>
      <section className={styles.content}>
      <h1 className={styles.header}>Article header 2</h1>
      <p className={styles.article}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className={styles.detailContainer}>
      <span className={styles.timestamp}>15:55 2021-02-18</span>
      <span className={styles.author}>C00l Kid 2000</span>
      </div>
      </section>
    </div>
  );
}

export default ArticleItem;