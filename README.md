# EV Charging Calculator

A modern EV charging calculator built with React, Material UI, and TypeScript. Estimates charging time, power, and energy for electric vehicles with support for custom parameters and persistent settings.

**Live app:** https://ltpk.github.io/ev-charging-calc

## Features

- Fully typed with TypeScript
- Modern Material UI design
- Adjustable parameters: battery capacity, phases, current, voltage, initial/target charge, charging loss
- Local storage support for persistent values
- Responsive and accessible UI

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
- `src/utils/` — Calculation logic
- `src/hooks/` — Custom React hooks

## License

MIT
