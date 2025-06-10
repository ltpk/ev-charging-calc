/**
 * Calculate all charging metrics based on input parameters
 * 
 * @param {Object} params - Charging parameters
 * @param {number} params.phases - Number of phases (typically 1 or 3)
 * @param {number} params.batteryCapacity - Battery capacity in kWh
 * @param {number} params.amperage - Current in amperes
 * @param {number} params.voltage - Voltage in volts
 * @param {number} params.initialCharge - Initial charge percentage
 * @param {number} params.targetCharge - Target charge percentage
 * @param {number} params.chargingLoss - Charging loss percentage (optional)
 * @returns {Object} Calculated charging metrics
 */
export const calculateChargingMetrics = ({
  phases,
  batteryCapacity,
  amperage,
  voltage,
  initialCharge,
  targetCharge,
  chargingLoss = 5
}) => {
  // Calculate raw charging power
  const rawChargingPower = (phases * amperage * voltage) / 1000
  // Adjust for charging loss
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
