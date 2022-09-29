import styles from './Page.module.scss';


const Page = (props) => {
  const { children } = props;

  return (
    <div className={styles.Page}>
      {children}
    </div>
  )
};

export default Page;