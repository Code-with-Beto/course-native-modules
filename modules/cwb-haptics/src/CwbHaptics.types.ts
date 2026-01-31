export type CwbHapticsModuleEvents = {};

export type HapticStyle = "light" | "medium" | "heavy";

export interface CwbHapticsModule {
  triggerHaptic(style: HapticStyle): Promise<void>;
}
