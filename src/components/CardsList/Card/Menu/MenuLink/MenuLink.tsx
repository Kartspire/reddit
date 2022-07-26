import React from 'react';
import styles from './menulink.module.css';
interface IMenuLinkProps {
  children: React.ReactNode;
  className?: string;
}

export const MenuLink: React.FC<IMenuLinkProps> = ({ className, children }) => {
  return (
    <li>
      <button className={className}>{children}</button>
    </li>
  );
};
