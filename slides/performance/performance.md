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

# Performance and Limitations

---

## Objective

Gain an intuitive understanding of how atmospheric conditions affect aircraft performance, and how to use our airplane's performance charts to compute specific performance numbers.

## Motivation

Altitude, temperature, and pressure affect all aspects of our airplane's performance. All pilots need to understand how these factors affect the capabilities of the airplane and how that affects the safety of flight.

---

## Overview

- Air and density
- International Standard Atmosphere
- Types of Altitude
- Types of Airspeed

---

## Air and Density

- Air has mass
- As our airplane swims through the air, air molecules bounce off the airplane
- As these air molecules are deflected downward, our airplane is forced upward
- Same with our propeller, our propeller pushes air backwards which pushes us forwards
- Our engine pulls in air from the outside, then combines the oxygen in the air with fuel to produce power

---

## High and Low Air Density

- All of this depends on how close the air molecules are together
- Tightly space = more mass of air to grab on to
  - Wings can produce more lift
  - Propeller can produce more thrust
  - Engines have more oxygen molecules to burn, just like a campfire
- Sparely spaced = less mass of air to grab on to
  - Wings produce less lift
  - Propellers can't produce as much thrust
  - Engines have less oxygen molecules to turn

---

## Things That Affect Density: Altitude (Variable #1)

- Density decreases as we get farther from the Earth's surface due to gravity
- The rate at which this occurs is called the pressure _lapse rate_
- The average lapse rate is 1" Hg per 1000 ft.

---

## Thing That Affect Density: Ambient Pressure (Variable #2)

- The pressure outside varies from day to day
- High pressure days have more air density
- Low pressure days have less air density

---

## Things That Affect Density: Temperature (Variable #3)

- When air molecules heat up they bounce off each other more energetically
- This causes the molecules to spread out and become less dense
- Likewise, cold temperatures the air molecules are less excited and get closer together

---

## Performance Altitudes

- That's a lot of variables to consider
- What if there was a magic "density" number which could combine all that information and tell us how spread out the air molecules are?

---

## International Standard Atmosphere (ISA)

- We want a density number that makes some intuitive sense
  - A fantasy-land atmosphere with ideal conditions
  - Never exists in reality
- Definitions
  - At sea level, the pressure is 29.92" Hg (1013.2 millibars)
  - Pressure lapses (reduces) at 1" Hg per 1000'
- Our "magic" density number is a height in this atmosphere where we would find density equivalent to the real conditions
  - The higher the altitude, the lower our airplane's performance

---

## How do we compute this magic density number?

First, gather your information:

<div class="h-stack">

![w:700](images/image-1.png)

- Field elevation **4170 ft.**
- Temperature **84&deg; F, 29&deg; C**
- Pressure **29.88" Hg**

</div>

---

## Start with variable #1: Altitude

- Start with the field elevation
- If we were in the airplane we'd read this directly off the altimeter, what we call _indicated altitude_

---

## Correct for Variable #2: Ambient Pressure

1. We get this from the current altimeter setting
   - Subtract the S.L. pressure of 29.92" Hg
   - $(29.92 - 29.88) = 0.04\text{" Hg}$
2. Since we know the standard atmosphere lapses at 1" per 1000':
   - Multiple this by 1000 to get the change in feet
   - $0.04 * 1000 = 40$
3. Add this difference to our field elevation:
   - $4170 + 40 = 4210$
   - The altitude in the standard atmosphere where the current _pressure_ is found
4. This is called **pressure altitude**

---

## Pressure altitude another way: Have the altimeter do the math

- As you rotate the Kollsman window the altimeter moves up and down at that same rate 1" per 1000'
- If we set our altimeter to 29.92" (the pressure of S.L. in the standard atmosphere), it will give us pressure altitude

---

## Correct for Variable #3: Temperature

- The temperature in the standard atmosphere decreases as we ascend:
  - Temperature is 15&deg;C at sea level
  - The temperature lapse rate is 2&deg; per 1000'
  - We care about the different between _actual_ temperature and _standard_ temperature
- At a field elevation of 4170'
  - $15\degree C - 2 * (4170 / 1000) = 6.66\degree C$
- If the pressure outside is 29&deg;C
  - $29 - 6.66 \approx 22\degree C \text{ above standard}$

---

## Correct for Variable #3: Temperature

- Now need factor this temperature difference into our magic altitude:
- Apply the formula:
  - $\text{Pressure altitude} + 120 * (\text{Temperature difference from standard})$
  - $4210\text{ ft} + 120 * 22 \degree C = 6850\text{ ft}$
- This is our magic number: **density altitude**
  - If our airplane were flying in the standard atmosphere, it would feel like it's flying at **6850** feet

---

## Review of Altitude Types

- Ambient pressure/Altimeter setting: Set in the Kollsman window
- Indicated altitude: Read directly off the altimeter
- Pressure altitude: Height in the ISA where current pressure is found
- Density altitude: Height in the ISA where the current pressure is found, plus any correction for temperature

---

## Pitot Tube As A Molecule Counter

- More forward movement: More molecules we hit
- More air density: Molecules tightly spaced so more to hit

---

## Imagine an Airplane Traveling 100 Feet

- Plane travels 100 feet at the same speed:
  - If the air density is high, it's going to hit 200 molecules - higher airspeed shown
  - If the air density is low, it's going to hit 100 molecules - lower airspeed shown
- Which is going to produce more lift force?

---

## Types of Airspeed: Indicated Airspeed

- How many molecules are hitting the pitot tube
- Really a measure of pressure:
  - $\text{Airspeed} = \text{RAM air pressure} - \text{Static air pressure}$

---

## Types of Airspeed: Calibrated Airspeed

<div class="h-stack">

![alt text](images/image-2.png)

- The pitot tube is attached at a certain angle
- This might not be directly into the relative wind
- With a high angle of attack, the relative wind will be at a steeper angle
- To account for this, we compute **calibrated airspeed**
  - This is usually given in a table in the POH

</div>

---

## Types of Airspeed: True Airspeed

- Similar to altitude, we can account for non-standard temperature and pressure in airspeed
- This adjusts the "molecule count" based on the air density
  - Uses the same 3 variables: Altitude, pressure, temperature
- True airspeed in the speed you're moving through the _air mass_

---

## Types of Airspeed: Ground Speed

<div class="h-stack">

![w:500](images/image-3.png)

- The air mass itself might be moving due to wind
- We add wind velocity to our true airspeed to get our speed over the ground
- With zero wind: Ground speed = true airspeed

</div>

---

## Types Of Airspeeds

- Indicated airspeed (IAS): Read from altimeter
- Calibrated airspeed (CAS): Calibrated for position/instrument errors
  - At slow airspeeds this may be several knots off
- True airspeed (TAS): CAS corrected for altitude and nonstandard temperature
- Ground speed (GS): Actual speed over the ground
  - TAS adjusted for wind

---

## Aircraft Performance Charts

- Used to predict aircraft performance for flight planning
- Based on a new airplane, engine, propeller
- May use pressure altitude and temperature, or density altitude

---

## Pilot Technique

- Correct leaning procedures and mixture setting
- Correct short-field takeoff technique

---

# Summary
