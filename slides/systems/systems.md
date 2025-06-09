---
theme: default
---

<style>
.h-stack {
  display: flex;
  column-gap: 1em;
  justify-content: center;
}

</style>

# Aircraft Systems

---

## Objective

To understand the basics electrical, environmental, and deicing systems of a trainer aircraft.

## Motivation

It is important to have an intuitive understanding of how the electrical system of airplane works to troubleshoot issues, and to understand common failure modes of the flight instruments.

---

## Overview

- Hydraulic brakes
- Brake system
- Landing gear
- Electrical system
- Circuit vs Water
- Light Aircraft Electrical Systems
- Alternators
- Environmental Systems
- Deice and Anti-ice system
- Deicing Systems

---

## Hydraulic systems

![bg left:50% contain](images/image-57.png)

- Incompressible fluid is forced through a hydraulic line to a piston
- Piston moves whatever needs to be moved

---

## Hydraulic Brakes

![bg left:40% contain](images/image-56.png)

- Hydraulic lines connect brake pedals to brake calipers
- Toe pedals applies pressure to the fluid, which in turn closes the brake caliper

---

## Landing Gear

![bg left:50% fit](images/image-55.png)

- Tricycle landing gear common on trainers
- Nosewheels can be steerable or free-castering
- Retractable landing gear
  - Electronic or hydraulically actuated

---

## Tricycle Landing Gear

<div class="h-stack">

![alt text](images/image-121.png)

- Supports stability on landing since CG is forward of main landing gear
- Less susceptible to ground-looping
- Good visibility on the ground

</div>

---

## Taildragger or Conventional Landing Gear

<div class="h-stack">

![alt text](images/image-122.png)

- More propeller clearance
- Less visibility when taxiing
- Since C.G. is behind the main gear it they are susceptible to ground-looping
  - If airplane were to swerve, pilot may not have enough rudder authority to prevent tail from swinging around

</div>

---

# Electrical System

---

## Electrical system

- Basic circuit:
  - Voltage (pressure)
  - Current (volume)
  - Resistance/load (anything impeding the flow of water)

![bg left:40% contain](images/image-58.png)

---

## Circuit vs Water

![h:600](images/image-59.png)

---

![bg 75% contain](images/image-60.png)

![bg 75% contain](images/image-61.png)

---

## Light Aircraft Electrical Systems

![bg left:50% contain](images/image-62.png)

- Direct current systems are common in most training airplanes
- Cessna usually have 28V electrical systems
- Batteries: Capacity measured in amp-hours (17 amp-hours means 17 amps for 1 hour, or visa-versa)

---

### Generating Electricity: Generators

![bg left:60% contain](images/image-63.png)

- DC current is induced by the spinning magnet
- Current is proportional to the speed of the spin

---

## Generating Electricity: Alternators

![bg left:32% contain](images/image-64.png)

- Instead of spinning a magnet, we spin an electromagnet
- This produces AC current, which we convert to DC using a rectifier
- Gives more consistent current output at low RPMs than a generator
- Voltage must be higher than the battery to charge it
  - At 24V battery with a 28V alternator is common

---

### Electrical Components

![bg left:45% contain](images/image-66.png)

- Contactors/Relays/Solenoid
  - Essentially a "remote switch"
  - Avoids all the current to have to pass through the physical switch
- Master switch
  - Left half for alternator master
  - Right half for battery master

---

### Electrical Components: Circuit Breakers

![bg left:45% contain](images/image-66.png)

- Bus bars: efficient way of connecting may components to power
- Overcurrent protection for individual circuits
  - Circuit breakers: Push/pull devices which can be reset
  - Fuses: Need to be replaces
- If a circuit breaker pops, it could be a sign of a short circuit or overcurrent
  - Try resetting it once
  - If it pops again, leave it popped

---

### Electrical Instrumentation

![h:300](images/image-65.png)

- Ammeter: Is the alternator is producing sufficient power for the current load?
  - A discharge on the ammeter indicates a draw from the battery
- Load meter: Shows a percentage of the load placed on the alternator/generator
- Low voltage warning light

---

### Electrical Problems

- Alternator failure
  - Discharge on the ammeter, meaning we're drawing from the battery
  - Eventually a LOW VOLTS illumination
- Stuck starter
  - Starter solenoid remains engaged after engine start
  - Draws enormous load from the battery, alternator begins charging at a fast rate
  - Ammeter will show high positive charge
- "Load shedding" - Turning off unnecessary equipment to conserve battery

---

## Environmental Systems

![bg left:40% contain](images/image-67.png)

- Fresh air vents
- Heated air vents
  - Usually ducted over the hot exhaust manifold to heat the air
  - If the manifold has any leaks, this pumps exhaust directly into the cockpits
  - Potential source of CO in the cockpit

---

## Deice and Anti-ice system

![bg left:30% contain](images/image-68.png)

- Airplanes can be certified for flight into known icing (FIKI)
  - See 91.527
  - Most training aircraft are not FIKI certified
- Pitot heat (deice and anti-ice)
- Windscreen defrost can also be used

---

## Deicing Systems: Wet Wings

![bg right:50% fit](images/image-69.png)

- Some aircraft use a "weeping wing"
  - TKS fluid (a ethylene-glycol liquid) is force out of a porous membrane on the leading edge
  - Cirrus aircraft use this

---

## Deicing Systems: Pneumatic Boots

<div class="h-stack">

![alt text](images/image-123.png)

- Boots are inflated with air break off accumulated ice
- Can only be used once some ice has formed on the wing
- Can be cycled as many times as needed
  - Unlike a wet wing system, which has a certain capacity

</div>

---

## Summary

- Hydraulic brakes
- Brake system
- Landing gear
- Electrical system
- Circuit vs Water
- Light Aircraft Electrical Systems
- Alternators
- Environmental Systems
- Deice and Anti-ice system
- Deicing Systems

---

## Knowledge Check

As you're flying you notice that the volt meter on your engine monitor is reading 25 volts, and the ammeter is showing a discharge.

What could this mean? What would you do?

---

## Knowledge Check

True or false: All of the current for the primary and avionics bus are flowing through the master switch when you turn it on.

---

## Knowledge Check

Flying home from a business meeting on the coast the circuit breaker for your second COM radio pops.

What should you do?
