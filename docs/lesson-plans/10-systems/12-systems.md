# Airplane Systems

## Objective

To understand the basics electrical, environmental, and deicing systems of a trainer aircraft.

## Motivation

It is important to have an intuitive understanding of how the electrical system of airplane works to troubleshoot issues, and to understand common failure modes of the flight instruments.

## Format

- [Slides](/slides/systems.pdf)

## Timing

45 minutes

## Elements

- Hydraulic systems
  - Brakes
  - Hydraulic lines connect brake pedals to brake calipers
- Landing gear
  - Tricycle landing gear common on trainers
  - Nosewheels can be steerable or free-catering
  - Retractable landing gear
    - Electronic or hydraulically actuated
- Electrical system
  - Basic circuit: Electrical potential (pressure), current (volume)
  - Series vs parallel circuits
  - Cessna usually have 28V electrical systems
  - Batteries: Capacity measured in amp-hours (17 amp-hours means 17 amps for 1 hour, or visa-versa)
  - 2 12V batteries to make a 24V system
  - Alternator
    - A generator that produces AC, a conversion is then done to DC using a rectifier
    - Has more consistent current output at low RPMs
    - Voltage must be higher than the battery to charge it
  - Contactors/Relays/Solenoids
    - Operate in different way, but are essentially a "remote switch"
    - We don't want all of the current to have to pass through the physical switch
    - Examples: Battery contactor, starter contactor
  - Master switch
    - Left half for battery master
    - Right half for alternator master
  - Bus bars: efficient way of connecting may components to power
  - Fuses and circuit breakers: Over current protection
    - Fuses are consumable
    - Circuit breakers can be popped back in
  - Electrical instrumentation
    - Ammeter: Shows whether the alternator is producing sufficient power for the given load
      - A discharge on the ammeter indicates a draw from the battery
    - Low voltage warning light
    - Load meter
      - Shows a percentage of the load placed on the alternator/generator
- Environmental system
  - Fresh air vents
  - Heater, potential source of CO
- Deice and anti-ice system
  - Airplane is prohibited from flight into known icing (FIKI)
  - Pitot heat
  - Windscreen defrost can also be used
  - Some airplanes have pneumatic boots used to break off ice
  - Cirrus aircraft use a "weeping wing"
    - Forces TKS fluid (a ethylene glycol based liquid) out of a porous membrane on the leading edge

## References

- [Pilot's Handbook of Aeronautical Knowledge pg. 7-1](/_references/PHAK/7-1)
- [Pilot's Handbook of Aeronautical Knowledge pg. 5-1](/_references/PHAK/5-1)
