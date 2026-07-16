import ExpoModulesCore

public class ExpoScreenCornersModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoScreenCorners")

    Events("onChange")

    Constant("PI") {
      Double.pi
    }

    Function("hello") {
      return "Hello world! 👋"
    }

    AsyncFunction("setValueAsync") { (value: String) in
      self.sendEvent("onChange", [
        "value": value
      ])
    }

    Class(ExpoScreenCornersModuleSharedObject.self) {
      Constructor { () -> ExpoScreenCornersModuleSharedObject in
        return ExpoScreenCornersModuleSharedObject()
      }

      Property("count") { (ref: ExpoScreenCornersModuleSharedObject) -> Int in
        return ref.count
      }
      .set { (ref: ExpoScreenCornersModuleSharedObject, count: Int) in
        ref.count = count
      }
    }
  }
}
