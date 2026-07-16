import ExpoScreenCornersModule from './ExpoScreenCornersModule';

export * from './ExpoScreenCorners.types';

/**
 * Get the physical corner radius of the device's display, in points.
 *
 * On iOS this reads the display's actual corner radius natively, so UI can be
 * laid out to match the real screen corners. Returns `0` on platforms where the
 * value is unavailable (web, and Android for now).
 *
 * @returns The display corner radius in points, or `0` if it cannot be determined.
 */
export function getScreenCornerRadius(): number {
  return ExpoScreenCornersModule.getScreenCornerRadius();
}

export default ExpoScreenCornersModule;
