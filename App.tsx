import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import theme from '@/theme/theme';
import {
  faBars,
  faCircleNotch,
  faEye,
  faEyeSlash,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import {RootSiblingParent} from 'react-native-root-siblings';
import store from '@/redux/store';
import {decode, encode} from 'base-64';
import Navigation from './src/navigation/Navigation';

const globalAny: any = global;

if (!globalAny.btoa) {
  globalAny.btoa = encode;
}

if (!globalAny.atob) {
  globalAny.atob = decode;
}

library.add(faCircleNotch, faEye, faEyeSlash, faSignOutAlt, faBars);

export default () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <RootSiblingParent>
        <Navigation />
      </RootSiblingParent>
    </ThemeProvider>
  </Provider>
);
