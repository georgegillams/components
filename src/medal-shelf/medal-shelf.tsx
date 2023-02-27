import React from 'react';
import { Shelf } from './medal-shelf.styles';

export interface MedalShelfProps extends React.HTMLAttributes<HTMLDivElement> {}

const MedalShelf = (props: MedalShelfProps) => {
  return <Shelf {...props} />;
};

export default MedalShelf;
