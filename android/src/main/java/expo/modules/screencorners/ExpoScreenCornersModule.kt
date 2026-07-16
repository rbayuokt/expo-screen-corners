package expo.modules.screencorners

import android.app.Activity
import android.os.Build
import android.os.Looper
import android.view.RoundedCorner
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import java.util.concurrent.CountDownLatch
import java.util.concurrent.TimeUnit

class ExpoScreenCornersModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoScreenCorners")

    Function("getScreenCornerRadius") {
      cornerRadiusDp()
    }
  }

  private fun cornerRadiusDp(): Double {
    val activity = appContext.currentActivity ?: return 0.0

    // getRoundedCorner reads the attached window, so it has to run on the main thread.
    if (Looper.myLooper() == Looper.getMainLooper()) {
      return readCornerRadiusDp(activity)
    }

    var radius = 0.0
    val latch = CountDownLatch(1)
    activity.runOnUiThread {
      radius = readCornerRadiusDp(activity)
      latch.countDown()
    }
    latch.await(500, TimeUnit.MILLISECONDS)
    return radius
  }

  private fun readCornerRadiusDp(activity: Activity): Double {
    // RoundedCorner is Android 12 (API 31) and up.
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.S) return 0.0

    val insets = activity.window?.decorView?.rootWindowInsets ?: return 0.0
    val positions = intArrayOf(
      RoundedCorner.POSITION_TOP_LEFT,
      RoundedCorner.POSITION_TOP_RIGHT,
      RoundedCorner.POSITION_BOTTOM_LEFT,
      RoundedCorner.POSITION_BOTTOM_RIGHT
    )

    // Corners can differ; keep the largest so UIs don't clip on any side.
    var maxRadiusPx = 0
    for (position in positions) {
      val radius = insets.getRoundedCorner(position)?.radius ?: 0
      if (radius > maxRadiusPx) maxRadiusPx = radius
    }
    if (maxRadiusPx <= 0) return 0.0

    return (maxRadiusPx / activity.resources.displayMetrics.density).toDouble()
  }
}
