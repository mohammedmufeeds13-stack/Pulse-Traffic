export type SignalMode = 'AI_AUTO' | 'MANUAL_OVERRIDE' | 'EMERGENCY_CORRIDOR' | 'NIGHT_FLASH';

export type SignalPhase = 'NORTH_SOUTH_GREEN' | 'NORTH_SOUTH_YELLOW' | 'EAST_WEST_GREEN' | 'EAST_WEST_YELLOW' | 'ALL_RED';

export interface BoundingBox {
  id: string;
  type: 'car' | 'bus' | 'truck' | 'ambulance' | 'fire_truck' | 'police' | 'pedestrian' | 'bicycle';
  confidence: number;
  speedKmH: number;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  direction: 'N' | 'S' | 'E' | 'W';
}

export interface CameraFeed {
  id: string;
  name: string;
  intersectionName: string;
  locationCode: string;
  status: 'ONLINE' | 'DEGRADED' | 'OFFLINE';
  resolution: string;
  fps: number;
  vehiclesCount: number;
  avgSpeedKmH: number;
  congestionLevel: 'LOW' | 'MODERATE' | 'HEAVY' | 'CRITICAL';
  boxes: BoundingBox[];
}

export interface IntersectionSignal {
  id: string;
  name: string;
  district: string;
  coordinates: { lat: number; lng: number };
  mode: SignalMode;
  currentPhase: SignalPhase;
  phaseTimeRemainingSec: number;
  northSouthGreenSec: number;
  eastWestGreenSec: number;
  queueLengthMeters: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
  efficiencyScore: number; // 0-100
  emergencyActive: boolean;
  emergencyVehicleType?: 'AMBULANCE' | 'FIRE_ENGINE' | 'POLICE';
}

export interface IncidentAlert {
  id: string;
  timestamp: string;
  intersectionId: string;
  intersectionName: string;
  type: 'ACCIDENT' | 'STALLED_VEHICLE' | 'EMERGENCY_PRIORITY' | 'PEDESTRIAN_HAZARD' | 'SIGNAL_FAULT';
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'INFO';
  description: string;
  resolved: boolean;
}

export interface HourlyTrafficData {
  time: string;
  aiThroughput: number; // vehicles per hour
  legacyThroughput: number;
  avgDelaySec: number;
  co2ReductionKg: number;
}

export interface RoiCalculatorInputs {
  population: number;
  intersections: number;
  avgCommuteMins: number;
  gasPricePerLiter: number;
}

export interface CaseStudy {
  id: string;
  city: string;
  country: string;
  population: string;
  delayReductionPct: number;
  co2SavedTonsPerYear: number;
  emergencyResponseTimeSavedSec: number;
  quote: string;
  author: string;
  title: string;
  badge: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPricePerNode: number;
  annualPricePerNode: number;
  popular?: boolean;
  features: string[];
}
