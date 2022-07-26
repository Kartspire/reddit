import React from 'react';
import { Dropdown } from '../../../Dropdown';
import styles from './menu.module.css';
import { MenuLink } from './MenuLink';
import { Icon } from '../../../Icon';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <Icon name={'menu'} />
          </button>
        }
      >
        <ul className={styles.dropdown}>
          <MenuLink>
            <Icon name={'comments'} size={'16'} />
            Комментарии
          </MenuLink>
          <MenuLink>
            <Icon name={'share'} size={'16'} />
            Поделиться
          </MenuLink>
          <MenuLink>
            <Icon name={'hide'} size={'16'} />
            Скрыть
          </MenuLink>
          <MenuLink>
            <Icon name={'save'} size={'16'} />
            Сохранить
          </MenuLink>
          <MenuLink>
            <Icon name={'report'} size={'16'} />
            Пожаловаться
          </MenuLink>
          <MenuLink className={styles.closeButton}>Закрыть</MenuLink>
        </ul>
      </Dropdown>
    </div>
  );
}
