import React, { memo } from 'react';
import SectionTemplate from '../../../../shared-components/SectionTemplate';
import info from '../../../../../constants.json';

const { experiences } = info;

function normalizeData(data) {
  return data.map(function getNormalizedFunction(dataItem) {
    return {
      itemTitle: dataItem.company,
      secondItemtitle: dataItem.date,
      itemSubtitle: dataItem.profession,
      description: dataItem.description,
      bullets: dataItem.bullets,
    };
  });
}

function Experiences() {
  if (!experiences) {
    return null;
  }
  const normalizedData = normalizeData(experiences);
  return <SectionTemplate title='Experiences' data={normalizedData} />;
}

export default memo(Experiences);
