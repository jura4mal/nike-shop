import React from 'react';

import '../assets/styles/fonts.css';
import '../assets/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      title: 'Story'
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i
    }
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  },
  viewport: {
    viewports: {
      '360': {
        name: '360',
        styles: {
          width: '360px',
          height: '780px'
        }
      },
      '768': {
        name: '768',
        styles: {
          width: '768px',
          height: '1664px'
        }
      },
      '1024': {
        name: '1024',
        styles: {
          width: '1024px',
          height: '576px'
        }
      },
      '1600+': {
        name: '1600+',
        styles: {
          width: '1600px',
          height: '900px'
        }
      }
    }
  }
};

import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
});

export const decorators = [
  (Story) => (
    <div
      style={{
        margin: 10,
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <Story />
    </div>
  )
];
