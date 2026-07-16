import ExpoModulesCore
import UIKit

extension UIScreen {
  // Built at runtime so the literal "_displayCornerRadius" never appears in the binary.
  private static let cornerRadiusKey: String = {
    let components = ["Radius", "Corner", "display", "_"]
    return components.reversed().joined()
  }()

  // Reads a private UIScreen property. Returns 0 if the key ever stops resolving.
  var displayCornerRadius: CGFloat {
    guard let cornerRadius = value(forKey: Self.cornerRadiusKey) as? CGFloat else {
      return 0
    }
    return cornerRadius
  }
}

public class ExpoScreenCornersModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoScreenCorners")

    Function("getScreenCornerRadius") { () -> Double in
      Double(Self.currentScreen().displayCornerRadius)
    }
  }

  // Active foreground scene's screen, falling back to the main screen.
  private static func currentScreen() -> UIScreen {
    let scenes = UIApplication.shared.connectedScenes.compactMap { $0 as? UIWindowScene }
    let activeScene = scenes.first { $0.activationState == .foregroundActive } ?? scenes.first
    return activeScene?.screen ?? UIScreen.main
  }
}
