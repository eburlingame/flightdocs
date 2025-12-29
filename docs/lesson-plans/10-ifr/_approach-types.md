# Approach Procedure Basics

## Format

- [Slides](/slides/approaches-2.pdf)

## Objective

To demonstrate the kinds of approaches, approach limitations, and regulations that govern how we fly approach procedures.

Assumes familiarity with instrument approach plates and the components of an approach.

## Timing

60 minutes

## Outline

- Getting established on an approach
- Types of approaches
  - Precision
  - Non-precision
  - GPS approaches
- When can we land?
- Circle to land, sidesteps
- Other Approach Types
  - LDA Approaches
  - Backcourse Approaches
  - Visual and Contact Approaches
- Inoperative Equipment
- Cold Weather Operations

## Content

### Getting Established

How do we get from the enroute phase to the final approach phase?

- Direct to an Initial approach fix (IAF)
- Published transition routes (ex. KSPB 15 COUGA)
- Vectors to final
  - ATC gives altitudes and headings to establish you on an intercept to the final approach course (usually a few miles behind the FAF)
- Procedure Turns and Hold-in-Lieu of Procedure Turn (other lesson just on procedure turns)
  - Procedure turn: Published turn area which
    - Usually says "Remain within 10NM" on profile view
    - Types of turns: 45/180, 80/260, teardrop, racetrack
  - Hold-in-Lieu of Procedure Turn is a published hold used for course correcting
    - Fly standard hold entry and begin the approach
  - When should you _not_ fly a PT/HILPT? - SNoRT
    - S:"Straight-in approach" from ATC
    - No: NoPT on approach chart
    - R: Radar vectored
    - T: Timed approach from a fix

### Precision Approaches

Precision approaches are characterized by vertical and horizontal guidance that positions the aircraft close to the runway.

- PAR - Precision approach radar
- GLS - GBAS landing system
- ILS - Instrument landing system
  - Localizer:
    - Positioned at the end of the runway, such that the signal is 700' wide at the threshold
    - Gives precise angular guidance aligned with the runway
    - Note that the exact sensitivity is dependent on the length of the runway
  - Glideslope:
    - Positioned to the side of the runway
    - Gives angular guidance, usually for a 3° glideslope
    - Beware of false glideslopes
  - ILS used to have marker beacons
    - Outer marker: FAF
    - Middle marker: Minimum
    - Inner marker: Lower minimums (CAT II or III)
    - These are increasingly rare, approaches use DME or secondary VOR to identify fixes
  - ILS typically have minimums of 200 feet above TDZE
  - Capturing an ILS course: Most autopilot will only capture from below

### Non-Precision Approaches

Non-precision approaches are characterized by step-down fixes and a minimum descent altitude.

- VOR - VOR approach
- TACAN - TACAN approach
- LOC - Localizer approach
- LDA - Localizer directional aid
- LOC BC - Localizer back course approach
- ASR - Approach surveillance radar

- Flying a VOR approach with an RNAV system
  - AIM 1-2-3: "Use of a suitable RNAV system as a means to navigate on the final approach segment of an instrument approach procedure based on VOR, TACAN or NDB signal is allowable. The underlying NAVAID must be operational and the NAVAID monitored for the final approach course alignment."
  - This means secondary CDI or bearing pointer should monitor the underlying NAVAID, but guidance can be used from the GPS

## GPS Approaches

RNAV = Random Area Navigation

- RNAV Approaches with Vertical Guidance
  - LPV - Localizer Performance with Vertical guidance
    - ILS-like minimums (200' minima) and is flown similar to an ILS
    - Gives L/R angular guidance, similar to an ILS
    - Not technically a "precision approach" (for the purposes of alternate planning)
  - LNAV/VNAV - Lateral/vertical navigation (Garmin L/VNAV)
    - Final approach has fixed 0.3NM sensitivity (not angular like an ILS or LPV)
    - Doesn't require a WAAS-based navigator
    - These were initially design for baro-aided FMS systems
- RNAV Non-precision approaches
  - LP - Akin to a LOC approach
  - LNAV - Lateral guidance
  - GPS overlay approaches
- GPS Sensitivity
  - ENR, TERM, LNAV, LP
- Advisory Vertical Guidance (LP +V, LNAV+V)
  - GPS units can provide advisory vertical guidance which meets the steps downs
  - This approach still has an MDA however

### When can we land? 91.175

Instrument approaches limitations 91.175:

- An aircraft may not descend from the DA/MDA unless:
  - Aircraft is continuously in a position from which a descent to a landing can be made on the intended runway
  - The descent can be made at a normal rate of descent using normal maneuvers
  - For 121/135 ops: A descent that allows for touchdown in the touchdown zone
  - The _flight_ visibility must be greater than prescribed on the chart
  - At least one of the following visual references for the intended runway is visible:
    - Approach lighting system: The red terminating bars of the ALS allow you to descend to 100' above TDZ, regardless of the approach you're flying
    - Threshold, threshold markings, threshold lights
    - Runway end identifier lights (REILs)
    - Visual glideslope indicator (PAPI/VASI)
    - Touchdown zone, markings, or lights
    - Runway or runway markings
    - Runway lights

Note: only the pilot can determine if the flight visibility meets the landing requirements.

- To summarize:
  - Normal descent + landing can be made
  - Visibility sufficient
  - Runway environment in sight

### Circle-to-land and Sidestep maneuver

- [Circling Approaches](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html#$paragraph5-4-20)
  - Allow you to fly an approach to one runway, but "circle" to land on a different runway (or the same runway in a different direction)
  - This requires higher minimums to ensure obstacle clearance
  - See AIM 5-4-20 for radius
  - Should maneuver to the "shortest path to the base or downwind leg"
  - Missed approach procedure: Climbing turn towards the runway
  - Expanded circling protections: Introduced in 2012, indicated by negative C on minima line
- [Sidestep Maneuver](https://www.faa.gov/air_traffic/publications/atpubs/aim_html/chap5_section_4.html#$paragraph5-4-19)
  - Parallel runways less than < 1200 ft. apart, ATC can say "cleared ILS runway 7 left approach, side-step to runway 7 right."
  - Commence the side-step maneuver as soon as possible after the runway or runway environment is in sight

### LDAs - Localizer Directional Aid Approaches

- Localizer (and sometimes glideslope) which provide approach guidance not aligned with a runway
- Example KDLS LDA/DME RWY 25
- Think of them as non-precision approaches (even if they had a glideslope)
- S-LDA minimums are treated as an MDA

### Backcourse Approaches

- The signal from a localizer also extends beyond
- Disregard any glideslope indication
- You'll have to read a CDI backwards
  - Note when flying with an HSI, set the _inbound/front course_ into your OBS
  - Then the green needles will read correctly (since the needles are flipped upside down)

### Visual and Contact Approaches

- Visual approaches
  - If the airports has VFR weather, controllers can assign a visual approach
  - We're still IFR, so VFR cloud clearance (91.255) don't apply
  - We need visual separation from other aircraft
- Charted visual procedures (ex. KPIE North Bay Visual)
  - Often used for noise-abatement
- Contact approaches
  - Gives us permission to descend to and land
  - Need ground-visibility >1 s.m.
  - Pilot needs to ask for a contact approach

### Inoperative Equipment

- Failure of navigation component
  - Primary navaid failure (VOR, LOC): Execute missed approach procedure
  - Glideslope failure:
    - Outside the FAF: Inform ATC, ask for the localizer approach
    - Inside the FAF: "Fail-down" to the LOC approach, follow LOC guidance and climb/descend to the MDA per the LOC minimums, inform ATC
- Approach lighting system inoperative
  - Published minimums are based on full operation of all associated components and visual aids
  - Higher minimums are required with inoperative equipment
    - If more than one component is inoperative, each minimum is raised to the highest minimum required by any single inoperative component
  - See Inoperative Components or Visual Aids Table

### Cold Weather Operations

See Backseat Pilot Lesson Plans pg. 279

## References

- https://planeandpilotmag.com/looking-for-the-lights/
- https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-B/subject-group-ECFRef6e8c57f580cfd/section-91.175
- [Sporty's RNAV/GPS Approach Video](https://courses.sportys.com/training/portal/course/INSTRUMENT/volumes/VIDEO_TRAINING/1aa2e10e-8d56-4525-b222-49e9113499bc/e9499203-6826-484a-9eeb-6be7bb808daa)
