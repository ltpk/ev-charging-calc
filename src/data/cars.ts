export interface Car {
  make: string
  model: string
  batteryCapacity: number
  chargerCap: number
}

export const cars: Car[] = [
  { make: 'Audi', model: 'e-tron 55', batteryCapacity: 95, chargerCap: 11 },
  { make: 'Audi', model: 'Q4 e-tron 40', batteryCapacity: 76.6, chargerCap: 11 },
  { make: 'BMW', model: 'i4 eDrive40', batteryCapacity: 83.9, chargerCap: 11 },
  { make: 'BMW', model: 'iX3', batteryCapacity: 74, chargerCap: 11 },
  { make: 'BMW', model: 'iX xDrive40', batteryCapacity: 71, chargerCap: 11 },
  { make: 'Ford', model: 'Mustang Mach-E', batteryCapacity: 75.7, chargerCap: 11 },
  { make: 'Hyundai', model: 'Ioniq 5 Standard Range', batteryCapacity: 58, chargerCap: 11 },
  { make: 'Hyundai', model: 'Ioniq 5 Long Range', batteryCapacity: 77.4, chargerCap: 11 },
  { make: 'Hyundai', model: 'Ioniq 6 Standard Range', batteryCapacity: 53, chargerCap: 11 },
  { make: 'Hyundai', model: 'Ioniq 6 Long Range', batteryCapacity: 77.4, chargerCap: 11 },
  { make: 'Kia', model: 'EV6 Standard Range', batteryCapacity: 58, chargerCap: 11 },
  { make: 'Kia', model: 'EV6 Long Range', batteryCapacity: 77.4, chargerCap: 11 },
  { make: 'Kia', model: 'EV9', batteryCapacity: 99.8, chargerCap: 11 },
  { make: 'Mercedes', model: 'EQA 250', batteryCapacity: 66.5, chargerCap: 11 },
  { make: 'Mercedes', model: 'EQS 450+', batteryCapacity: 107.8, chargerCap: 11 },
  { make: 'Nissan', model: 'Leaf 40 kWh', batteryCapacity: 36, chargerCap: 7.4 },
  { make: 'Nissan', model: 'Leaf e+', batteryCapacity: 59, chargerCap: 7.4 },
  { make: 'Polestar', model: 'Polestar 2', batteryCapacity: 78, chargerCap: 11 },
  { make: 'Renault', model: 'Megane E-Tech', batteryCapacity: 60, chargerCap: 7.4 },
  { make: 'Renault', model: 'Zoe R135', batteryCapacity: 52, chargerCap: 22 },
  { make: 'Skoda', model: 'Enyaq 60', batteryCapacity: 58, chargerCap: 11 },
  { make: 'Skoda', model: 'Enyaq 80', batteryCapacity: 77, chargerCap: 11 },
  { make: 'Tesla', model: 'Model 3 Standard Range', batteryCapacity: 57.5, chargerCap: 11 },
  { make: 'Tesla', model: 'Model 3 Long Range', batteryCapacity: 82, chargerCap: 11 },
  { make: 'Tesla', model: 'Model Y Long Range', batteryCapacity: 82, chargerCap: 11 },
  { make: 'Volkswagen', model: 'ID.3 Pro', batteryCapacity: 58, chargerCap: 11 },
  { make: 'Volkswagen', model: 'ID.3 Pro S', batteryCapacity: 77, chargerCap: 11 },
  { make: 'Volkswagen', model: 'ID.4 Pro', batteryCapacity: 77, chargerCap: 11 },
  { make: 'Volvo', model: 'C40 Recharge', batteryCapacity: 79, chargerCap: 11 },
  { make: 'Volvo', model: 'XC40 Recharge', batteryCapacity: 79, chargerCap: 11 },
]
