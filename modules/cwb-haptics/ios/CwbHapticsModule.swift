import ExpoModulesCore
import UIKit

public class CwbHapticsModule: Module {
    public func definition() -> ModuleDefinition {
        Name("CwbHaptics")
        
        AsyncFunction("triggerHaptic") { (style: String) in
            DispatchQueue.main.async {
                let generator: UIImpactFeedbackGenerator
                
                switch style.lowercased() {
                case "light":
                    generator = UIImpactFeedbackGenerator(style: .light)
                case "medium":
                    generator = UIImpactFeedbackGenerator(style: .medium)
                case "heavy":
                    generator = UIImpactFeedbackGenerator(style: .heavy)
                default:
                    generator = UIImpactFeedbackGenerator(style: .medium)
                }
                
                generator.prepare()
                generator.impactOccurred()
            }
        }
    }
}
