// import React from 'react';

// import Routes from './routes';

// const App = () => <Routes />;

// export default App;

import React from 'react';
import { View } from 'react-native';

import { SignedOutRoutes, SignedInRoutes } from './routes';

export default class App extends React.Component {
  render() {
    return <SignedOutRoutes />
  }
}