package expo.modules.cwbhaptics

import android.content.Context
import android.os.Build
import android.os.VibrationEffect
import android.os.Vibrator
import android.os.VibratorManager
import expo.modules.kotlin.exception.Exceptions
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class CwbHapticsModule : Module() {
    private val context: Context
        get() = appContext.reactContext ?: throw Exceptions.ReactContextLost()

    private val vibrator: Vibrator
        get() = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            (context.getSystemService(Context.VIBRATOR_MANAGER_SERVICE) as VibratorManager).defaultVibrator
        } else {
            @Suppress("DEPRECATION")
            context.getSystemService(Context.VIBRATOR_SERVICE) as Vibrator
        }

    override fun definition() = ModuleDefinition {
        Name("CwbHaptics")

        AsyncFunction("triggerHaptic") { style: String ->
            val (timings, amplitudes, oldPattern) = when (style.lowercase()) {
                "light" -> Triple(longArrayOf(0, 10), intArrayOf(0, 50), longArrayOf(0, 10))
                "heavy" -> Triple(longArrayOf(0, 50), intArrayOf(0, 255), longArrayOf(0, 50))
                else -> Triple(longArrayOf(0, 20), intArrayOf(0, 128), longArrayOf(0, 20)) // medium
            }

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                vibrator.vibrate(VibrationEffect.createWaveform(timings, amplitudes, -1))
            } else {
                @Suppress("DEPRECATION")
                vibrator.vibrate(oldPattern, -1)
            }

        }
    }
}

