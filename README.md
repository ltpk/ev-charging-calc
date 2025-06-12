# EV Charging Calculator

This project is a modern EV charging calculator built with React, Material UI, and TypeScript. It allows users to estimate charging time, power, and energy for electric vehicles, with support for custom parameters and persistent settings.

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

```zsh
npm install
```

### Run the app in development mode

```zsh
npm run dev
```

### Build for production

```zsh
npm run build
```

## Project Structure

- `src/` — Main source code (all files are TypeScript: `.tsx`/`.ts`)
- `components/` — UI components (Material UI based)
- `utils/` — Calculation logic
- `hooks/` — Custom React hooks

## Migration Notes

- All logic and UI are now in `.ts`/`.tsx` files. Old `.js`/`.jsx` files are deprecated and can be deleted.
- Uses strict TypeScript settings for safety and maintainability.

## License

MIT