export interface ChargingMetricsParams {
  phases: number
  batteryCapacity: number
  amperage: number
  voltage: number
  initialCharge: number
  targetCharge: number
  chargingLoss?: number
}

export interface ChargingMetrics {
  chargingPower: number // kW
  chargingSpeed: number // % per hour
  chargeNeeded: number // percentage points
  hoursNeeded: number // decimal hours (0 if not applicable)
  energyNeeded: number // kWh
  formattedTime: string
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

/**
 * Calculate charging metrics.
 * - Assumes voltage in V, amperage in A, phases in {1,3}, batteryCapacity in kWh.
 * - chargingLoss is percent (0-100) applied as an efficiency loss.
 *
 * Returns safe defaults if inputs are invalid (batteryCapacity <= 0, no charge needed, or zero charging power).
 */
export function calculateChargingMetrics({
  phases,
  batteryCapacity,
  amperage,
  voltage,
  initialCharge,
  targetCharge,
  chargingLoss = 5
}: ChargingMetricsParams): ChargingMetrics {
  // Normalize / clamp inputs
  const clampedChargingLoss = clamp(isFinite(chargingLoss) ? chargingLoss : 0, 0, 100)
  const clampedBatteryCapacity = Math.max(0, Number(batteryCapacity) || 0)
  const clampedInitial = clamp(Number(initialCharge) || 0, 0, 100)
  const clampedTarget = clamp(Number(targetCharge) || 0, 0, 100)

  const chargeNeeded = Math.max(0, clampedTarget - clampedInitial)

  // Early exits
  if (clampedBatteryCapacity === 0 || chargeNeeded === 0) {
    return {
      chargingPower: 0,
      chargingSpeed: 0,
      chargeNeeded,
      hoursNeeded: 0,
      energyNeeded: 0,
      formattedTime: chargeNeeded === 0 ? '0 hours 0 minutes (0.0 hours)' : 'N/A'
    }
  }

  const rawChargingPower = (Number(phases) * Number(amperage) * Number(voltage)) / 1000 // kW
  const chargingPower = rawChargingPower * (1 - clampedChargingLoss / 100)

  if (!isFinite(chargingPower) || chargingPower <= 0) {
    return {
      chargingPower: 0,
      chargingSpeed: 0,
      chargeNeeded,
      hoursNeeded: 0,
      energyNeeded: (chargeNeeded / 100) * clampedBatteryCapacity,
      formattedTime: 'N/A'
    }
  }

  const chargingSpeed = (chargingPower / clampedBatteryCapacity) * 100 // % per hour
  if (!isFinite(chargingSpeed) || chargingSpeed <= 0) {
    return {
      chargingPower,
      chargingSpeed: 0,
      chargeNeeded,
      hoursNeeded: 0,
      energyNeeded: (chargeNeeded / 100) * clampedBatteryCapacity,
      formattedTime: 'N/A'
    }
  }

  const hoursNeeded = chargeNeeded / chargingSpeed
  const energyNeeded = (chargeNeeded / 100) * clampedBatteryCapacity

  // Convert to hours + minutes with correct rounding (avoid minutes === 60)
  let hours = Math.floor(hoursNeeded)
  let minutes = Math.round((hoursNeeded - hours) * 60)
  if (minutes === 60) {
    hours += 1
    minutes = 0
  }

  const formattedTime = `${hours} hours ${minutes} minutes (${hoursNeeded.toFixed(1)} hours)`

  return {
    chargingPower,
    chargingSpeed,
    chargeNeeded,
    hoursNeeded,
    energyNeeded,
    formattedTime
  }
}