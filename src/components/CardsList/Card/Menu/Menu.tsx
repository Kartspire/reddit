import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { CommentsIcon } from './icons/CommentsIcon';
import styles from './menu.module.css';
import { MenuIcon } from './icons/MenuIcon';
import { HideIcon } from './icons/HideIcon';
import { ShareIcon } from './icons/ShareIcon';
import { SaveIcon } from './icons/SaveIcon';
import { ReportIcon } from './icons/ReportIcon';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <ul className={styles.dropdown}>
          <li>
            <CommentsIcon /> Комментарии
          </li>
          <li>
            <ShareIcon /> Поделиться
          </li>
          <li>
            <HideIcon /> Скрыть
          </li>
          <li>
            <SaveIcon /> Сохранить
          </li>
          <li>
            <ReportIcon /> Пожаловаться
          </li>
          <li>Закрыть</li>
        </ul>
      </Dropdown>
    </div>
  );
}
