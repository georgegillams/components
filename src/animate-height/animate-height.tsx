import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  MutableRefObject,
} from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './animate-height.styles';

type AnimateHeightProps = {
  expanded: boolean;
  children: React.ReactNode;
  verticalMargin: number;
  bleedEdges: boolean;
  scrollOffset: number;
};

const AnimateHeight = (props: AnimateHeightProps) => {
  const {
    expanded,
    children,
    verticalMargin,
    bleedEdges,
    scrollOffset,
    ...rest
  } = props;

  const [renderHeight, setRenderHeight] = useState(expanded ? null : 0);

  const [showChildren, setShowChildren] = useState(!!expanded);
  const [animationInProgress, setAnimationInProgress] = useState(false);
  const [needsCollapsing, setNeedsCollapsing] = useState(false);
  const [needsExpanding, setNeedsExpanding] = useState(false);
  const [collapsingInProgress, setCollapsingInProgress] = useState(false);
  const [expanding, setExpanding] = useState(false);
  const childElement: MutableRefObject<HTMLDivElement | null> = useRef(null);

  const getContentHeight = useCallback(() => {
    if (!childElement || !childElement.current) {
      return 50;
    }

    return childElement.current.getBoundingClientRect().height + verticalMargin;
  }, [childElement, verticalMargin]);

  const scrollBackIntoView = useCallback(() => {
    if (!childElement || !childElement.current) {
      return;
    }

    const { top: collapsingElementTop } =
      childElement.current.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    if (collapsingElementTop > scrollOffset) {
      return;
    }
    window.scrollTo({
      top: currentScrollY + collapsingElementTop - (50 + scrollOffset),
      behavior: 'smooth',
    });
  }, [childElement, scrollOffset]);

  useEffect(() => {
    if (expanded) {
      setNeedsExpanding(true);
      setNeedsCollapsing(false);
    } else {
      setNeedsCollapsing(true);
      setNeedsExpanding(false);
    }
  }, [expanded]);

  useEffect(() => {
    if (animationInProgress) {
      return;
    }
    if (needsExpanding) {
      setAnimationInProgress(true);
      setShowChildren(true);
      setExpanding(true);
      setNeedsExpanding(false);
    }
  }, [needsExpanding, animationInProgress]);

  useEffect(() => {
    if (animationInProgress) {
      return;
    }
    if (needsCollapsing) {
      scrollBackIntoView();
      setAnimationInProgress(true);
      setCollapsingInProgress(true);
      setRenderHeight(getContentHeight());
      setNeedsCollapsing(false);
    }
  }, [
    needsCollapsing,
    animationInProgress,
    scrollBackIntoView,
    getContentHeight,
  ]);

  useEffect(() => {
    if (collapsingInProgress) {
      setTimeout(() => setRenderHeight(0), 10);
      setTimeout(() => {
        setShowChildren(false);
        setCollapsingInProgress(false);
        setAnimationInProgress(false);
      }, 400);
    }
  }, [collapsingInProgress]);

  useEffect(() => {
    if (expanding) {
      setRenderHeight(getContentHeight());
      setTimeout(() => {
        setRenderHeight(null);
        setExpanding(false);
        setAnimationInProgress(false);
      }, 400);
    }
  }, [expanding, getContentHeight]);

  return (
    <Wrapper
      expanded={bleedEdges && expanded}
      aria-hidden={!expanded}
      // @ts-ignore
      style={{ height: renderHeight }}
      {...rest}
    >
      <div ref={childElement}>{showChildren && children}</div>
    </Wrapper>
  );
};

AnimateHeight.propTypes = {
  verticalMargin: PropTypes.number,
  expanded: PropTypes.bool,
  bleedEdges: PropTypes.bool,
  children: PropTypes.node.isRequired,
  scrollOffset: PropTypes.number,
};

AnimateHeight.defaultProps = {
  verticalMargin: 0,
  bleedEdges: false,
  expanded: false,
  scrollOffset: 0,
};

export default AnimateHeight;
