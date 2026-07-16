package expo.modules.screencorners

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoScreenCornersModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoScreenCorners")

    // Android does not expose a reliable API for the physical display corner
    // radius. There is `android.R.dimen.rounded_corner_radius` (API 31+) and
    // the `RoundedCorner` API via WindowInsets, but neither is consistently
    // populated across OEMs. Until a dependable source exists, report 0.
    Function("getScreenCornerRadius") {
      0.0
    }
  }
}
