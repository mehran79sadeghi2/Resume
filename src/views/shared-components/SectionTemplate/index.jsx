import React from 'react';
import PropTypes from 'prop-types';
import styles from './SectionTemplate.module.scss';
import MaxWidthController from '../MaxWidthController';
import SectionTitle from '../SectionTitle';

function SectionTemplate(props) {
  const { data, title } = props;

  function renderSectionItem(dataItem) {
    return (
      <div key={dataItem.itemTitle} className={styles.ExperienceItemContainer}>
        <span className={styles.TitleRow}>
          {Boolean(dataItem.itemTitle) && (
            <span className={styles.Company}>
              {dataItem.itemTitle}
              {' '}
            </span>
          )}
          {dataItem.secondItemtitle && (
            <>
              <span className={styles.VSeprator} />
              <span className={styles.Date}>
                (
                {dataItem.secondItemtitle}
                )
              </span>
            </>
          )}
        </span>
        {Boolean(dataItem.itemSubtitle) && (
          <h5 className={styles.Profession}>{dataItem.itemSubtitle}</h5>
        )}
        {Boolean(dataItem.description) && (
          <p className={styles.Description}>{dataItem.description}</p>
        )}
        {Boolean(dataItem) && Array.isArray(dataItem.bullets) && (
          <ul className={styles.UlContainer}>
            {dataItem.bullets.map(function renderBulletItem(
              bulletItem,
              bulletIndex,
            ) {
              return <li key={`bullet-${bulletIndex}`}>{bulletItem}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }

  return (
    <MaxWidthController className={styles.Container}>
      {/* title of hole section */}
      {Boolean(title) && (
        <SectionTitle className={styles.SectionTitle}>{title}</SectionTitle>
      )}

      {/* items of section */}
      <div className={styles.ExperiencesContainer}>
        {data.map(renderSectionItem)}
      </div>
    </MaxWidthController>
  );
}

SectionTemplate.defaultProps = {
  title: '',
  data: [],
};

SectionTemplate.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      itemTitle: PropTypes.string,
      secondItemtitle: PropTypes.string,
      itemSubtitle: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

export default SectionTemplate;
