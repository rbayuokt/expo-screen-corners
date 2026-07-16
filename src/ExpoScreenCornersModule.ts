import { NativeModule, requireNativeModule } from 'expo';

import { ExpoScreenCornersModuleEvents } from './ExpoScreenCorners.types';

declare class ExpoScreenCornersModule extends NativeModule<ExpoScreenCornersModuleEvents> {
  /**
   * Returns the physical corner radius of the device's display, in points.
   * Returns `0` when the value cannot be determined.
   */
  getScreenCornerRadius(): number;
}

export default requireNativeModule<ExpoScreenCornersModule>('ExpoScreenCorners');
