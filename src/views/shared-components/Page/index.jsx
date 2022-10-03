import PropTypes from 'prop-types';
import React from 'react';
import styles from './Page.module.scss';

/**
 * simple layout for pages that renders elements vertically and
 *  it could contains footer or header or another things
 */
function Page(props) {
  const { children } = props;

  return (
    <div className={styles.Page}>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Page;
