import React from 'react';
import { InputBox } from '../../components/InputBox';
import styles from './Popup.module.scss'
const Popup: React.FC = () => {
  return (
    <div className={styles.root} >
      <InputBox />
    </div>
  );
};

export default Popup;