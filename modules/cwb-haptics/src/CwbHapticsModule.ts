import { NativeModule, requireNativeModule } from "expo";

import { CwbHapticsModuleEvents } from "./CwbHaptics.types";

declare class CwbHapticsModule extends NativeModule<CwbHapticsModuleEvents> {
  triggerHaptic(style: "light" | "medium" | "heavy"): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<CwbHapticsModule>("CwbHaptics");
