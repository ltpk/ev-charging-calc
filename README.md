# EV Charging Calculator

A modern EV charging calculator built with React, Material UI, and TypeScript. Estimates charging time, power, and energy for electric vehicles.

**Live app:** https://ltpk.github.io/ev-charging-calc

## Features

- Select from 58 EV models (top 10 makes in Finland + Tesla S/X + Jaguar) to auto-fill battery capacity, onboard charger cap, and AC phase count
- Accounts for onboard charger limit (AC charging cap) — results reflect what the car can actually accept, not just what the outlet supplies
- Adjustable parameters: battery capacity, onboard charger cap, phases, current, voltage, initial/target charge, charging loss
- Shows both battery energy and total grid energy drawn when charging loss is set
- Warns when target charge is not above initial charge
- Local storage support for persistent settings

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run the app in development mode

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Other commands

```bash
npm run lint     # ESLint (zero warnings allowed)
npm run preview  # preview the production build locally
npm run deploy   # build + push to gh-pages branch
```

## Project Structure

- `src/` — Main source code (all files are TypeScript: `.tsx`/`.ts`)
- `src/components/` — UI components (Material UI based)
- `src/data/` — Static EV model data (battery capacity, charger cap)
- `src/utils/` — Calculation logic
- `src/hooks/` — Custom React hooks

## License

MIT
