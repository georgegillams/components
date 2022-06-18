import React from 'react';
import { Wrapper } from './spartan-medal.styles';

const SpartanLogo = (props) => {
  const logo = <circle cx="37.5" cy="37.5" r="22" />;

  return <Wrapper {...props}>{logo}</Wrapper>;
};

export default SpartanLogo;
