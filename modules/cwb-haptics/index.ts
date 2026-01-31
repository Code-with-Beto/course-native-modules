// Reexport the native module. On web, it will be resolved to CwbHapticsModule.web.ts
// and on native platforms to CwbHapticsModule.ts
export * from "./src/CwbHaptics.types";
export { default } from "./src/CwbHapticsModule";
