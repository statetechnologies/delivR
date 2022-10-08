import { NavigationContainer } from "@react-navigation/native";
// import {MaterialCommunityIcons} from 'expo-icons'

import AppNavigation from "./AppNavigation";
import AuthNavigation from "./AuthNavigation";

export default function MainNavigation() {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthNavigation /> : <AppNavigation />}
    </NavigationContainer>
  );
}
