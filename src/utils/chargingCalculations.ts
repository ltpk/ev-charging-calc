export interface ChargingMetricsParams {
  phases: number;
  batteryCapacity: number;
  amperage: number;
  voltage: number;
  initialCharge: number;
  targetCharge: number;
  chargingLoss?: number;
}

export interface ChargingMetrics {
  chargingPower: number;
  chargingSpeed: number;
  chargeNeeded: number;
  hoursNeeded: number;
  energyNeeded: number;
  formattedTime: string;
}

export function calculateChargingMetrics({
  phases,
  batteryCapacity,
  amperage,
  voltage,
  initialCharge,
  targetCharge,
  chargingLoss = 5
}: ChargingMetricsParams): ChargingMetrics {
  const rawChargingPower = (phases * amperage * voltage) / 1000
  const chargingPower = rawChargingPower * (1 - chargingLoss / 100)
  const chargingSpeed = (chargingPower / batteryCapacity) * 100
  const chargeNeeded = targetCharge - initialCharge
  const hoursNeeded = chargeNeeded / chargingSpeed
  const energyNeeded = (chargeNeeded / 100) * batteryCapacity

  const hours = Math.floor(hoursNeeded)
  const minutes = Math.round((hoursNeeded % 1) * 60)

  return {
    chargingPower,
    chargingSpeed,
    chargeNeeded,
    hoursNeeded,
    energyNeeded,
    formattedTime: `${hours} hours ${minutes} minutes (${hoursNeeded.toFixed(1)} hours)`
  }
}
