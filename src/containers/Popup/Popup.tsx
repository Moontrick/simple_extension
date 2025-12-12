import React from 'react';
import { InputBox } from '../../components/InputBox';
import styles from './Popup.module.scss'
import { Button } from 'antd';
const Popup: React.FC = () => {
  return (
    <div className={styles.root} >
      <InputBox />123
      <Button>
        123
      </Button>
    </div>
  );
};

export default Popup;