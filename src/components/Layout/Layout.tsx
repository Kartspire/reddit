import React from 'react';
import classes from './layout.module.css';

interface ILayoutProps {
  children?: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return <div className={classes.layout}>{children}</div>;
};
