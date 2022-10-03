import React, { memo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../shared-components/Button';
import {
  customKeyframes,
  initialNumListConfigs,
  maxBlur,
  maxFontSize,
  minFontSize,
} from './config';
import MetaTags from './MetaTags';
import styles from './NotFound.module.scss';

// a number with random properties which floats in the page
const NumberItem = styled.div`
  position: fixed;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  filter: blur(${(props) => props.blur}px);
  animation: ${(props) => props.keyframes} ${(props) => props.transition}s
    linear infinite;
  transition: 1s;
  font-size: ${(props) => props.fontSize}px;
  user-select: none;
`;

function NotFound() {
  const itemRefs = useRef([]);

  /**
   * updates all the floatble number in page with random values
   */
  function updateShuffle() {
    itemRefs.current.forEach((_, itemIndex) => {
      itemRefs.current[itemIndex].style.top = `${Math.random() * window.innerHeight}px`;
      itemRefs.current[itemIndex].style.left = `${Math.random() * window.innerWidth}px`;
      itemRefs.current[itemIndex].style.filter = `blur(${Math.random() * maxBlur}px)`;
      itemRefs.current[itemIndex].style.fontSize = `${
        Math.ceil(Math.random() * (maxFontSize - minFontSize)) + minFontSize
      }px`;
    });
  }

  useEffect(function handleResize() {
    window.addEventListener('resize', updateShuffle);
    return function unmounting() {
      window.removeEventListener('resize', updateShuffle);
    };
  }, []);

  return (
    <>
      <MetaTags />

      {/* floatable numbers */}
      {initialNumListConfigs.map(function makeConfigItemComponent(
        configItem,
        configItemIndex,
      ) {
        const { goUp, transform, ...otherConfigs } = configItem;
        return (
          <NumberItem
            key={`num-${configItemIndex}`}
            ref={function assignRefItem(el) {
              itemRefs.current[configItemIndex] = el;
            }}
            {...otherConfigs}
            keyframes={customKeyframes(goUp, transform)}
          >
            {configItem.value}
          </NumberItem>
        );
      })}

      {/* center content */}
      <div className={styles.Container}>
        <h1 onClick={updateShuffle} className={styles.Message}>
          404
        </h1>
        <Link to='/' className={styles.ButtonContainer}>
          <Button className={styles.Button}>Home</Button>
        </Link>
      </div>
    </>
  );
}

export default memo(NotFound);
