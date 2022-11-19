import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { scopeFocus, unscopeFocus } from 'a11y-focus-scope';
import { JS_CLASSNAME, NO_JS_CLASSNAME } from '../js-feature-detector';

import BurgerButton from '../burger-button';

import {
  AnimatedContainer,
  AnimatedContainerInner,
  BarInner,
  BarOuter,
  BurgerContainer,
  DesktopNavWrapper,
  Header,
  LogoContainer,
  Scrim,
  TabletNavWrapper,
} from './navigation-bar.styles';

const CLASS_HIDE_JS = `navigation-bar__burger-wrapper--no-js`;
const CLASS_HIDE_NO_JS = `navigation-bar__burger-wrapper--js`;

const NavigationBar = (props) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [changing, setChanging] = useState(false);
  const headerElement = useRef(null);

  const setAppAriaHidden = (hidden) => {
    if (typeof window === 'undefined' || !document.getElementsByTagName) {
      return;
    }

    if (headerElement && headerElement.current) {
      if (hidden) {
        scopeFocus(headerElement.current);
      } else {
        unscopeFocus();
      }
    }

    const mainElements = document.getElementsByTagName('MAIN');
    if (mainElements.length === 1) {
      mainElements[0].setAttribute('aria-hidden', hidden);
    }

    const footerElements = document.getElementsByTagName('FOOTER');
    if (footerElements.length === 1) {
      footerElements[0].setAttribute('aria-hidden', hidden);
    }
  };

  const closeMenu = useCallback(() => {
    setChanging(true);
    setOpen(false);
    setAppAriaHidden(false);
    setTimeout(() => {
      setShow(false);
      setChanging(false);
    }, 500);
  }, []);

  const openMenu = () => {
    setChanging(true);
    setShow(true);
    setAppAriaHidden(true);
    setTimeout(() => {
      setOpen(true);
      setChanging(false);
    }, 100);
  };

  useEffect(() => {
    const escEventListener = (event) => {
      if (event.isComposing || event.keyCode === 27) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', escEventListener);

    const cleanUp = () => {
      document.removeEventListener('keydown', escEventListener);
    };
    return cleanUp;
  }, [closeMenu]);

  const toggleMenu = () => {
    if (changing) {
      return;
    }
    if (open) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const {
    menuItems,
    logo,
    noJsLinkProvider: NoJsLinkProvider,
    ...rest
  } = props;

  const menuItemsWithClickBehaviour =
    menuItems &&
    menuItems.map((menuItem) =>
      menuItem
        ? React.cloneElement(menuItem, {
            onClick: closeMenu,
          })
        : null,
    );

  const logoWithClickBehaviour = React.cloneElement(logo, {
    onClick: closeMenu,
  });

  return (
    <Header role="banner" ref={headerElement}>
      {/* This style is inlined to ensure that it is available as soon as the HTML is delivered to the browser. */}

      <style>
        {/* The hide-js style is only applied if an ancestor element has the `js` class. */}
        {/* The hide-no-js style is only applied if an ancestor element has the `no-js` class. */}
        {`
          .${JS_CLASSNAME} .${CLASS_HIDE_JS} { display: none; }
          .${NO_JS_CLASSNAME} .${CLASS_HIDE_NO_JS} { display: none; }
        `}
      </style>
      {show && (
        // scrim
        <Scrim
          aria-hidden="true"
          role="presentation"
          onClick={closeMenu}
          open={open}
        />
      )}

      {show && (
        // animated container
        <AnimatedContainer open={open} aria-hidden={show ? null : 'true'}>
          <AnimatedContainerInner>
            {menuItemsWithClickBehaviour}
          </AnimatedContainerInner>
        </AnimatedContainer>
      )}

      {/* outer */}
      <BarOuter {...rest}>
        {/* nav bar */}
        <BarInner>
          {/* burger container */}
          <TabletNavWrapper>
            <BurgerContainer>
              <BurgerButton
                isOpen={open}
                aria-label="Menu"
                onClick={toggleMenu}
                className={CLASS_HIDE_NO_JS}
              />
              <NoJsLinkProvider
                className={CLASS_HIDE_JS}
                aria-label="Sitemap"
                href="/site-map"
              >
                <BurgerButton isOpen={false} aria-hidden="true" />
              </NoJsLinkProvider>
            </BurgerContainer>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            {logoWithClickBehaviour}
            <BurgerContainer />
          </TabletNavWrapper>
          <DesktopNavWrapper>
            {logoWithClickBehaviour}
            {menuItemsWithClickBehaviour}
          </DesktopNavWrapper>
          {/* Duplicated to allow flex to position the Logo in the center */}
        </BarInner>
      </BarOuter>
    </Header>
  );
};

NavigationBar.propTypes = {
  logo: PropTypes.node,
  menuItems: PropTypes.arrayOf(PropTypes.node),
  noJsLinkProvider: PropTypes.func,
};

NavigationBar.defaultProps = {
  logo: null,
  menuItems: [],
  noJsLinkProvider: (props) => <a {...props} />,
};

export default NavigationBar;
