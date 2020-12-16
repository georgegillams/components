/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import wrapDisplayName from 'recompose/wrapDisplayName';

const withScrollProps = {
  fullyInView: PropTypes.bool,
  hasBeenFullyInView: PropTypes.bool,
  hasBeenInView: PropTypes.bool,
  hasBeenJustInView: PropTypes.bool,
  hasBeenMostlyInView: PropTypes.bool,
  hasBeenOutOfView: PropTypes.bool,
  inView: PropTypes.bool,
  justInView: PropTypes.bool,
  mostlyInView: PropTypes.bool,
  outOfView: PropTypes.bool,
  scrollPosition: PropTypes.number,
  scrollPositionVh: PropTypes.number,
};

const withScroll = ComponentToScroll => {
  class WithScroll extends Component {
    constructor(): void {
      super();

      this.documentRef = null;

      this.state = {
        fullyInView: false,
        hasBeenFullyInView: false,
        hasBeenInView: false,
        hasBeenJustInView: false,
        hasBeenMostlyInView: false,
        hasBeenOutOfView: false,
        inView: false,
        justInView: false,
        mostlyInView: false,
        outOfView: false,
        scrollPosition: 0,
        scrollPositionVh: 0,
      };
    }

    componentDidMount(): void {
      this.documentRef = typeof window !== 'undefined' ? document : null;
      // this.document should only be `null` when SSR
      if (!this.documentRef) {
        return;
      }
      this.documentRef.addEventListener('scroll', this.checkPosition, {
        capture: true,
        ...this.getPassiveArgs(),
      });
      this.documentRef.addEventListener('resize', this.checkPosition);
      this.documentRef.addEventListener(
        'orientationchange',
        this.checkPosition,
      );
      this.documentRef.addEventListener('fullscreenchange', this.checkPosition);
      // call checkPosition immediately incase the
      // component is already in view prior to scrolling
      this.checkPosition();
    }

    componentWillUnmount(): void {
      this.removeEventListeners();
    }

    getPassiveArgs(): {} {
      return this.supportsPassiveEvents() ? { passive: true } : {};
    }

    updateStateValues = (inView, scrollPosition, scrollPositionVh) => {
      const outOfView = !inView;
      const justInView = scrollPosition < 25.0;
      const mostlyInView = scrollPosition >= 25.0 && scrollPosition < 100;
      const scrollPositionConstrained = Math.min(
        100,
        Math.max(0, scrollPosition),
      );

      const fullyInView = scrollPosition >= 100;
      this.setState(prevState => ({
        inView,
        hasBeenInView: inView || prevState.hasBeenInView,
        outOfView,
        hasBeenOutOfView: outOfView || prevState.hasBeenOutOfView,
        scrollPosition: scrollPositionConstrained,
        scrollPositionVh: scrollPositionVh,
        justInView,
        mostlyInView,
        fullyInView,
        hasBeenJustInView: justInView || prevState.hasBeenJustInView,
        hasBeenMostlyInView: mostlyInView || prevState.hasBeenMostlyInView,
        hasBeenFullyInView: fullyInView || prevState.hasBeenFullyInView,
      }));
    };

    removeEventListeners = (): void => {
      this.documentRef.removeEventListener('scroll', this.checkPosition, {
        capture: true,
        ...this.getPassiveArgs(),
      });
      this.documentRef.removeEventListener('resize', this.checkPosition);
      this.documentRef.removeEventListener(
        'orientationchange',
        this.checkPosition,
      );
      this.documentRef.removeEventListener(
        'fullscreenchange',
        this.checkPosition,
      );
    };

    checkPosition = throttle(() => {
      const elementRect = this.elementBoundingRect();
      const viewPortRect = this.viewPortRect();
      const inView = this.isInViewPort(elementRect, viewPortRect);
      const scrollPosition = this.scrollPosition(elementRect, viewPortRect);
      const scrollPositionVh = this.scrollPositionVh(elementRect, viewPortRect);
      this.updateStateValues(inView, scrollPosition, scrollPositionVh);
    }, 250);

    // This function is taken from modernizr
    // See https://github.com/modernizr/modernizr
    // eslint-disable-next-line
    supportsPassiveEvents = (): boolean => {
      let supportsPassiveOption = false;
      try {
        // $FlowFixMe
        const opts = Object.defineProperty({}, 'passive', {
          // eslint-disable-next-line getter-return
          get() {
            supportsPassiveOption = true;
            return supportsPassiveOption;
          },
        });
        window.addEventListener('test', null, opts);
        window.removeEventListener('test');
      } catch (e) {
        return false;
      }
      return supportsPassiveOption;
    };

    elementBoundingRect = () => {
      if (!this.element) return null;
      const rect = this.element.getBoundingClientRect();
      return rect;
    };

    viewPortRect = () => {
      const viewPortHeight = Math.max(
        window.innerHeight,
        this.documentRef.documentElement.clientHeight,
      );
      const viewPortWidth = Math.max(
        window.innerWidth,
        this.documentRef.documentElement.clientWidth,
      );
      return { x: 0, y: 0, width: viewPortWidth, height: viewPortHeight };
    };

    isInViewPort = (elementRect, viewPortRect) =>
      elementRect.bottom >= viewPortRect.y &&
      elementRect.right >= viewPortRect.x &&
      elementRect.top < viewPortRect.height &&
      elementRect.left < viewPortRect.width;

    scrollPosition = (elementRect, viewPortRect) => {
      const elementHeight = elementRect.height;
      const elementHeightInView = viewPortRect.height - elementRect.y;
      let elementPercentageInView = (100 * elementHeightInView) / elementHeight;
      return elementPercentageInView;
    };

    scrollPositionVh = (elementRect, viewPortRect) => {
      const elementMidpointInViewport = elementRect.y + elementRect.height / 2;
      const viewPortHeight = viewPortRect.height;
      let elementPercentageThroughViewport =
        (100 * elementMidpointInViewport) / viewPortHeight;
      return elementPercentageThroughViewport;
    };

    render() {
      const { style, className, ...rest } = this.props;

      return (
        <div
          id={this.placeholderReference}
          ref={element => {
            this.element = element;
          }}
          style={style}
          className={className}
        >
          <ComponentToScroll {...this.state} {...rest} />
        </div>
      );
    }
  }
  WithScroll.displayName = wrapDisplayName(ComponentToScroll, 'withScroll');

  WithScroll.propTypes = {
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    className: PropTypes.string,
  };

  WithScroll.defaultProps = {
    style: null,
    className: null,
  };

  return WithScroll;
};

export default withScroll;
export { withScrollProps };
