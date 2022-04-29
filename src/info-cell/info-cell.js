import React from 'react';
import PropTypes from 'prop-types';
import { InnerWrapper, OuterWrapper, Title } from './info-cell.styles';
import { SIZES } from '../text';
import { INFO_CELL_STYLES } from './constants';

const InfoCell = (props) => {
  const {
    title,
    content,
    aux,
    hasBeenMostlyInView,
    hasBeenFullyInView,
    cellStyle,
    ...rest
  } = props;

  // remove props provided by `withScroll` which we don't need to prevent warnings
  delete rest.fullyInView;
  delete rest.hasBeenInView;
  delete rest.hasBeenJustInView;
  delete rest.hasBeenOutOfView;
  delete rest.inView;
  delete rest.justInView;
  delete rest.mostlyInView;
  delete rest.outOfView;
  delete rest.scrollPosition;
  delete rest.scrollPositionVh;

  const showAux = hasBeenMostlyInView || hasBeenFullyInView;

  // const classNames = [getClassName('info-cell__outer')];
  // if (cellStyle === INFO_CELL_STYLES.dark) {
  //   classNames.push(getClassName('info-cell__outer--dark'));
  // }

  // const auxClassNames = [getClassName('info-cell__aux')];
  // const auxInnerClassNames = [getClassName('info-cell__aux-inner')];
  // const auxInnerClassNamesAnimated = [
  //   getClassName('info-cell__aux-inner', 'info-cell__aux-inner--animated'),
  // ];
  // const auxOuterClassNames = [getClassName('info-cell__aux-outer')];

  // if (!showAux) {
  //   auxInnerClassNamesAnimated.push(
  //     getClassName('info-cell__aux-inner--hidden'),
  //   );
  // }

  // const titleClassNames = [getClassName('info-cell__title')];
  // if (content) {
  //   titleClassNames.push(getClassName('info-cell__title--with-content'));
  // }

  return (
    <OuterWrapper cellStyle={cellStyle} {...rest}>
      <InnerWrapper>
        <div className={'info-cell__text-container'}>
          <Title as="h3" size={SIZES.xl}>
            {title}
          </Title>
          {content && content}
        </div>
        <div>
          <div className={'auxInnerClassNamesAnimated'}>
            <div className={'auxClassNames'}>{aux && aux}</div>
          </div>
        </div>
      </InnerWrapper>
    </OuterWrapper>
  );
};

InfoCell.propTypes = {
  title: PropTypes.string.isRequired,
  cellStyle: PropTypes.oneOf(INFO_CELL_STYLES),
  content: PropTypes.element,
  aux: PropTypes.element,
  hasBeenFullyInView: PropTypes.bool,
  hasBeenMostlyInView: PropTypes.bool,
};

InfoCell.defaultProps = {
  cellStyle: INFO_CELL_STYLES.light,
  hasBeenFullyInView: false,
  hasBeenMostlyInView: false,
  content: null,
  aux: null,
};

export default InfoCell;
