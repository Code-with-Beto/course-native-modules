import { requireNativeView } from "expo";
import * as React from "react";

import { CwbLiquidGlassViewProps } from "./CwbLiquidGlass.types";

const NativeView: React.ComponentType<CwbLiquidGlassViewProps> =
  requireNativeView("CwbLiquidGlass");

export default function CwbLiquidGlassView(props: CwbLiquidGlassViewProps) {
  return <NativeView {...props} />;
}
