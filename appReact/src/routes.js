// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";

// import Login from './pages/login';
// import Main from './pages/main';
// import Cadastro from './pages/cadastro';
// //import SignUp from './pages/signUp';
// //import Main from './pages/main';

// const NavStack = createStackNavigator({
//   Login: { 
//         screen: Login,
//     },
//     Main: { 
//         screen: Main,
//     },
//     Cadastro: { 
//       screen: Cadastro,
//   },
// });

// const App = createAppContainer(NavStack);

// export default App;

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";


import Login from './pages/login';
import Main from './pages/main';

export const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Entrar"
    }
  },
});

export const SignedInRoutes = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: "Meu perfil"
    }
  },
});

export const createRootNavigator = (signedIn = false) => {
  return createStackNavigator({
    SignedIn: { screen: SignedInRoutes },
    SignedOut: { screen: SignedOutRoutes }
  },
  {
    headerMode: "none",
    mode: "modal",
    initialRouteName: signedIn ? "SignedIn" : "SignedOut",
    navigationOptions: {
      gesturesEnabled: false
    }
  });
};