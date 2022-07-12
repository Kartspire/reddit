import React from 'react';
import styles from './textcontent.module.css';
import avatar from './avatar.svg';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={avatar} alt='avatar' />
          <a href='#user-url' className={styles.username}>
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликовано</span>4 часа назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href='#post-url' className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности Следует нана гнанганал нанална гнаана
        </a>
      </h2>
    </div>
  );
}
