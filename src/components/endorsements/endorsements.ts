export type Endorsement = {
  name: string;
  acNumber: string;
  notes: string;
};

export const endorsements: Record<string, string> = {
  "A.1": "Prerequisites for practical test: § 61.39(a)(6)(i) and (ii) ",
  "A.2":
    "Review of deficiencies identified on airman knowledge test: § 61.39(a)(6)(iii), as required ",
  "A.3": "Pre-solo aeronautical knowledge: § 61.87(b) ",
  "A.4": "Pre-solo flight training: § 61.87(c)(1) and (2) ",
  "A.5": "Pre-solo flight training at night: § 61.87(o) ",
  "A.6": "Solo flight (first 90-calendar-day period): § 61.87(n) ",
  "A.7": "Solo flight (each additional 90-calendar-day period): § 61.87(p",
  "A.8":
    "Solo takeoffs and landings at another airport within 25 nautical miles (NM): § 61.93(b)(1) ",
  "A.9": "Solo cross-country flight: § 61.93(c)(1) and (2) ",
  "A.10": "Solo cross-country flight: § 61.93(c)(3)",
  "A.11":
    "Repeated solo cross-country flights not more than 50 NM from the point ofdeparture: § 61.93(b)(2) ",
  "A.12": "Solo flight in Class B airspace: § 61.95(a) ",
  "A.13":
    "Solo flight to, from, or at an airport located in Class B airspace: § 61.95(b)and § 91.131(b)(1) ",
  "A.14":
    "Endorsement of U.S. citizenship recommended by the Transportation Security Administration (TSA): Title 49 of the Code of Federal Regulations (49 CFR) part 1552, § 1552.15(c) Additional Student Pilot Endorsements for Students Seeking Sport or Recreational Pilot Certificates",
  "A.15": "Solo flight in Class B, C, and D airspace: § 61.94(a) ",
  "A.16":
    "Solo flight to, from, or at an airport located in Class B, C, or D airspace or at an airport having an operational control tower: §§ 61.94(a) and 91.131(b)(1) ............ A-10",
  "A.17": "Aeronautical knowledge test: §§ 61.35(a)(1) and 61.309 ",
  "A.18":
    "Taking flight proficiency check for different category or class of aircraft: §§ 61.309 and 61.311 ",
  "A.19":
    "Passing flight proficiency check for different category or class of aircraft: §§ 61.309 and 61.311 ",
  "A.20": "Taking sport pilot practical test: §§ 61.309, 61.311, and 61.313 ",
  "A.21":
    "Passing a sport pilot practical test: §§ 61.309, 61.311, and 61.313 ",
  "A.22":
    "Class B, C, or D airspace; at an airport located in Class B, C, or D airspace; or to, from, through, or at an airport having an operational control tower: § 61.325 ............ A-11",
  "A.23":
    "Light-sport aircraft (LSA) that has a maximum speed in level flight with maximum continuous power (V H) less than or equal to 87 Knots Calibrated Airspeed (KCAS): § 61.327 ",
  "A.24": "LSA that has a VH greater than 87 KCAS: § 61.327 ",
  "A.25":
    "Aeronautical knowledge test: §§ 61.35(a)(1), 61.96(b)(3), and 61.97(b) ",
  "A.26":
    "Flight proficiency/practical test: §§ 61.96(b)(5), 61.98(a) and (b), and 61.99 ",
  "A.27":
    "Recreational pilot to operate within 50 NM of the airport where training was received: § 61.101(b) ",
  "A.28":
    "Recreational pilot to act as pilot in command (PIC) on a flight that exceeds 50 NM of the departure airport: § 61.101(c",
  "A.29":
    "Recreational pilot with less than 400 flight hours and no logged PIC time within the preceding 180 calendar days: § 61.101(g) ",
  "A.30":
    "Recreational pilot to conduct solo flights for the purpose of obtaining an additional certificate or rating while under the supervision of an authorized flight instructor:§ 61.101(j) ",
  "A.31":
    "Class B, C, or D airspace; at an airport located in Class B, C, or D airspace; or to, from, through, or at an airport having an operational control tower: § 61.101(d) ",
  "A.32": "Aeronautical knowledge test: §§ 61.35(a)(1), 61.103(d), and 61.105 ",
  "A.33":
    "Flight proficiency/practical test: §§ 61.103(f), 61.107(b), and 61.109 ",
  "A.34": "Aeronautical knowledge test: §§ 61.35(a)(1), 61.123(c), and 61.125 ",
  "A.35":
    "Flight proficiency/practical test: §§ 61.123(e), 61.127, and 61.129 ",
  "A.36":
    "Restricted privileges ATP Certificate, Airplane Multiengine Land (AMEL) rating: § 61.160",
  "A.37": "ATP Certification Training Program (CTP): § 61.153(e) ",
  "A.38": "Aeronautical knowledge test: §§ 61.35(a)(1) and 61.65(a) and (b) ",
  "A.39": "Flight proficiency/practical test: § 61.65(a)(6) ",
  "A.40":
    "Prerequisites for instrument practical tests: § 61.39(a) Flight Instructor (Other Than Flight Instructors With a Sport Pilot Rating) Endorsements",
  "A.41": "Fundamentals of instructing knowledge test: § 61.183(d) ",
  "A.42": "Flight instructor aeronautical knowledge test: § 61.183(f) ",
  "A.43":
    "Flight instructor ground and flight proficiency/practical test: § 61.183(g)",
  "A.44":
    "Flight instructor certificate with instrument–(category/class) rating/practical test: §§ 61.183(g) and 61.187(a) and (b)(7",
  "A.45": "Spin training: § 61.183(i)(1) ",
  "A.46":
    "Helicopter Touchdown Autorotation: FAA-S-8081-7, Flight Instructor Practical",
  "A.47": "Fundamentals of instructing knowledge test: § 61.405(a)(1) ",
  "A.48":
    "Sport pilot flight instructor aeronautical knowledge test: §§ 61.35(a)(1) and 61.405(a) ",
  "A.49":
    "Flight instructor flight proficiency check to provide training if a different category or class of aircraft–(additional category/class): §§ 61.409 and 61.419 ",
  "A.50":
    "Passing the flight instructor flight proficiency check to provide training in a different category or class of aircraft–(additional category/class): §§ 61.409 and 61.419 ",
  "A.51": "Flight instructor practical test: §§ 61.409 and 61.411 ",
  "A.52": "Passing the flight instructor practical test: §§ 61.409 and 61.411 ",
  "A.53":
    "Sport pilot instructor to train sport pilots on flight by reference to instruments: § 61.412",
  "A.54": "Spin training: § 61.405(b)(1)(ii) ",
  "A.55":
    "Ground instructor who does not meet the recent experience requirements: § 61.217(d) ",
  "A.66":
    "Completion of any phase of an FAA-sponsored Pilot Proficiency Program (WINGS): § 61.56(e) ",
  "A.67": "Completion of an instrument proficiency check (IPC): § 61.57(d) ",
  "A.68": "To act as PIC in a complex airplane: § 61.31(e) ",
  "A.69": "To act as PIC in a high-performance airplane: § 61.31(f) ",
  "A.70":
    "To act as PIC in a pressurized aircraft capable of high-altitude operations: § 61.31(g) ",
  "A.71": "To act as PIC in a tailwheel airplane: § 61.31(i)",
  "A.72":
    "To act as PIC of an aircraft in solo operations when the pilot does not hold anappropriate category/class rating: § 61.31(d)(2) ",
  "A.73": "Retesting after failure of a knowledge or practical test: § 61.49 ",
  "A.74":
    "Additional aircraft category or class rating (other than ATP): § 61.63(b) or (c) ",
  "A.75":
    "Type rating only, already holds the appropriate category or class rating (other than ATP): § 61.63(d)(2) ",
  "A.76":
    "Type rating concurrently with an additional category or class rating (other than ATP): § 61.63(d)(2) ",
  "A.77":
    "Type rating only, already holds the appropriate category or class rating (at the ATP level): § 61.157(b)(2) ",
  "A.78":
    "Type rating concurrently with an additional category or class rating (at the ATP level): § 61.157(b)(2) ",
  "A.79": "Launch procedures for operating a glider: § 61.31(j) ",
  "A.80":
    "Glider and unpowered ultralight vehicle towing experience: § 61.69(a)(5)",
  "A.81":
    "Glider and unpowered ultralight vehicle towing ground and flight: § 61.69(a)(3) ",
  "A.82": "Review of a home-study curriculum: § 61.35(a)(1)",
  "A.83":
    "Experimental aircraft only—additional aircraft category or class rating (other than ATP): § 61.63(h) ",
  "A.84":
    "Experimental aircraft only—additional aircraft category or class rating ATP: § 61.65(g) ",
  "A.85":
    "Aeronautical experience credit—ultralight vehicles: § 61.52 Night Vision Goggles Operations (NVGO)",
  "A.86":
    "Endorsement required for ground training to act as PIC of an aircraft using night vision goggles (NVG): § 61.31(k)(1) ",
  "A.87":
    "Endorsement required for flight training and statement of proficiency to act as PIC of an aircraft using NVG: § 61.31(k)(2) ",
  "A.88":
    "Endorsement required to provide training for NVGOs: § 61.195(k)(7) Enhanced Flight Vision System (EFVS)",
  "A.89": "Endorsement for EFVS ground training: § 61.66(a)",
  "A.90": "Endorsement for EFVS flight training: § 61.66(b) ",
  "A.91":
    "Endorsement for EFVS ground and flight training: § 61.66(a) and (b) ",
  "A.92": "Endorsement for EFVS supplementary training: § 61.66(c)",
};

export const endorsementFor = (
  acNumber: string,
  notes: string = ""
): Endorsement | undefined => {
  const endorsement = endorsements[acNumber];

  return {
    name: endorsement,
    acNumber,
    notes,
  };
};
