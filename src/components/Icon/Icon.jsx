import React, { useEffect } from 'react';
import styles from './icon.module.css';
import { icons } from './icons';

// interface IIconProps {
//   name: string;
//   size: string;
// }

export const Icon = ({ name, size }) => {
  console.log(icons);
  const icon = icons.filter((el) => el.props.id === name)[0];
  useEffect(() => {
    if (size) {
      document.getElementById(name).setAttribute('width', size);
      document.getElementById(name).setAttribute('height', size);
    }
  });
  return icon;
};
