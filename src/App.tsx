import React from 'react'
import EVChargingCalculator from './EVChargingCalculator'

// App is kept as the conventional React entry point component.
// If EVChargingCalculator ever needs a Router, theme provider, or other
// context wrappers, add them here rather than in main.tsx.
const App: React.FC = () => <EVChargingCalculator />

export default App
