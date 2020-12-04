import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';

import useTheme from '@/hooks/useTheme';
import {authOperations} from '@/redux/auth';
import {RootState, ThunkDispatchType} from '@/redux/redux.types';
import SignIn from '@/scenes/signIn';
import SignUp from '@/scenes/signUp';
import Splash from '@/scenes/splash';
import routes from './routes';
import HomeScreen from './HomeScreen';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

type ConnectedProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

function Navigation({hasInit, authCheck}: ConnectedProps) {
  const theme = useTheme();

  useEffect(() => {
    const check = async () => {
      try {
        await authCheck();
      } catch (e) {
        console.log(e.message);
      }
    };
    check();
  }, [authCheck]);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={CustomDrawerContent}
        initialRouteName={routes.signIn}
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: theme.colors.primary},
        }}>
        {!hasInit ? (
          <Drawer.Screen
            name={routes.splash}
            component={Splash}
            options={{swipeEnabled: false}}
          />
        ) : (
          <>
            <Drawer.Screen
              name={routes.signIn}
              component={SignIn}
              options={{swipeEnabled: false}}
            />
            <Drawer.Screen
              name={routes.signUp}
              component={SignUp}
              options={{swipeEnabled: false}}
            />
            <Drawer.Screen name={routes.home} component={HomeScreen} />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = ({auth}: RootState) => ({
  hasInit: auth.hasInit,
});

const mapDispatchToProps = (dispatch: ThunkDispatchType) => {
  return {
    authCheck: () => dispatch(authOperations.authCheck()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
