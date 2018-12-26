import { benchmark } from './benchmark'
import { Distance } from './distance'

const p1 = { lat: 40.71427, lng: -74.00597 } // NYC
const p2 = { lat: 51.50853, lng: -0.12574 } // LON

const NUM_TRIALS = 1000000
let dist

benchmark(NUM_TRIALS, () => (dist = Distance.haversine(p1, p2)))
console.log(`(${dist})\n`)

benchmark(NUM_TRIALS, () => (dist = Distance.karney(p1, p2)))
console.log(`(${dist})\n`)

