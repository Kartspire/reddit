import React from 'react';
import styles from './preview.module.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src='https://cdn.dribbble.com/userupload/2992063/file/original-93496e86d5d3627d2d132c3328ab8ab4.png?compress=1&resize=1200x900&vertical=top'
        alt=''
      />
    </div>
  );
}
