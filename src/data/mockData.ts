import { CameraFeed, IntersectionSignal, IncidentAlert, HourlyTrafficData, CaseStudy, PricingPlan } from '../types';

export const INITIAL_CAMERAS: CameraFeed[] = [
  {
    id: 'cam-01',
    name: 'CAM-101 (North Ave & 5th St)',
    intersectionName: 'North Ave / 5th St Crossing',
    locationCode: 'SEC-A14-NORTH',
    status: 'ONLINE',
    resolution: '4K UltraHD @ 60fps',
    fps: 60,
    vehiclesCount: 42,
    avgSpeedKmH: 48,
    congestionLevel: 'MODERATE',
    boxes: [
      { id: 'v1', type: 'car', confidence: 0.98, speedKmH: 45, x: 22, y: 35, direction: 'N' },
      { id: 'v2', type: 'bus', confidence: 0.99, speedKmH: 38, x: 52, y: 48, direction: 'S' },
      { id: 'v3', type: 'truck', confidence: 0.95, speedKmH: 40, x: 70, y: 65, direction: 'E' },
      { id: 'v4', type: 'car', confidence: 0.97, speedKmH: 52, x: 35, y: 20, direction: 'N' },
      { id: 'v5', type: 'ambulance', confidence: 0.99, speedKmH: 68, x: 45, y: 55, direction: 'W' },
      { id: 'v6', type: 'bicycle', confidence: 0.92, speedKmH: 18, x: 82, y: 30, direction: 'E' },
    ]
  },
  {
    id: 'cam-02',
    name: 'CAM-102 (Highway 101 Overpass)',
    intersectionName: 'Highway 101 / Central Arterial',
    locationCode: 'HWY-101-N4',
    status: 'ONLINE',
    resolution: '4K UltraHD @ 60fps',
    fps: 60,
    vehiclesCount: 88,
    avgSpeedKmH: 72,
    congestionLevel: 'LOW',
    boxes: [
      { id: 'v21', type: 'car', confidence: 0.99, speedKmH: 78, x: 15, y: 40, direction: 'N' },
      { id: 'v22', type: 'truck', confidence: 0.96, speedKmH: 65, x: 40, y: 50, direction: 'S' },
      { id: 'v23', type: 'car', confidence: 0.98, speedKmH: 74, x: 62, y: 35, direction: 'N' },
      { id: 'v24', type: 'police', confidence: 0.99, speedKmH: 85, x: 80, y: 60, direction: 'S' },
    ]
  },
  {
    id: 'cam-03',
    name: 'CAM-103 (Downtown Financial Plaza)',
    intersectionName: 'Financial Plaza & Grand Blvd',
    locationCode: 'SEC-D02-DT',
    status: 'ONLINE',
    resolution: '1080p AI Edge Node',
    fps: 50,
    vehiclesCount: 64,
    avgSpeedKmH: 26,
    congestionLevel: 'HEAVY',
    boxes: [
      { id: 'v31', type: 'bus', confidence: 0.99, speedKmH: 20, x: 30, y: 45, direction: 'E' },
      { id: 'v32', type: 'car', confidence: 0.97, speedKmH: 25, x: 50, y: 30, direction: 'W' },
      { id: 'v33', type: 'pedestrian', confidence: 0.94, speedKmH: 4, x: 65, y: 75, direction: 'S' },
      { id: 'v34', type: 'car', confidence: 0.96, speedKmH: 28, x: 20, y: 60, direction: 'E' },
    ]
  },
  {
    id: 'cam-04',
    name: 'CAM-104 (Tech District East Gateway)',
    intersectionName: 'Innovation Pkwy & University Dr',
    locationCode: 'SEC-T09-EAST',
    status: 'ONLINE',
    resolution: '4K UltraHD @ 60fps',
    fps: 60,
    vehiclesCount: 31,
    avgSpeedKmH: 52,
    congestionLevel: 'LOW',
    boxes: [
      { id: 'v41', type: 'car', confidence: 0.98, speedKmH: 55, x: 25, y: 35, direction: 'N' },
      { id: 'v42', type: 'car', confidence: 0.97, speedKmH: 50, x: 55, y: 55, direction: 'S' },
    ]
  }
];

export const INITIAL_INTERSECTIONS: IntersectionSignal[] = [
  {
    id: 'int-01',
    name: 'North Ave & 5th St Crossing',
    district: 'Downtown North',
    coordinates: { lat: 37.7749, lng: -122.4194 },
    mode: 'AI_AUTO',
    currentPhase: 'NORTH_SOUTH_GREEN',
    phaseTimeRemainingSec: 28,
    northSouthGreenSec: 42,
    eastWestGreenSec: 30,
    queueLengthMeters: { north: 45, south: 30, east: 85, west: 60 },
    efficiencyScore: 94,
    emergencyActive: false
  },
  {
    id: 'int-02',
    name: 'Highway 101 & Central Arterial',
    district: 'North Corridor',
    coordinates: { lat: 37.7833, lng: -122.4167 },
    mode: 'AI_AUTO',
    currentPhase: 'EAST_WEST_GREEN',
    phaseTimeRemainingSec: 14,
    northSouthGreenSec: 25,
    eastWestGreenSec: 55,
    queueLengthMeters: { north: 20, south: 15, east: 35, west: 40 },
    efficiencyScore: 98,
    emergencyActive: false
  },
  {
    id: 'int-03',
    name: 'Financial Plaza & Grand Blvd',
    district: 'Financial Core',
    coordinates: { lat: 37.7695, lng: -122.4221 },
    mode: 'AI_AUTO',
    currentPhase: 'NORTH_SOUTH_GREEN',
    phaseTimeRemainingSec: 8,
    northSouthGreenSec: 38,
    eastWestGreenSec: 38,
    queueLengthMeters: { north: 110, south: 95, east: 130, west: 105 },
    efficiencyScore: 82,
    emergencyActive: false
  },
  {
    id: 'int-04',
    name: 'Innovation Pkwy & University Dr',
    district: 'Tech Hub',
    coordinates: { lat: 37.7812, lng: -122.4089 },
    mode: 'AI_AUTO',
    currentPhase: 'EAST_WEST_GREEN',
    phaseTimeRemainingSec: 32,
    northSouthGreenSec: 30,
    eastWestGreenSec: 40,
    queueLengthMeters: { north: 15, south: 20, east: 25, west: 18 },
    efficiencyScore: 96,
    emergencyActive: false
  }
];

export const INITIAL_INCIDENTS: IncidentAlert[] = [
  {
    id: 'inc-101',
    timestamp: '2 mins ago',
    intersectionId: 'int-01',
    intersectionName: 'North Ave & 5th St Crossing',
    type: 'EMERGENCY_PRIORITY',
    severity: 'CRITICAL',
    description: 'Ambulance #402 requesting green corridor on Westbound approach.',
    resolved: false
  },
  {
    id: 'inc-102',
    timestamp: '12 mins ago',
    intersectionId: 'int-03',
    intersectionName: 'Financial Plaza & Grand Blvd',
    type: 'ACCIDENT',
    severity: 'HIGH',
    description: 'Minor fender bender blocking Eastbound Right Turn lane. AI adjusting signal cycle.',
    resolved: false
  },
  {
    id: 'inc-103',
    timestamp: '35 mins ago',
    intersectionId: 'int-02',
    intersectionName: 'Highway 101 & Central Arterial',
    type: 'PEDESTRIAN_HAZARD',
    severity: 'MEDIUM',
    description: 'Pedestrian countdown extended by +12s due to crowd surge.',
    resolved: true
  }
];

export const HOURLY_TRAFFIC_DATA: HourlyTrafficData[] = [
  { time: '00:00', aiThroughput: 820, legacyThroughput: 610, avgDelaySec: 14, co2ReductionKg: 140 },
  { time: '03:00', aiThroughput: 450, legacyThroughput: 380, avgDelaySec: 10, co2ReductionKg: 90 },
  { time: '06:00', aiThroughput: 1850, legacyThroughput: 1200, avgDelaySec: 28, co2ReductionKg: 420 },
  { time: '08:00', aiThroughput: 3420, legacyThroughput: 2210, avgDelaySec: 45, co2ReductionKg: 890 },
  { time: '10:00', aiThroughput: 2780, legacyThroughput: 1950, avgDelaySec: 32, co2ReductionKg: 680 },
  { time: '12:00', aiThroughput: 2950, legacyThroughput: 2080, avgDelaySec: 34, co2ReductionKg: 710 },
  { time: '14:00', aiThroughput: 2810, legacyThroughput: 1980, avgDelaySec: 31, co2ReductionKg: 650 },
  { time: '17:00', aiThroughput: 3890, legacyThroughput: 2450, avgDelaySec: 52, co2ReductionKg: 990 },
  { time: '19:00', aiThroughput: 2900, legacyThroughput: 1920, avgDelaySec: 29, co2ReductionKg: 620 },
  { time: '21:00', aiThroughput: 1650, legacyThroughput: 1150, avgDelaySec: 18, co2ReductionKg: 340 },
  { time: '23:00', aiThroughput: 980, legacyThroughput: 720, avgDelaySec: 12, co2ReductionKg: 180 },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-atlanta',
    city: 'Atlanta Metro Area',
    country: 'USA',
    population: '6.1M',
    delayReductionPct: 34,
    co2SavedTonsPerYear: 18500,
    emergencyResponseTimeSavedSec: 145,
    quote: 'PulseTraffic reduced our morning gridlock bottlenecks by 34% within the first 60 days without adding any physical lanes.',
    author: 'Marcus Vance',
    title: 'Director of Transportation, Atlanta DoT',
    badge: '180 Connected Intersections'
  },
  {
    id: 'cs-zurich',
    city: 'Zurich Metropolitan',
    country: 'Switzerland',
    population: '1.4M',
    delayReductionPct: 41,
    co2SavedTonsPerYear: 9200,
    emergencyResponseTimeSavedSec: 110,
    quote: 'The Emergency Corridor pre-emption feature reduced medical transport delays across the city center by nearly two minutes.',
    author: 'Elena Rossi',
    title: 'Chief Smart Mobility Engineer',
    badge: 'Zero Carbon Grid Pilot'
  },
  {
    id: 'cs-singapore',
    city: 'Singapore West Arterial',
    country: 'Singapore',
    population: '5.9M',
    delayReductionPct: 38,
    co2SavedTonsPerYear: 24100,
    emergencyResponseTimeSavedSec: 180,
    quote: 'Real-time computer vision queue detection gives our autonomous traffic dispatch 100% predictive coverage.',
    author: 'Dr. K. Tan',
    title: 'Head of Urban Infrastructure Automation',
    badge: '450 AI Edge Nodes'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-pilot',
    name: 'Corridor Pilot',
    description: 'Designed for single arterial corridors or small municipal test zones.',
    monthlyPricePerNode: 249,
    annualPricePerNode: 199,
    features: [
      'Up to 25 AI-enabled intersections',
      'Computer vision queue detection',
      'Dynamic signal timing engine',
      'Basic Emergency Vehicle Priority (EVP)',
      '24/7 Node health monitoring',
      'Standard email & portal support'
    ]
  },
  {
    id: 'plan-smart-city',
    name: 'Smart City Edition',
    description: 'Complete multi-district optimization with predictive AI and incident response.',
    monthlyPricePerNode: 449,
    annualPricePerNode: 359,
    popular: true,
    features: [
      'Up to 250 AI-enabled intersections',
      '4K UltraHD 60fps edge computer vision',
      'Automated Emergency Green Corridors',
      'Anomalous incident & accident alerts',
      'CO2 emissions tracking dashboard',
      'API access for CAD & GIS integration',
      'Dedicated 15-minute response SLA'
    ]
  },
  {
    id: 'plan-metropolis',
    name: 'Metropolis Enterprise',
    description: 'Custom infrastructure deployment for major metropolitan transit authorities.',
    monthlyPricePerNode: 699,
    annualPricePerNode: 549,
    features: [
      'Unlimited intersections & edge cameras',
      'Custom regional AI model fine-tuning',
      'V2X / Autonomous vehicle handshake',
      'Air gap / On-premise hybrid option',
      'Dedicated traffic engineer support team',
      'NEMA TS2 & IEEE 1609 hardware compliance',
      'Custom SLA & uptime guarantee (99.99%)'
    ]
  }
];
