import React from 'react';
import styles from './Hero.module.scss';
import MaxWidthController from '../../../../shared-components/MaxWidthController';
import ProfilePicture from './components/ProfilePicture';
import Contents from './components/Contents';

function Hero() {
  return (
    <MaxWidthController className={styles.Hero}>
      <ProfilePicture />
      <Contents />
    </MaxWidthController>
  );
}

export default Hero;
