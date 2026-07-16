package expo.modules.screencorners

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoScreenCornersModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoScreenCorners")

    Events("onChange")

    Constant("PI") {
      Math.PI
    }

    Function("hello") {
      "Hello world! 👋"
    }

    AsyncFunction("setValueAsync") { value: String ->
      sendEvent("onChange", mapOf(
        "value" to value
      ))
    }

    Class(ExpoScreenCornersModuleSharedObject::class) {
      Constructor {
        val instance = ExpoScreenCornersModuleSharedObject(appContext)
        return@Constructor instance
      }

      Property("count")
        .get { ref: ExpoScreenCornersModuleSharedObject ->
          ref.count
        }
        .set { ref: ExpoScreenCornersModuleSharedObject, count: Int ->
          ref.count = count
        }
    }
  }
}
