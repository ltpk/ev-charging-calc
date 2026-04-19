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
  gridPower: number        // kW drawn from grid (phases × amps × volts)
  chargingPower: number    // kW delivered to battery (gridPower × efficiency)
  chargingSpeed: number    // % per hour (based on chargingPower)
  chargeNeeded: number     // percentage points
  hoursNeeded: number      // decimal hours
  energyNeeded: number     // kWh stored in battery
  gridEnergyNeeded: number // kWh drawn from grid
  formattedTime: string
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

/**
 * Calculate charging metrics.
 * - Assumes voltage in V, amperage in A, phases in {1,3}, batteryCapacity in kWh.
 * - chargingLoss is percent (0-100): energy lost between grid and battery.
 *   gridPower = phases × amps × volts (fixed by electrical parameters, what the meter sees).
 *   chargingPower = gridPower × efficiency (what actually reaches the battery).
 *   Losses slow down charging — more time is needed to store the target energy.
 */
export function calculateChargingMetrics({
  phases,
  batteryCapacity,
  amperage,
  voltage,
  initialCharge,
  targetCharge,
  chargingLoss = 0
}: ChargingMetricsParams): ChargingMetrics {
  const clampedChargingLoss = clamp(isFinite(chargingLoss) ? chargingLoss : 0, 0, 100)
  const clampedBatteryCapacity = Math.max(0, Number(batteryCapacity) || 0)
  const clampedInitial = clamp(Number(initialCharge) || 0, 0, 100)
  const clampedTarget = clamp(Number(targetCharge) || 0, 0, 100)

  const chargeNeeded = Math.max(0, clampedTarget - clampedInitial)

  if (clampedBatteryCapacity === 0 || chargeNeeded === 0) {
    return {
      gridPower: 0,
      chargingPower: 0,
      chargingSpeed: 0,
      chargeNeeded,
      hoursNeeded: 0,
      energyNeeded: 0,
      gridEnergyNeeded: 0,
      formattedTime: chargeNeeded === 0 ? '0 hours 0 minutes' : 'N/A'
    }
  }

  // Grid power is determined purely by electrical parameters
  const gridPower = (Number(phases) * Number(amperage) * Number(voltage)) / 1000

  if (!isFinite(gridPower) || gridPower <= 0) {
    return {
      gridPower: 0,
      chargingPower: 0,
      chargingSpeed: 0,
      chargeNeeded,
      hoursNeeded: 0,
      energyNeeded: (chargeNeeded / 100) * clampedBatteryCapacity,
      gridEnergyNeeded: 0,
      formattedTime: 'N/A'
    }
  }

  // What actually reaches the battery after losses
  const efficiency = 1 - clampedChargingLoss / 100
  const chargingPower = gridPower * efficiency

  if (!isFinite(chargingPower) || chargingPower <= 0) {
    return {
      gridPower,
      chargingPower: 0,
      chargingSpeed: 0,
      chargeNeeded,
      hoursNeeded: 0,
      energyNeeded: (chargeNeeded / 100) * clampedBatteryCapacity,
      gridEnergyNeeded: 0,
      formattedTime: 'N/A'
    }
  }

  // Charging speed and time are based on power delivered to the battery
  const chargingSpeed = (chargingPower / clampedBatteryCapacity) * 100
  const hoursNeeded = chargeNeeded / chargingSpeed
  const energyNeeded = (chargeNeeded / 100) * clampedBatteryCapacity
  const gridEnergyNeeded = gridPower * hoursNeeded

  let hours = Math.floor(hoursNeeded)
  let minutes = Math.round((hoursNeeded - hours) * 60)
  if (minutes === 60) {
    hours += 1
    minutes = 0
  }

  return {
    gridPower,
    chargingPower,
    chargingSpeed,
    chargeNeeded,
    hoursNeeded,
    energyNeeded,
    gridEnergyNeeded,
    formattedTime: `${hours} hours ${minutes} minutes`
  }
}
