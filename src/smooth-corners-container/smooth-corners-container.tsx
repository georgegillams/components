import React, { useEffect, useMemo, useRef, useState } from 'react';

import { TECHNOLOGY } from './constants';
import { Container, MaskSvg } from './smooth-corners-container.styles';
import { CornerRadiuses } from './types';

export const calculateMaskPath = (
  width: number,
  height: number,
  cornerRadiuses: CornerRadiuses,
) => {
  const w = width / 2;
  const h = height / 2;

  // The curvature coefficient is a number between 0 and 1 that determines how rounded the shape is.
  // The large the shape, the greater the curvature coefficient.
  const curvatureCoefficients = [
    cornerRadiuses.topLeft,
    cornerRadiuses.topRight,
    cornerRadiuses.bottomLeft,
    cornerRadiuses.bottomRight,
  ].map((radius) => {
    const calculatedValue = radius / 100;
    if (calculatedValue < 0) {
      return 0;
    } else if (calculatedValue > 1) {
      return 1;
    } else {
      return calculatedValue;
    }
  });

  // c contains value between 0.8 and 1.2 based on the curvature coefficients
  const c = curvatureCoefficients.map((c) => 1.2 - c * 0.4);

  const topLeftOperation = curvatureCoefficients[0] > 0 ? 'C' : 'L';
  const topRightOperation = curvatureCoefficients[1] > 0 ? 'C' : 'L';
  const bottomLeftOperation = curvatureCoefficients[2] > 0 ? 'C' : 'L';
  const bottomRightOperation = curvatureCoefficients[3] > 0 ? 'C' : 'L';

  const maskPath = `M${w} 0${topRightOperation}${w + w * c[1]} 0 ${w * 2} ${
    h - h * c[1]
  } ${w * 2} ${h}${bottomRightOperation}${w * 2} ${h + h * c[3]} ${
    w + w * c[3]
  } ${h * 2} ${w} ${h * 2}${bottomLeftOperation}${w - w * c[2]} ${h * 2} 0 ${
    h + h * c[2]
  } 0 ${h}${topLeftOperation}0 ${h - h * c[0]} ${w - w * c[0]} 0 ${w} 0Z`;

  return { maskPath };
};

export interface SmoothCornersContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  technology?: TECHNOLOGY;
  cornerRadiuses: CornerRadiuses;
  idSuffixGenerator?: (() => string) | null;
}

const defaultIdSuffixGenerator = () =>
  Math.random().toString(36).substring(2, 8);

const SmoothCornersContainer = (props: SmoothCornersContainerProps) => {
  const {
    technology = TECHNOLOGY.svgAndHoudini,
    cornerRadiuses,
    idSuffixGenerator = defaultIdSuffixGenerator,
    children,
    ...rest
  } = props;

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [maskId, setMaskId] = useState<string | undefined>(undefined);

  const containerRef = useRef<HTMLDivElement>(null);

  const shouldRenderSvg =
    idSuffixGenerator && technology !== TECHNOLOGY.houdiniOnly;

  useEffect(() => {
    if (!shouldRenderSvg) return;

    setMaskId(`mask-${idSuffixGenerator()}`);

    const updateWidthAndHeight = () => {
      if (!containerRef?.current) {
        return;
      }

      const { width, height } = containerRef.current.getBoundingClientRect();

      if (width && height) {
        setDimensions({ width, height });
      }
    };

    updateWidthAndHeight();

    window.addEventListener('resize', updateWidthAndHeight);

    return () => {
      window.removeEventListener('resize', updateWidthAndHeight);
    };
  }, [idSuffixGenerator, shouldRenderSvg]);

  const { maskPath } = useMemo(
    () =>
      calculateMaskPath(dimensions.width, dimensions.height, cornerRadiuses),
    [dimensions, cornerRadiuses],
  );

  return (
    <>
      <Container
        maskId={maskId}
        ref={containerRef}
        cornerRadiuses={cornerRadiuses}
        technology={technology}
        {...rest}
      >
        {children}
      </Container>
      {maskId && maskPath && shouldRenderSvg && (
        <MaskSvg
          technology={technology}
          xmlns="http://www.w3.org/2000/svg"
          width="0"
          height="0"
        >
          <clipPath id={maskId}>
            <path d={maskPath} />
          </clipPath>
        </MaskSvg>
      )}
    </>
  );
};

export default SmoothCornersContainer;
