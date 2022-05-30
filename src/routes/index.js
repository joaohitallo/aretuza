import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Screen, Navigator } = createNativeStackNavigator();

import { SignIn } from '../screens/signIn/index'

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Login" component={SignIn}
        />
      </Navigator>

    </NavigationContainer>
  )
} 