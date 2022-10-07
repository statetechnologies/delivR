import { StyleSheet, Text, View } from "react-native";

import { AppButton, SafeAreaScreen } from "../components";
import { COLORS, routes } from "../utils";

export default function Welcome({ navigation }: any) {
  return (
    <SafeAreaScreen styles={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.text]}>deli</Text>
        <Text style={[styles.text, styles.btyText]}>VR</Text>
      </View>
      <View>
        <Text style={styles.label}>Food Delivery</Text>
      </View>
      <View style={styles.introContainer}>
        <Text style={styles.introText}>
          Discover the best foods from over 1,000 restaurants and fast delivery
          to your doorstep
        </Text>
      </View>

      {/* Auth Buttons  */}
      <View style={styles.authBtnsContainer}>
        <View style={styles.btnContainer}>
          <AppButton
            primary
            onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
          >
            Login
          </AppButton>
        </View>
        <View style={styles.btnContainer}>
          <AppButton
            outline
            onPress={() => navigation.navigate(routes.SIGNUP_SCREEN)}
          >
            Create an Account
          </AppButton>
        </View>
      </View>
    </SafeAreaScreen>
  );
}

const styles = StyleSheet.create({
  authBtnsContainer: {
    bottom: "10%",
    marginHorizontal: "auto",
    position: "absolute",
    width: "90%",
  },
  btnContainer: {
    marginVertical: 10,
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  btyText: {
    color: COLORS.primary,
  },
  introContainer: {
    alignItems: "center",
    marginHorizontal: "auto",
    marginTop: 15,
    width: "90%",
  },
  introText: {
    fontWeight: "400",
  },
  label: {
    textTransform: "uppercase",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
  },
  textContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
  },
});
