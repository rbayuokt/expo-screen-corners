import { SharedObject, useReleasingSharedObject } from 'expo-modules-core';

import ExpoScreenCornersModule from './ExpoScreenCornersModule';

export declare class ExpoScreenCornersModuleSharedObject extends SharedObject {
  count: number;
}

/**
 * Creates a new ExpoScreenCornersModuleSharedObject instance.
 * You are responsible for releasing it from memory by calling `release()` when done.
 */
export function createExpoScreenCornersModuleSharedObject(): ExpoScreenCornersModuleSharedObject {
  return new ExpoScreenCornersModule.ExpoScreenCornersModuleSharedObject();
}

/**
 * A hook that creates a ExpoScreenCornersModuleSharedObject instance and automatically
 * releases it when the component unmounts.
 */
export function useExpoScreenCornersModuleSharedObject(): ExpoScreenCornersModuleSharedObject {
  return useReleasingSharedObject(() => new ExpoScreenCornersModule.ExpoScreenCornersModuleSharedObject(), []);
}
