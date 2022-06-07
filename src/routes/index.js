import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator } = createNativeStackNavigator();

import { SignIn } from '../screens/signIn/index'
import { Home } from '../screens/home/index'
import { ListProduct } from '../screens/listProduct/index'
import { RegisterProduct } from '../screens/registerProduct';

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Login" component={SignIn}
          options={{ headerShown: false }}
        />
        <Screen
          name="Home" component={Home}
          options={{ headerShown: false }}
        />
        <Screen
          name="ListProduct" component={ListProduct}
          options={{ headerShown: false }}
        />
        <Screen
          name="RegisterProduct" component={RegisterProduct}
          options={{ headerShown: false }}
        />
      </Navigator>

    </NavigationContainer>
  )
} 