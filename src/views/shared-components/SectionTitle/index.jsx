import styles from "./SectionTitle.module.scss";
import PropTypes from 'prop-types';

/**
 * section title
 * @returns a h3 with a line below it
 */
function SectionTitle(props) {
  const { children, className } = props;
  return (
    <div className={`${styles.SectionTitleContainer} ${className}`}>
      <div className={styles.SectionTitle}>
        <h3>{children}</h3>
        <div className={styles.Seprator} />
      </div>
    </div>
  );
}

SectionTitle.defaultProps = {
  className: "",
  children: "",
};

SectionTitle.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
}

export default SectionTitle;
