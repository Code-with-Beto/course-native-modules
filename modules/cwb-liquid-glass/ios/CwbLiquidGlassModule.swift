import ExpoModulesCore

public class CwbLiquidGlassModule: Module {
  public func definition() -> ModuleDefinition {
    Name("CwbLiquidGlass")

    View(CwbLiquidGlassView.self) {
      Prop("radius") { (view: CwbLiquidGlassView, radius: Double) in
        view.setRadius(radius)
      }
    }
  }
}
