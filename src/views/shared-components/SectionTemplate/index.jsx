import styles from "./SectionTemplate.module.scss";
import MaxWidthController from "../MaxWidthController";
import SectionTitle from "../SectionTitle";
import PropTypes from "prop-types";

function SectionTemplate(props) {
  const { data, title } = props;

  return (
    <MaxWidthController className={styles.Container}>
      {/* title of hole section */}
      <SectionTitle className={styles.SectionTitle}>{title}</SectionTitle>

      {/* items of section */}
      <div className={styles.ExperiencesContainer}>
        {data.map((dataItem) => {
          return (
            <div
              key={dataItem.itemTitle}
              className={styles.ExperienceItemContainer}
            >
              <div className={styles.TitleRow}>
                <h4 className={styles.Company}>{dataItem.itemTitle} </h4>
                {dataItem.secondItemtitle && (
                  <>
                    <span className={styles.VSeprator} />
                    <span className={styles.Date}>
                      ({dataItem.secondItemtitle})
                    </span>
                  </>
                )}
              </div>
              {"itemSubtitle" in dataItem && (
                <h5 className={styles.Profession}>{dataItem.itemSubtitle}</h5>
              )}
              {"description" in dataItem && (
                <p className={styles.Description}>{dataItem.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </MaxWidthController>
  );
}

SectionTemplate.defaultProps = {
  title: "",
  data: [],
};

SectionTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      itemTitle: PropTypes.string.isRequired,
      secondItemtitle: PropTypes.string,
      itemSubtitle: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default SectionTemplate;
