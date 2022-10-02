import styles from './Page.module.scss';

/**
 * simple layout for pages that renders elements vertically and
 *  it could contains footer or header or another things
 */
const Page = (props) => {
  const { children } = props;

  return (
    <div className={styles.Page}>
      {children}
    </div>
  )
};

export default Page;