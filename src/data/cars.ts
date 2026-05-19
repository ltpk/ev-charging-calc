export interface Car {
  make: string
  model: string
  batteryCapacity: number
  chargerCap: number
  acPhases: 1 | 3
}

// Popular EV models in Finland — all variants. Battery = usable kWh, chargerCap = max AC kW.
export const cars: Car[] = [
  // Audi
  { make: 'Audi', model: 'Q4 e-tron 35', batteryCapacity: 52, chargerCap: 11, acPhases: 3 },
  { make: 'Audi', model: 'Q4 e-tron 40', batteryCapacity: 76.6, chargerCap: 11, acPhases: 3 },
  { make: 'Audi', model: 'Q6 e-tron', batteryCapacity: 94.9, chargerCap: 11, acPhases: 3 },
  { make: 'Audi', model: 'Q8 e-tron', batteryCapacity: 106, chargerCap: 11, acPhases: 3 },
  { make: 'Audi', model: 'Q8 e-tron (22 kW charger)', batteryCapacity: 106, chargerCap: 22, acPhases: 3 },

  // BMW
  { make: 'BMW', model: 'i4 eDrive35', batteryCapacity: 67, chargerCap: 11, acPhases: 3 },
  { make: 'BMW', model: 'i4 eDrive40', batteryCapacity: 83.9, chargerCap: 11, acPhases: 3 },
  { make: 'BMW', model: 'i5 eDrive40', batteryCapacity: 81.2, chargerCap: 11, acPhases: 3 },
  { make: 'BMW', model: 'iX3', batteryCapacity: 74, chargerCap: 11, acPhases: 3 },

  // Cupra
  { make: 'Cupra', model: 'Born 58 kWh', batteryCapacity: 58, chargerCap: 11, acPhases: 3 },
  { make: 'Cupra', model: 'Born 77 kWh', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },

  // Ford
  { make: 'Ford', model: 'Explorer Extended Range', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },
  { make: 'Ford', model: 'Mustang Mach-E Standard Range', batteryCapacity: 70.8, chargerCap: 11, acPhases: 3 },
  { make: 'Ford', model: 'Mustang Mach-E Extended Range', batteryCapacity: 91, chargerCap: 11, acPhases: 3 },

  // Hyundai
  { make: 'Hyundai', model: 'Ioniq 5 Standard Range', batteryCapacity: 58, chargerCap: 11, acPhases: 3 },
  { make: 'Hyundai', model: 'Ioniq 5 Long Range', batteryCapacity: 77.4, chargerCap: 11, acPhases: 3 },
  { make: 'Hyundai', model: 'Ioniq 6 Standard Range', batteryCapacity: 53, chargerCap: 11, acPhases: 3 },
  { make: 'Hyundai', model: 'Ioniq 6 Long Range', batteryCapacity: 74, chargerCap: 11, acPhases: 3 },
  { make: 'Hyundai', model: 'Kona EV 64 kWh (2021–2023)', batteryCapacity: 64, chargerCap: 7.2, acPhases: 1 },
  { make: 'Hyundai', model: 'Kona EV (2023+)', batteryCapacity: 64.8, chargerCap: 11, acPhases: 3 },

  // Jaguar — pre-2021 models had a 7 kW single-phase charger
  { make: 'Jaguar', model: 'I-Pace (2018–2020)', batteryCapacity: 84.7, chargerCap: 7, acPhases: 1 },
  { make: 'Jaguar', model: 'I-Pace (2021+)', batteryCapacity: 84.7, chargerCap: 11, acPhases: 3 },

  // Mercedes-Benz
  { make: 'Mercedes-Benz', model: 'EQA 250', batteryCapacity: 66.5, chargerCap: 11, acPhases: 3 },
  { make: 'Mercedes-Benz', model: 'EQA 250+', batteryCapacity: 70.5, chargerCap: 11, acPhases: 3 },
  { make: 'Mercedes-Benz', model: 'EQB 250', batteryCapacity: 66.5, chargerCap: 11, acPhases: 3 },
  { make: 'Mercedes-Benz', model: 'EQB 250+', batteryCapacity: 70.5, chargerCap: 11, acPhases: 3 },

  // Kia
  { make: 'Kia', model: 'EV3 Standard Range', batteryCapacity: 56, chargerCap: 11, acPhases: 3 },
  { make: 'Kia', model: 'EV3 Long Range', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },
  { make: 'Kia', model: 'EV6 Standard Range', batteryCapacity: 58, chargerCap: 11, acPhases: 3 },
  { make: 'Kia', model: 'EV6 Long Range', batteryCapacity: 77.4, chargerCap: 11, acPhases: 3 },
  { make: 'Kia', model: 'EV6 GT', batteryCapacity: 77.4, chargerCap: 11, acPhases: 3 },
  { make: 'Kia', model: 'EV9', batteryCapacity: 99.8, chargerCap: 11, acPhases: 3 },
  { make: 'Kia', model: 'e-Niro 64 kWh (2018–2022)', batteryCapacity: 64, chargerCap: 7.2, acPhases: 1 },
  { make: 'Kia', model: 'Niro EV (2023+)', batteryCapacity: 64.8, chargerCap: 11, acPhases: 3 },

  // Nissan — Leaf uses single-phase AC charging only
  { make: 'Nissan', model: 'Leaf 40 kWh', batteryCapacity: 36, chargerCap: 7.4, acPhases: 1 },
  { make: 'Nissan', model: 'Leaf e+', batteryCapacity: 59, chargerCap: 7.4, acPhases: 1 },

  // Polestar — Polestar 2 Long Range supports 22 kW AC with the Plus Pack
  { make: 'Polestar', model: 'Polestar 2 Standard Range', batteryCapacity: 67, chargerCap: 11, acPhases: 3 },
  { make: 'Polestar', model: 'Polestar 2 Long Range', batteryCapacity: 75, chargerCap: 11, acPhases: 3 },
  { make: 'Polestar', model: 'Polestar 3 Long Range', batteryCapacity: 107, chargerCap: 11, acPhases: 3 },
  { make: 'Polestar', model: 'Polestar 4 Long Range', batteryCapacity: 94, chargerCap: 11, acPhases: 3 },
  { make: 'Polestar', model: 'Polestar 4 Long Range (22 kW)', batteryCapacity: 94, chargerCap: 22, acPhases: 3 },

  // Skoda
  { make: 'Skoda', model: 'Enyaq 50', batteryCapacity: 52, chargerCap: 11, acPhases: 3 },
  { make: 'Skoda', model: 'Enyaq 60', batteryCapacity: 58, chargerCap: 11, acPhases: 3 },
  { make: 'Skoda', model: 'Enyaq 80', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },
  { make: 'Skoda', model: 'Elroq 50', batteryCapacity: 52, chargerCap: 11, acPhases: 3 },
  { make: 'Skoda', model: 'Elroq 60', batteryCapacity: 59, chargerCap: 11, acPhases: 3 },
  { make: 'Skoda', model: 'Elroq 85', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },

  // Toyota
  { make: 'Toyota', model: 'bZ4X', batteryCapacity: 71.4, chargerCap: 11, acPhases: 3 },

  // Tesla — Model S/X (2021+ refresh) have a 16.5 kW onboard charger (3-phase 24A)
  { make: 'Tesla', model: 'Model 3 Standard Range', batteryCapacity: 57.5, chargerCap: 11, acPhases: 3 },
  { make: 'Tesla', model: 'Model 3 Long Range', batteryCapacity: 82, chargerCap: 11, acPhases: 3 },
  { make: 'Tesla', model: 'Model S Long Range', batteryCapacity: 96, chargerCap: 16.5, acPhases: 3 },
  { make: 'Tesla', model: 'Model S Plaid', batteryCapacity: 96, chargerCap: 16.5, acPhases: 3 },
  { make: 'Tesla', model: 'Model X Long Range', batteryCapacity: 96, chargerCap: 16.5, acPhases: 3 },
  { make: 'Tesla', model: 'Model X Plaid', batteryCapacity: 96, chargerCap: 11, acPhases: 3 },
  { make: 'Tesla', model: 'Model Y', batteryCapacity: 79, chargerCap: 11, acPhases: 3 },

  // Volkswagen
  { make: 'Volkswagen', model: 'ID.3 Pro', batteryCapacity: 58, chargerCap: 11, acPhases: 3 },
  { make: 'Volkswagen', model: 'ID.3 Pro S', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },
  { make: 'Volkswagen', model: 'ID.4 Pro', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },
  { make: 'Volkswagen', model: 'ID.4 GTX', batteryCapacity: 79, chargerCap: 11, acPhases: 3 },
  { make: 'Volkswagen', model: 'ID.5 Pro', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },
  { make: 'Volkswagen', model: 'ID.5 GTX', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },
  { make: 'Volkswagen', model: 'ID.7 Pro', batteryCapacity: 77, chargerCap: 11, acPhases: 3 },
  { make: 'Volkswagen', model: 'ID.7 Pro S', batteryCapacity: 86, chargerCap: 11, acPhases: 3 },

  // Volvo
  { make: 'Volvo', model: 'EX30 Standard Range', batteryCapacity: 49, chargerCap: 11, acPhases: 3 },
  { make: 'Volvo', model: 'EX30 Extended Range', batteryCapacity: 64, chargerCap: 11, acPhases: 3 },
  { make: 'Volvo', model: 'C40 Recharge', batteryCapacity: 79, chargerCap: 11, acPhases: 3 },
  { make: 'Volvo', model: 'EX40', batteryCapacity: 79, chargerCap: 11, acPhases: 3 },
  { make: 'Volvo', model: 'EX90', batteryCapacity: 107, chargerCap: 11, acPhases: 3 },

  // Peugeot — e-2008 standard uses single-phase AC charging
  { make: 'Peugeot', model: 'e-2008', batteryCapacity: 50.8, chargerCap: 7.4, acPhases: 1 },
]
