import { registerWebModule, NativeModule } from 'expo';

import { ExpoScreenCornersModuleEvents } from './ExpoScreenCorners.types';

// The web platform has no concept of a physical display corner radius.
class ExpoScreenCornersModule extends NativeModule<ExpoScreenCornersModuleEvents> {
  getScreenCornerRadius(): number {
    return 0;
  }
}

export default registerWebModule(ExpoScreenCornersModule, 'ExpoScreenCornersModule');
