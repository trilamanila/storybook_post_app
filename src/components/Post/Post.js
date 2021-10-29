import styles from "./Post.module.scss";
import { FaHeart, FaShareAlt } from "react-icons/fa";

const Post = ({ content, date }) => {
  return (
    <>
      <p className={styles.postsContent}>{content}</p>
      <ul className={styles.postMeta}>
        <li className={styles.postsMetaData}>
          <FaHeart />
          23
        </li>
        <li className={styles.postsMetaData}>
          <FaShareAlt />
          Share
        </li>
        <li className={styles.postsMetaData}>{date}</li>
      </ul>
    </>
  );
};

export default Post;
