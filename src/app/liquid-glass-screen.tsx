import { Image, StyleSheet, Text, View } from "react-native";
import { CwbLiquidGlassView } from "../../modules/cwb-liquid-glass";

export default function LiquidGlassScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{
          uri: "https://d3ynb031qx3d1.cloudfront.net/ai-tattoo/athletic/box-arm.avif",
        }}
        style={StyleSheet.absoluteFill}
      />
      <CwbLiquidGlassView
        style={{
          width: 100,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
        radius={40}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Hello</Text>
      </CwbLiquidGlassView>
    </View>
  );
}
