import React from 'react';
import { Helmet } from 'react-helmet';
import info from '../../../constants.json';

const { full_name: fullName } = info;

function MetaTags() {
  return (
    <Helmet>
      {fullName && <title>404</title>}
    </Helmet>
  );
}

export default MetaTags;
