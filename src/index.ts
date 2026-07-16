import ExpoScreenCornersModule from './ExpoScreenCornersModule';

export * from './ExpoScreenCorners.types';

/**
 * Get the physical corner radius of the device's display.
 *
 * Reads the real screen corner radius natively so UI can be laid out to match
 * it. iOS returns points; Android returns dp (both map to React Native's style
 * units). On Android it uses the RoundedCorner API and needs Android 12 (API 31)
 * or newer. Returns `0` when the value can't be determined (web, older Android,
 * or devices with square corners).
 *
 * @returns The display corner radius, or `0` if it cannot be determined.
 */
export function getScreenCornerRadius(): number {
  return ExpoScreenCornersModule.getScreenCornerRadius();
}

export default ExpoScreenCornersModule;
