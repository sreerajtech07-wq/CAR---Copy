/**
 * HERO TIMELINE CONFIGURATION
 * Centralized master timeline for the scroll-driven cinematic automotive sequence.
 * Directly implements Section 09 of the Master Build Specification.
 */

export interface TimelineRange {
  start: number;
  end: number;
}

export const HERO_TIMELINE = {
  ignition: [0.00, 0.10] as const,
  acceleration: [0.10, 0.30] as const,
  highSpeed: [0.30, 0.50] as const,
  cinematicCameras: [0.50, 0.66] as const,
  braking: [0.66, 0.76] as const,
  skid: [0.76, 0.84] as const,
  settle: [0.84, 0.90] as const,
  doorOpen: [0.90, 0.94] as const,
  driverExit: [0.94, 0.98] as const,
  finalReveal: [0.98, 1.00] as const,
} as const;

export type TimelinePhaseKey = keyof typeof HERO_TIMELINE;

export interface PhaseInfo {
  key: TimelinePhaseKey;
  label: string;
  sublabel: string;
  telemetry: {
    status: string;
    speedKmh: number;
    rpm: number;
    gForce: number;
    brakePressure: number;
  };
}

export function getPhaseInfo(progress: number): PhaseInfo {
  if (progress < HERO_TIMELINE.ignition[1]) {
    const p = progress / (HERO_TIMELINE.ignition[1] - HERO_TIMELINE.ignition[0]);
    return {
      key: "ignition",
      label: "PHASE 01 // IGNITION",
      sublabel: "SYSTEM STARTUP & LASER OPTIC AWAKENING",
      telemetry: {
        status: "SYSTEM INITIALIZING",
        speedKmh: 0,
        rpm: Math.round(800 * p),
        gForce: 0.0,
        brakePressure: 100,
      },
    };
  }

  if (progress < HERO_TIMELINE.acceleration[1]) {
    const p = (progress - HERO_TIMELINE.acceleration[0]) / (HERO_TIMELINE.acceleration[1] - HERO_TIMELINE.acceleration[0]);
    return {
      key: "acceleration",
      label: "PHASE 02 // ACCELERATION",
      sublabel: "FULL TORQUE DEPLOYMENT & ROAD TRACKING",
      telemetry: {
        status: "ACCELERATING",
        speedKmh: Math.round(40 + p * 120),
        rpm: Math.round(3200 + p * 4500),
        gForce: +(0.8 + p * 0.6).toFixed(2),
        brakePressure: 0,
      },
    };
  }

  if (progress < HERO_TIMELINE.highSpeed[1]) {
    const p = (progress - HERO_TIMELINE.highSpeed[0]) / (HERO_TIMELINE.highSpeed[1] - HERO_TIMELINE.highSpeed[0]);
    return {
      key: "highSpeed",
      label: "PHASE 03 // HIGH VELOCITY",
      sublabel: "AERODYNAMIC EQUILIBRIUM & LIGHT SLICING",
      telemetry: {
        status: "HIGH VELOCITY",
        speedKmh: Math.round(160 + p * 60),
        rpm: Math.round(7700 + p * 500),
        gForce: 0.95,
        brakePressure: 0,
      },
    };
  }

  if (progress < HERO_TIMELINE.cinematicCameras[1]) {
    const p = (progress - HERO_TIMELINE.cinematicCameras[0]) / (HERO_TIMELINE.cinematicCameras[1] - HERO_TIMELINE.cinematicCameras[0]);
    return {
      key: "cinematicCameras",
      label: "PHASE 04 // CINEMATIC VECTORS",
      sublabel: "MULTI-ANGLE AERODYNAMIC CLOSE-UPS",
      telemetry: {
        status: "DIRECTOR TRACKING",
        speedKmh: Math.round(180 - p * 30),
        rpm: 6500,
        gForce: 1.1,
        brakePressure: 15,
      },
    };
  }

  if (progress < HERO_TIMELINE.braking[1]) {
    const p = (progress - HERO_TIMELINE.braking[0]) / (HERO_TIMELINE.braking[1] - HERO_TIMELINE.braking[0]);
    return {
      key: "braking",
      label: "PHASE 05 // HARD BRAKING",
      sublabel: "WEIGHT TRANSFER & CARBON CALIPER CLAMP",
      telemetry: {
        status: "DECELERATING",
        speedKmh: Math.round(150 - p * 80),
        rpm: Math.round(6500 - p * 3500),
        gForce: -(1.4 + p * 0.4),
        brakePressure: Math.round(75 + p * 25),
      },
    };
  }

  if (progress < HERO_TIMELINE.skid[1]) {
    const p = (progress - HERO_TIMELINE.skid[0]) / (HERO_TIMELINE.skid[1] - HERO_TIMELINE.skid[0]);
    return {
      key: "skid",
      label: "PHASE 06 // CONTROLLED SKID",
      sublabel: "LATERAL ROTATION & TIRE SMOKE DIFFUSION",
      telemetry: {
        status: "CONTROLLED DRIFT",
        speedKmh: Math.round(70 - p * 55),
        rpm: Math.round(3000 - p * 1800),
        gForce: +(1.6 - p * 0.8).toFixed(2),
        brakePressure: 90,
      },
    };
  }

  if (progress < HERO_TIMELINE.settle[1]) {
    return {
      key: "settle",
      label: "PHASE 07 // SILENCE AFTER SPEED",
      sublabel: "SMOKE DISSIPATION & REFINED STILLNESS",
      telemetry: {
        status: "STATIONARY",
        speedKmh: 0,
        rpm: 800,
        gForce: 0.0,
        brakePressure: 0,
      },
    };
  }

  if (progress < HERO_TIMELINE.doorOpen[1]) {
    return {
      key: "doorOpen",
      label: "PHASE 08 // DIHEDRAL APERTURE",
      sublabel: "DOOR UNLATCH & COCKPIT AMBIENT REVEAL",
      telemetry: {
        status: "COCKPIT ACCESSED",
        speedKmh: 0,
        rpm: 0,
        gForce: 0.0,
        brakePressure: 0,
      },
    };
  }

  if (progress < HERO_TIMELINE.driverExit[1]) {
    return {
      key: "driverExit",
      label: "PHASE 09 // DRIVER EGRESS",
      sublabel: "STUDIO PRESENCE & COMPOSED POISE",
      telemetry: {
        status: "DRIVER PRESENT",
        speedKmh: 0,
        rpm: 0,
        gForce: 0.0,
        brakePressure: 0,
      },
    };
  }

  return {
    key: "finalReveal",
    label: "PHASE 10 // STUDIO ARRIVAL",
    sublabel: "PREMIUM CAR CARE. ADVANCED PROTECTION.",
    telemetry: {
      status: "3M STUDIO ARRIVAL",
      speedKmh: 0,
      rpm: 0,
      gForce: 0.0,
      brakePressure: 0,
    },
  };
}
