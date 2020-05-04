import React, { FC } from 'react';
import styles from './hero.less';

import { connect } from 'dva'


function Hero(props) {
  console.log(props.hero);
  return (
    <div>
      <h1 className={styles.title}>Page hero</h1>
      <h2>This is {props.hero.name}</h2>
    </div>
  );
}
export default connect((hero) => hero)(Hero);
