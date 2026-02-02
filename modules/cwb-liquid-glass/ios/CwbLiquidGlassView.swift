import ExpoModulesCore
import UIKit

// HOW THIS WORKS:
// 1. JavaScript styles (width, height, etc.) → Yoga layout engine (C++) calculates pixel positions
// 2. Fabric renderer (via JSI - direct C++ binding) applies layout to this native UIView
// 3. layoutSubviews() is called with the calculated bounds
// 4. JavaScript can update this view synchronously through JSI

class CwbLiquidGlassView: ExpoView {

  let effectView = UIVisualEffectView()

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)

    if #available(iOS 26.0, *) {
      let glassEffect = UIGlassEffect(style: .clear)
      glassEffect.isInteractive = true
      // glassEffect.tintColor = .tintColor
      // effectView.cornerConfiguration = .corners(radius: 40)
      effectView.effect = glassEffect
      
    } else {
      let blurEffect = UIBlurEffect(style: .systemUltraThinMaterial)
      effectView.effect = blurEffect
    }

    effectView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    // effectView.frame = bounds
    addSubview(effectView)
  }
  
  func setRadius(_ radius: CGFloat) {
    if #available(iOS 26.0, *) {
      effectView.cornerConfiguration = .corners(radius: UICornerRadius(floatLiteral: radius))
    } else {
      // Fallback on earlier versions
    }
  }
  
  override func layoutSubviews() {
    super.layoutSubviews()
    effectView.frame = bounds
  }
  
  // Add a child view (called when React adds a child component)
  override func mountChildComponentView(_ childComponentView: UIView, index: Int) {
    effectView.contentView.insertSubview(childComponentView, at: index)
  }

  // Remove a child view (called when React removes a child component)
  override func unmountChildComponentView(_ childComponentView: UIView, index: Int) {
    childComponentView.removeFromSuperview()
  }
}
