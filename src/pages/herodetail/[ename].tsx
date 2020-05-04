import React from 'react';
import styles from './ename.less';

export default (props) => {
  return (
    <div>
      <h1 className={styles.title}>Page herodetail/{props.match.params.ename}</h1>
    </div>
  );
}
