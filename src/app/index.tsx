import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";
import CwbHaptics from "../../modules/cwb-haptics";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Button
        title="Liquid Glass"
        onPress={() => {
          router.push("/liquid-glass-screen");
        }}
      />
      <Button
        title="Light Haptic"
        onPress={async () => {
          await CwbHaptics.triggerHaptic("light");
        }}
      />
      <Button
        title="Medium Haptic"
        onPress={async () => {
          await CwbHaptics.triggerHaptic("medium");
        }}
      />
      <Button
        title="Heavy Haptic"
        onPress={async () => {
          await CwbHaptics.triggerHaptic("heavy");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
