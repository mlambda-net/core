import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { LangProvider } from '@mlambda-net/core/lang';
import React from 'react';
import { black, light } from '../src/theme';
import template from './template.mdx';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Themes',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
  mae: {
    defaultValue: 'hp',
  },
  location: {
    name: 'Locale',
    description: 'Internationalization',
    defaultValue: 'es',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'fr', right: '🇫🇷', title: 'Français' },
        { value: 'es', right: '🇪🇸', title: 'Español' },
        { value: 'zh', right: '🇨🇳', title: '中文' },
        { value: 'kr', right: '🇰🇷', title: '한국어' },
      ],
    },
  },
};

export const parameters = {
  viewport: {
    viewports: {
      kindleFire2: {
        name: 'Kindle Fire 2',
        styles: {
          width: '600px',
          height: '963px',
        },
      },
      kindleFireHD: {
        name: 'Kindle Fire HD',
        styles: {
          width: '533px',
          height: '801px',
        },
      },
      iphone5: {
        name: 'iPhone 5',
        styles: {
          height: '568px',
          width: '320px',
        },
        type: 'mobile',
      },
      iphone6: {
        name: 'iPhone 6',
        styles: {
          height: '667px',
          width: '375px',
        },
        type: 'mobile',
      },
      iphone6p: {
        name: 'iPhone 6 Plus',
        styles: {
          height: '736px',
          width: '414px',
        },
        type: 'mobile',
      },
      iphone8p: {
        name: 'iPhone 8 Plus',
        styles: {
          height: '736px',
          width: '414px',
        },
        type: 'mobile',
      },
      iphonex: {
        name: 'iPhone X',
        styles: {
          height: '812px',
          width: '375px',
        },
        type: 'mobile',
      },
      iphonexr: {
        name: 'iPhone XR',
        styles: {
          height: '896px',
          width: '414px',
        },
        type: 'mobile',
      },
      iphonexsmax: {
        name: 'iPhone XS Max',
        styles: {
          height: '896px',
          width: '414px',
        },
        type: 'mobile',
      },
      ipad: {
        name: 'iPad',
        styles: {
          height: '1024px',
          width: '768px',
        },
        type: 'tablet',
      },
      ipad10p: {
        name: 'iPad Pro 10.5-in',
        styles: {
          height: '1112px',
          width: '834px',
        },
        type: 'tablet',
      },
      ipad12p: {
        name: 'iPad Pro 12.9-in',
        styles: {
          height: '1366px',
          width: '1024px',
        },
        type: 'tablet',
      },
      galaxys5: {
        name: 'Galaxy S5',
        styles: {
          height: '640px',
          width: '360px',
        },
        type: 'mobile',
      },
      galaxys9: {
        name: 'Galaxy S9',
        styles: {
          height: '1480px',
          width: '720px',
        },
        type: 'mobile',
      },
      nexus5x: {
        name: 'Nexus 5X',
        styles: {
          height: '660px',
          width: '412px',
        },
        type: 'mobile',
      },
      nexus6p: {
        name: 'Nexus 6P',
        styles: {
          height: '732px',
          width: '412px',
        },
        type: 'mobile',
      },
      pixel: {
        name: 'Pixel',
        styles: {
          height: '960px',
          width: '540px',
        },
        type: 'mobile',
      },
      pixelxl: {
        name: 'Pixel XL',
        styles: {
          height: '1280px',
          width: '720px',
        },
        type: 'mobile',
      },
    },
    defaultViewport: 'reset',
  },
  darkMode: {
    darkClass: 'lights-out',
    lightClass: 'lights-on',
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      },
    ],
  },
};

const getTheme = (name) => {
  if (name === 'light') {
    return light;
  }
  return black;
};

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {},
    docs: {
      page: template,
    },
  },
  decorators: [
    (Story, context) => (
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={getTheme(context.globals.theme)}>
          <LangProvider lang={context.globals.location}>
            <Story />
          </LangProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    ),
  ],
};
