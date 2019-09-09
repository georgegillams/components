import React from 'react';
import { cssModules } from '../helpers/cssModules';

import Skeleton from './Skeleton';
import STYLES from './skeleton.scss';

const getClassName = cssModules(STYLES); // REGEX_REPLACED

const NotificationSkeleton = props => {
  const { className, ...rest } = props;

  const classNames = [getClassName('skeleton__notification')];
  if (className) {
    classNames.push(className);
  }

  return <Skeleton className={classNames.join(' ')} {...rest} />;
};

export default NotificationSkeleton;
