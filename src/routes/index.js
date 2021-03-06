import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import {
  Home, Pokemon, Login, Register, Splash, Profile,
} from '../pages';

const Stack = createSharedElementStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        sharedElements={() => [
          {
            id: 'item.profile',
          },
        ]}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        sharedElements={(route) => {
          const { item, from } = route.params;

          if (from === 'card') {
            return [
              {
                id: `item.${item.id}.image`,
              },
              {
                id: `item.${item.id}.name`,
              },
            ];
          }

          return undefined;
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
