import { registerWebModule, NativeModule } from 'expo';

import { ExpoScreenCornersModuleEvents } from './ExpoScreenCorners.types';

// ExpoScreenCornersModule is not available on the web platform.
class ExpoScreenCornersModule extends NativeModule<ExpoScreenCornersModuleEvents> {}

export default registerWebModule(ExpoScreenCornersModule, 'ExpoScreenCornersModule');
