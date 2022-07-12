import React from 'react';
import Section from '../section';

import { commonPropTypes, commonDefaultProps } from '../section/constants';

const Subsection = (props) => <Section isSubsection {...props} />;

Subsection.propTypes = {
  ...commonPropTypes,
};

Subsection.defaultProps = {
  ...commonDefaultProps,
};

export default Subsection;
