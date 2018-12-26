import { point } from '@turf/helpers'
import  distance from '@turf/distance'
import GeographicLib from 'geographiclib'

export class Distance {
  static haversine(p1, p2) {
    return new Distance(p1, p2).haversineDistance()
  }

  static karney(p1, p2) {
    return new Distance(p1, p2).karneyDistance()
  }

  constructor(p1, p2) {
    this.p1 = p1
    this.p2 = p2
  }

  haversineDistance() {
    const { p1, p2 } = this
    const from = point([p1.lng, p1.lat])
    const to = point([p2.lng, p2.lat])
    const dist = distance(from, to) // km
    return (dist * 1000).toFixed(3) // meters
  }

  karneyDistance() {
    const { p1, p2 } = this
    const geodesic = GeographicLib.Geodesic.WGS84
    const r = geodesic.Inverse(p1.lat, p1.lng, p2.lat, p2.lng)
    return r.s12.toFixed(3) // meters
  }
}
