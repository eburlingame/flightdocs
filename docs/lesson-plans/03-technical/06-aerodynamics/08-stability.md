# Stability and Controllability

## Objective

To understand the effects of design choices on the stability of an aircraft along its three axes.

## Motivation

Helps a student develop an intuitive understanding of stability and controllability that they can use to make sense of the control inputs as they fly in different conditions.

## Timing

45 minutes

## Format

- [Whiteboard](/slides/stability.pdf)
- [Blank whiteboard slides](/slides/stability-template.pdf)


## Elements

### Stability

- Airplane axes:
  - Longitudinal
  - Lateral
  - Vertical
- Airplane always rotates around its CG
- Static stability (positive, negative, neutral)
  - Will the system course-correct back to a neutral position when disturbed
  - Example: [Ball in a halfpipe, flat surface, on a hill]
- Dynamic stability (positive, negative, neutral)
  - After the system course-corrects, does it overshoot and continue to oscillate
  - Or, do the osculations dampen naturally
- **Vertical, yaw stability**:
  - Wind striking fuselage aft of CG
  - Rudder has it's own angle of attack
- **Longitudinal, pitch stability**:
  - CG, CL, Tail
  - [Elevator downforce in slow, level, and high speeds]
  - Positive stability: Wing is providing downforce onto tail
    - If aircraft is pitched up, it slows, meaning less downwash on the tail
      - Less down wash mean less down force, and nose pitches back down
    - If the aircraft is pitched down, it speeds up, meaning more downwash on the tail
      - More down wash means more down force, and the nose pitches up
  - Dynamic stability: the affect of the downforce dampens over time
  - Decrease in thrust has similar effect: less force over tail, nose wants to drop and pickup airspeed
  - Thrust line vs CG: Above CG, below CG, at CG
- **Lateral, roll stability**
  - What is roll stability? Negative, neutral, positive
    - Aerobatic planes: neutrally stable
  - If a wind gust lowers a wing, the lift vector tilts
    - This isn't a nice coordinated turn, no rudder input
    - A sideslip occurs
  - Dihedral wing
    - Slightly larger AoA on down wing: Raises the lowered wing
  - Deeper explanation [Commercial]
    - Dihedral effect: [2D drawing from front of plane, wind coming up from lowered wing]
      - Wing bends around the fuselage
      - Lower wing has lower angle of attack
      - High wing has higher angle of attack
    - Dihedral angle
      - [2D low-wing with dihedral]
      - Gust of wind raises a wing, airplane sideslips slightly into the wind
      - Because of the dihedral, low wing makes large AoA than up wing
      - Larger AoA means more lift = raise the lowered wing
    - High wing airplanes and dihedral
      - [2D high-wing without dihedral]
      - Wind has to "bend" over the top of the fuselage
    - What if we have too much roll stability?
      - Anhedral
    - Wing sweep
      - Airplane yaws into the wind
      - Lowered wing make`s more perpendicular angle with the wind = more lift
- **Lateral stability vs vertical stability** [Commercial]
  - Strong directional (yaw) stability and weak lateral (roll) stability
    - Wing drops due to wing and a yaw is introduced
    - The airplane weathervanes into the wind, making the outboard wing fly faster
    - This is all before the lateral stability (dihedral effect) can raise the wing
    - This exhibits the over-banking tendency, causing the airplane to roll further into the turn
    - This gradually becomes a steep _spiral dive_
    - We call this _spiral instability_
  - Strong lateral (roll) stability and weak directional stability
    - Gust of air lowers a wing, sideslip into the wind
    - Dihedral effect raises the wing, but due to weak directional stability yaws too far in the other direction
    - This can cause an bank/yaw oscillation which is uncomfortable and dangerous if undamped
    - We call this **Dutch roll**
  - Generally, spiral instability is preferred over Dutch roll, since spiral tendencies are easier for a pilot to fix with control inputs

### Maneuverability

- Controllability is dependent Cp vs Cg
  - CG close to CL: Elevator needs to produce very small forces, sensitive
  - CG far from CL: Elevator need to produce larger forces
- Maneuverability: How fast an aircraft can change its direction of flight or attitude
  - Maneuverability vs stability

## References

- [Pilot's Handbook of Aeronautical Knowledge pg. 5-1](/_references/PHAK/5-1)
- https://www.aircraftflightmechanics.com/AircraftPerformance/Manoeuvre.html
