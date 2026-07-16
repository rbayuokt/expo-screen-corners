import { NativeModule, requireNativeModule } from 'expo';

import { ExpoScreenCornersModuleEvents } from './ExpoScreenCorners.types';
import type { ExpoScreenCornersModuleSharedObject } from './ExpoScreenCornersModuleSharedObject';

declare class ExpoScreenCornersModule extends NativeModule<ExpoScreenCornersModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  ExpoScreenCornersModuleSharedObject: typeof ExpoScreenCornersModuleSharedObject;
}

export default requireNativeModule<ExpoScreenCornersModule>('ExpoScreenCorners');
