import info from "./../../../../../constants.json";
import SectionTemplate from "../../../../shared-components/SectionTemplate";
import { memo } from "react";

const { educations } = info;

function normalizeData(data) {
    return data.map((dataItem) => {
      return {
        itemTitle: dataItem.academy,
        secondItemtitle: dataItem.date,
        itemSubtitle: dataItem.major,
        description: dataItem.description,
      };
    });
  }

function Educations() {
    if (!educations) {
        return null;
    }

    return <SectionTemplate title="Educations" data={normalizeData(educations)} />
}

export default memo(Educations);