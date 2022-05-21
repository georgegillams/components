import React from 'react';
import PropTypes from 'prop-types';
import {
  AuxInner,
  AuxOuter,
  auxHeight,
  InnerWrapper,
  OuterWrapper,
  TextContainer,
  Title,
} from './info-cell.styles';
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

  return (
    <OuterWrapper cellStyle={cellStyle} {...rest}>
      <style>
        {`
        .js .hidden {
          padding-top: ${auxHeight};
          opacity: 0;
        }
        `}
      </style>
      <InnerWrapper>
        <TextContainer>
          <Title tagName="h3" size={SIZES.xl} withContent={!!content}>
            {title}
          </Title>
          {content && content}
        </TextContainer>
        <div>
          <AuxOuter>
            <AuxInner className={showAux ? 'not-hidden' : 'hidden'}>
              {aux && aux}
            </AuxInner>
          </AuxOuter>
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
