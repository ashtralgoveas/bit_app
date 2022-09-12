import { ReactAppOptions } from '@teambit/react';

export const My0DemoAppApp: ReactAppOptions = {
  name: 'my0demo-app',
  entry: [require.resolve('./my0demo-app.app-root')],
  prerender: {
    routes: ['/']
  }
};

export default My0DemoAppApp;
