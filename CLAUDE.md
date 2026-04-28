# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start Vite dev server
npm run build      # production build to dist/
npm run lint       # ESLint (zero warnings allowed)
npm run preview    # preview the production build locally
npm run deploy     # build + push to gh-pages branch
```

There are no tests.

## Architecture

Single-page React app — one calculator screen, no routing. Entry point: `main.tsx` → `App.tsx` → `EVChargingCalculator.tsx`.

**Data flow:** All form state lives in `EVChargingCalculator` via `useLocalStorage`. On every render, `calculateChargingMetrics()` is called synchronously with the current form values and the result is passed straight to `ChargingResults`. There is no async logic, no context, no state management library.

**Key files:**
- `src/EVChargingCalculator.tsx` — form, state, orchestration
- `src/utils/chargingCalculations.ts` — pure calculation logic; `ChargingMetricsParams` and `ChargingMetrics` are the canonical input/output types
- `src/hooks/useLocalStorage.ts` — generic hook; persistence is opt-in via an `enabled` flag driven by the "remember values" checkbox
- `src/components/` — thin MUI wrappers: `InputField`, `SelectField`, `CheckboxField`, `ChargingResults`

**Grid vs. battery power distinction:** `gridPower = phases × amps × volts / 1000`. `chargingPower = gridPower × (1 − loss%)`. Time and speed are calculated from `chargingPower`; grid energy is calculated from `gridPower`. `ChargingResults` only shows grid metrics when `chargingLoss > 0`.

## Style

- TypeScript throughout (`.ts`/`.tsx`); `App.tsx` is the place to add any future providers/wrappers
- No semicolons (enforced by ESLint)
- MUI v7 with Emotion; use `sx` prop for inline styles
- Deployed to GitHub Pages via `gh-pages` at `ltpk.github.io/ev-charging-calc`
