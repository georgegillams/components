/* eslint-disable jsx-a11y/accessible-emoji */

import React from 'react';

import Paragraph from '../paragraph';

import NavigationBar, { NavigationItem } from './index';

const menuItems = [
  <NavigationItem name="Blog" />,
  <NavigationItem name="Photography" />,
  <NavigationItem name="Work" />,
  <NavigationItem name="Test 4" />,
];

const logo = (
  <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'hotpink' }}>
    LOGO
  </span>
);

export default {
  title: 'Organisms/Navigation bar',
  component: NavigationBar,
};

const Presentation = (props) => <div style={{ margin: '-1rem' }} {...props} />;
export const Default = () => (
  <Presentation>
    <div className="js">
      <NavigationBar menuItems={menuItems} logo={logo} />
      <div style={{ height: '1rem', width: '100%', background: 'red' }} />
    </div>
  </Presentation>
);

export const NoJs = () => (
  <Presentation>
    <div className="no-js">
      <NavigationBar menuItems={menuItems} logo={logo} />
      <div style={{ height: '1rem', width: '100%', background: 'red' }} />
    </div>
  </Presentation>
);

export const WithScroll = () => (
  <Presentation>
    <div className="js">
      <div>
        <NavigationBar menuItems={menuItems} logo={logo} />
        <div id="mainScrollView">
          <a href="/iframe.html?id=navigation-bar--with-scroll">
            OPEN IN FULL WINDOW MODE TO TEST SCROLL
          </a>
          <br />
          <Paragraph
            style={{
              display: 'block',
              marginBottom: '2rem',
              height: '10rem',
              background: 'red',
            }}
          >
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse dolor sit amet
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipsum dolor
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Ipsum
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Dolor
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Dolor, dollor 💵
          </Paragraph>
          <br />
          <Paragraph
            id="emojiParagraph"
            style={{ display: 'block', marginBottom: '2rem' }}
          >
            👍 👋 🏈 🎉 😂 ✅ 🤷‍♀️ 🤪
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <a href="/iframe.html?id=navigation-bar--with-scroll">
            OPEN IN FULL WINDOW MODE TO TEST SCROLL
          </a>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <a href="/iframe.html?id=navigation-bar--with-scroll">
            OPEN IN FULL WINDOW MODE TO TEST SCROLL
          </a>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
          <br />
          <a href="/iframe.html?id=navigation-bar--with-scroll">
            OPEN IN FULL WINDOW MODE TO TEST SCROLL
          </a>
          <br />
          <Paragraph style={{ display: 'block', marginBottom: '2rem' }}>
            Lorem ipse
          </Paragraph>
        </div>
      </div>
    </div>
  </Presentation>
);
