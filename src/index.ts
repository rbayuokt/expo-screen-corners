// Reexport the native module. On web, it will be resolved to ExpoScreenCornersModule.web.ts
// and on native platforms to ExpoScreenCornersModule.ts
export { default } from './ExpoScreenCornersModule';
export * from './ExpoScreenCorners.types';
export * from './ExpoScreenCornersModuleSharedObject';
