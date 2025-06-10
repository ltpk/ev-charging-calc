# EV charging calculator

A simple EV charging calculator implemented with React & Vite. Claude 3.5 and later 3.7 Sonnet have been heavily utilized in the development.

Can be used as a quick tool to calculate the charging time needed to reach the desired charge state when some typical charging parameters are known.

Currently hosted at https://ltpk.github.io/ev-charging-calc/

## How to run locally

1. Clone this repo
2. Run `npm install`
3. Run `npm run dev`
4. The application runs at http://localhost:5173/

# TODO

- [x] Fix the issue with inputs losing focus after changing value (changed them to "range" fields)
- [ ] General cleanup & optimization (maybe even a complete rewrite, who knows)
- [ ] Preset battery capacity values for some most common EV's
- [ ] Integration with spot price information for selecting the optimal charging time
- [x] Taking charging efficiency into account
- [ ] etc.