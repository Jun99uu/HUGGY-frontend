import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "@interfaces/RootStackParamList";
import {
  Navigator,
  Login,
  OnBoarding,
  Signup,
  DeliverHugging,
} from "@screens/index";

const RootStack = createStackNavigator<RootStackParamList>();

/**
 * 앱 로딩 완료 후 (스플래시 종료 후),
 * 네비게이션 콘테이너를 감싸는 코드
 */
const Container = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="OnBoarding">
        <RootStack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="Navigator"
          component={Navigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="DeliverHugging"
          component={DeliverHugging}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Container;
