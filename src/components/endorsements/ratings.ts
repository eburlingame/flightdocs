import { Endorsement, endorsementFor } from "./endorsements";

export type Level =
  | "Student Pilot"
  | "Sport Pilot"
  | "Recreational Pilot"
  | "Private Pilot"
  | "Commercial Pilot"
  | "Flight Instructor"
  | "Airline Transport Pilot";

export const allLevels: Level[] = [
  "Student Pilot",
  "Sport Pilot",
  "Recreational Pilot",
  "Private Pilot",
  "Commercial Pilot",
  "Flight Instructor",
  "Airline Transport Pilot",
];

export type AircraftCategory =
  | "Airplane"
  | "Rotorcraft"
  | "Glider"
  | "Lighter-than-air"
  | "Powered-lift"
  | "Powered parachute"
  | "Weight-shift control";

export const allAircraftCategories: AircraftCategory[] = [
  "Airplane",
  "Rotorcraft",
  "Glider",
  "Lighter-than-air",
  "Powered-lift",
  "Powered parachute",
  "Weight-shift control",
];

export type AircraftClass =
  | "Single-engine land"
  | "Single-engine sea"
  | "Multi-engine land"
  | "Multi-engine sea"
  | "Gyroplane"
  | "Helicopter"
  | "Airship"
  | "Free balloon"
  | "Powered parachute land"
  | "Powered parachute sea"
  | "Weight-shift control land"
  | "Weight-shift control sea";

export const aircraftCategories: Record<AircraftCategory, AircraftClass[]> = {
  Airplane: [
    "Single-engine land",
    "Single-engine sea",
    "Multi-engine land",
    "Multi-engine sea",
  ],
  Rotorcraft: ["Gyroplane", "Helicopter"],
  Glider: [],
  "Lighter-than-air": ["Airship", "Free balloon"],
  "Powered-lift": [],
  "Powered parachute": ["Powered parachute land", "Powered parachute sea"],
  "Weight-shift control": [
    "Weight-shift control land",
    "Weight-shift control sea",
  ],
};

export const levelTransitions: Record<Level, Level[]> = {
  // Also includes the level itself
  "Student Pilot": [
    "Student Pilot",
    "Sport Pilot",
    "Recreational Pilot",
    "Private Pilot",
  ],
  "Sport Pilot": ["Sport Pilot", "Recreational Pilot", "Private Pilot"],
  "Recreational Pilot": ["Recreational Pilot", "Private Pilot"],
  "Private Pilot": [
    "Private Pilot",
    "Sport Pilot",
    "Recreational Pilot",
    "Commercial Pilot",
  ],
  "Commercial Pilot": [
    "Commercial Pilot",
    "Private Pilot",
    "Sport Pilot",
    "Recreational Pilot",
    "Flight Instructor",
    "Airline Transport Pilot",
  ],
  "Flight Instructor": [
    "Flight Instructor",
    "Airline Transport Pilot",
    "Commercial Pilot",
  ],
  "Airline Transport Pilot": [
    "Private Pilot",
    "Sport Pilot",
    "Recreational Pilot",
    "Flight Instructor",
    "Airline Transport Pilot",
  ],
};

export type Certificate = {
  level: Level;
  category: AircraftCategory;
  class: AircraftClass;
};

export type Rating = {
  name: string;
  eligibility: string[];
  endorsements: Endorsement[];
  proficiency: string[];
  aeronauticalExperience: string[];
};

const emptyRating = (): Rating => ({
  name: "",
  eligibility: [],
  endorsements: [],
  proficiency: [],
  aeronauticalExperience: [],
});

const newClassRating = (): Rating => {
  return {
    name: "New Class Rating - 61.63",
    eligibility: [],
    endorsements: [
      endorsementFor("A.72", "Required to fly solo for training"),
      endorsementFor("A.74"),
    ],
    proficiency: [
      "Must have a logbook or training record endorsement from an authorized instructor attesting that the person was found competent in the appropriate aeronautical knowledge areas and proficient in the appropriate areas of operation",
    ],
    aeronauticalExperience: ["No specific aeronautical experience required"],
  };
};

export const initialCategoryRating = (
  name: string,
  level: Level,
  category: AircraftCategory,
  writtenTestRequired: boolean = true
): Rating => {
  if (level === "Recreational Pilot") {
    return {
      name,
      eligibility: [
        "Must be at least 17 years old",
        "Must be able to read, speak, write, and understand the English language",
        "Must hold at leasts a student or sport pilot certificate",
      ],
      endorsements: [
        ...(writtenTestRequired
          ? [
              endorsementFor("A.25"),
              endorsementFor("A.82"),
              endorsementFor("A.2"),
            ]
          : []),

        endorsementFor("A.1"),
        endorsementFor("A.26"),
      ],
      proficiency: [
        "Receive and log ground training from an authorized instructor or complete a home-study course on the aeronautical knowledge areas 61.97(b)",
        "Ground and flight training on the areas of operation listed in 61.98(b) for the appropriate category and class",
      ],
      aeronauticalExperience: [
        "30 hours of flight time, which includes",
        "15 hours of flight training from an authorized instructor on the areas of operation listed in 61.98(b)",
        "2 hours of flight training en route to an airport at least 25 nautical miles from the departure airport, including three takeoffs and landings",
        "3 hours of flight training with an instructor within 2 months before the practical test",
        "3 hours of solo flight time in the areas of operation listed in 61.98(b)",
      ],
      notes: "No written test required",
    };
  }

  if (level === "Private Pilot") {
    return {
      name,
      eligibility: [
        "Must be at least 17 years old",
        "Must be able to read, speak, write, and understand the English language",
        "Must hold at least a third-class medical certificate",
      ],
      endorsements: [
        ...(writtenTestRequired
          ? [
              endorsementFor("A.32"),
              endorsementFor("A.82"),
              endorsementFor("A.2"),
            ]
          : []),

        endorsementFor("A.1"),
        endorsementFor("A.33"),
      ],
      proficiency: [
        "Receive and log ground training from an authorized instructor or complete a home-study course on the aeronautical knowledge areas 61.105(b)",
        "Ground and flight training on the areas of operation listed in 61.107(b) for the appropriate category and class",
      ],
      aeronauticalExperience: [
        "40 hours of flight time, which includes",
        "20 hours of flight training from an authorized instructor on the areas of operation listed in 61.107(b)",
        "10 hours of solo flight time in the areas of operation listed in 61.107(b), including",
        "3 hours of cross-country flight training",
        "3 hours of night flight training, including 10 takeoffs and landings to a full stop at night in an aircraft of the same category and class, and a cross-country flight of over 100 nautical miles",
        "3 hours of flight training with an instructor within 2 months before the practical test",
        "10 hours of solo flight time, including",
        "5 hours of solo cross-country time",
        "1 solo cross-country flight of over 150 nautical miles with full-stop landings at three points, and one segment of the flight consisting of a straight-line distance of more than 50 nautical miles between takeoff and landing locations",
        "3 solo takeoffs and landings to a full stop at an airport with an operating control tower",
      ],
    };
  }

  if (level === "Commercial Pilot") {
    return {
      name,
      eligibility: [
        "Must be at least 18 years old",
        "Must be able to read, speak, write, and understand the English language",
        "Must hold at least a private pilot certificate",
      ],
      endorsements: [
        ...(writtenTestRequired
          ? [
              endorsementFor("A.34"),
              endorsementFor("A.82"),
              endorsementFor("A.2", "if required"),
            ]
          : []),

        endorsementFor("A.1"),
        endorsementFor("A.35"),
      ],
      proficiency: [
        "Receive and log ground training from an authorized instructor or complete a home-study course on the aeronautical knowledge areas 61.125(b)",
        "Ground and flight training on the areas of operation listed in 61.127(b) for the appropriate category and class",
      ],
      aeronauticalExperience: [
        "250 hours of flight time, which includes:",
        "100 hours in powered aircraft, of which 50 hours must be in airplanes",
        "100 hours of pilot-in-command time, which includes:",
        "50 hours in airplanes",
        "50 hours of cross-country flight time, of which 10 hours must be in airplanes",
        "20 hours of flight training from an authorized instructor on the areas of operation listed in 61.127(b)",
        "10 hours of instrument training in airplanes. 5 of the 10 hours must be in single-engine airplanes",
        "10 hours of training in a complex airplane, a turbine-powered airplane, or a technically advanced airplane",
        "One 2-hour cross-country flight with an instructor of more than 100nm in daytime conditions",
        "One 2-hour cross-country flight with an instructor of more than 100nm in night conditions",
        "3 hours of flight training within 2 months before the practical test",
        "10 hours of solo flight time in the areas of operation listed in 61.127(b), including:",
        "1 cross-country flight of not less than 300nm total distance, with landings at a minimum of 3 points, one of which is a straight-line distance of at least 250nm from the original departure point",
        "5 hours in night VFR conditions with 10 takeoffs and 10 landings (with each landing involving a flight in the traffic pattern) at an airport with an operating control tower",
      ],
    };
  }

  if (level === "Sport Pilot") {
  }

  return emptyRating();
};

const hasPowered = (currentCategory: AircraftCategory) => {
  return (
    currentCategory === "Airplane" ||
    currentCategory === "Rotorcraft" ||
    currentCategory === "Powered-lift" ||
    currentCategory === "Weight-shift control" ||
    currentCategory === "Powered parachute"
  );
};

export const computeRatingRequirements = (
  currentCertificate: Certificate,
  targetCertificate: Certificate
): Rating => {
  if (currentCertificate.category === targetCertificate.category) {
    // Same category
    if (currentCertificate.class === targetCertificate.class) {
      // Same class

      if (currentCertificate.level === targetCertificate.level) {
        // Same level - noop
      } else {
        return initialCategoryRating(
          `${targetCertificate.level} - Initial Certificate`,
          targetCertificate.level,
          targetCertificate.category
        );
      }
    } else {
      // New class
      return newClassRating();
    }
  } else {
    // New category
    const writtenTestRequired = !hasPowered(currentCertificate.category);
    console.log(writtenTestRequired);

    if (currentCertificate.level === targetCertificate.level) {
      // Same level
      return initialCategoryRating(
        `${targetCertificate.level} - New Category`,
        targetCertificate.level,
        targetCertificate.category,
        writtenTestRequired
      );
    } else {
      // New level
      return initialCategoryRating(
        `${targetCertificate.level} - New Category`,
        targetCertificate.level,
        targetCertificate.category,
        writtenTestRequired
      );
    }
  }

  return emptyRating();
};
