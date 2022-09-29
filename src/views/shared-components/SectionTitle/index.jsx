import styles from './SectionTitle.module.scss'

function SectionTitle(props) {
    const {
        children,
        className
    } = props;
    return (
        <div className={`${styles.SectionTitleContainer} ${className}`}>
        <div className={styles.SectionTitle}>
            <h3>{children}</h3>
            <div className={styles.Seprator} />
        </div>
        </div>
    )
}

SectionTitle.defaultProps = {
    className: "",
    children: "",
}

export default SectionTitle;