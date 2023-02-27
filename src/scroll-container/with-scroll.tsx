import React, { Component } from 'react';
import throttle from 'lodash.throttle';
import wrapDisplayName from 'recompose/wrapDisplayName';

export interface WithScrollProps {
  style?: object;
  className?: string;
}

export interface WithScrollState {
  fullyInView: boolean;
  hasBeenFullyInView: boolean;
  hasBeenInView: boolean;
  hasBeenJustInView: boolean;
  hasBeenMostlyInView: boolean;
  hasBeenOutOfView: boolean;
  inView: boolean;
  justInView: boolean;
  mostlyInView: boolean;
  outOfView: boolean;
  scrollPosition: number;
  scrollPositionVh: number;
}

interface ViewPortRectType {
  x: number;
  y: number;
  height: number;
  width: number;
}

const withScroll = (ComponentToScroll: React.ComponentType<any>) => {
  class WithScroll extends Component<WithScrollProps, WithScrollState> {
    documentRef?: Document;
    interval?: NodeJS.Timer;
    element?: HTMLDivElement;
    placeholderReference?: string;

    constructor(props: WithScrollProps) {
      super(props);

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

    componentDidMount() {
      setTimeout(() => {
        this.setUpEventListeners();
      }, 400);
    }

    componentWillUnmount() {
      this.removeEventListeners();
    }

    getPassiveArgs() {
      return this.supportsPassiveEvents() ? { passive: true } : {};
    }

    updateStateValues = (
      inView: boolean,
      scrollPosition: number,
      scrollPositionVh: number,
    ) => {
      const outOfView = !inView;
      const justInView = scrollPosition < 25.0;
      const mostlyInView = scrollPosition >= 25.0 && scrollPosition < 100;
      const scrollPositionConstrained = Math.min(
        100,
        Math.max(0, scrollPosition),
      );

      const fullyInView = scrollPosition >= 100;
      this.setState((prevState) => ({
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

    setUpEventListeners = () => {
      this.documentRef = typeof window !== 'undefined' ? document : undefined;
      // this.document should only be `undefined` when SSR
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

      // call checkPosition periodically to deal with
      // other page layout changes
      this.interval = setInterval(() => {
        this.checkPosition();
      }, 1000);
    };

    removeEventListeners = () => {
      if (!this.documentRef) {
        return;
      }

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
      if (this.interval) {
        clearInterval(this.interval);
      }
    };

    checkPosition = throttle(() => {
      const elementRect = this.elementBoundingRect() || undefined;
      const viewPortRect = this.viewPortRect();
      const inView = this.isInViewPort(elementRect, viewPortRect);
      const scrollPosition = this.scrollPosition(elementRect, viewPortRect);
      const scrollPositionVh = this.scrollPositionVh(elementRect, viewPortRect);
      this.updateStateValues(inView, scrollPosition, scrollPositionVh);
    }, 250);

    // This function is taken from modernizr
    // See https://github.com/modernizr/modernizr
    // eslint-disable-next-line
    supportsPassiveEvents = () => {
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
        // @ts-ignore
        window.addEventListener('test', null, opts);
        // @ts-ignore
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
        this.documentRef?.documentElement?.clientHeight || 0,
      );
      const viewPortWidth = Math.max(
        window.innerWidth,
        this.documentRef?.documentElement?.clientWidth || 0,
      );
      return { x: 0, y: 0, width: viewPortWidth, height: viewPortHeight };
    };

    isInViewPort = (elementRect?: DOMRect, viewPortRect?: ViewPortRectType) => {
      if (!elementRect || !viewPortRect) {
        return false;
      }

      return (
        elementRect.bottom >= viewPortRect.y &&
        elementRect.right >= viewPortRect.x &&
        elementRect.top < viewPortRect.height &&
        elementRect.left < viewPortRect.width
      );
    };

    scrollPosition = (
      elementRect?: DOMRect,
      viewPortRect?: ViewPortRectType,
    ) => {
      if (!elementRect || !viewPortRect) {
        return 0;
      }

      const elementHeight = elementRect.height;
      const elementHeightInView = viewPortRect.height - elementRect.y;
      let elementPercentageInView = (100 * elementHeightInView) / elementHeight;
      return elementPercentageInView;
    };

    scrollPositionVh = (
      elementRect?: DOMRect,
      viewPortRect?: ViewPortRectType,
    ) => {
      if (!elementRect || !viewPortRect) {
        return 0;
      }

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
          ref={(element) => {
            this.element = element || undefined;
          }}
          style={style}
        >
          <ComponentToScroll {...this.state} {...rest} />
        </div>
      );
    }
  }
  // @ts-ignore
  WithScroll.displayName = wrapDisplayName(ComponentToScroll, 'withScroll');

  return WithScroll;
};

export default withScroll;
