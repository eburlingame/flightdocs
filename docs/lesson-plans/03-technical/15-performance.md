# Performance Planning

## Objective

Gain an intuitive understanding of how atmospheric conditions affect aircraft performance, and how to use our airplane's performance charts to compute specific performance numbers.

## Motivation

Altitude, temperature, and pressure affect all aspects of our airplane's performance. All pilots need to understand how these factors affect the capabilities of the airplane and how that affects the safety of flight.

## Timings

45 minutes

## Format

- [Slides](/slides/performance.pdf)

## Elements

### Performance Planning Concepts

- Air and density
  - Air has mass
  - As our airplane swims through the air, air molecules bounce off the airplane
  - As these air molecules are deflected downward, our airplane is forced upward
  - Same with our propeller, our propeller pushes air backwards which pushes us forwards
  - Our engine sucks in air from the outside and burns the oxygen with fuel in its cylinders to create power
- High and low air density
  - All of this depends on how close the air molecules are together
  - Tightly space = more mass of air to grab on to
    - Wings can produce more lift
    - Propeller can produce more thrust
    - Engines have more oxygen molecules to burn, just like a campfire
  - Sparely spaced = less mass of air to grab on to
    - Wings produce less lift
    - Propellers can't produce as much thrust
    - Engines have less oxygen molecules to turn
- Things that affect density: #1 Altitude
  - Density decreases as we get farther from the Earth's surface due to gravity
  - The rate at which this occurs is called the pressure _lapse rate_
  - The average lapse rate is 1" Hg per 1000 ft.
- Thing that affect density: #2 Ambient pressure
  - The pressure outside varies from day to day
  - High pressure days have more air density
  - Low pressure days have less air density
- Things that affect density: #3 Temperature
  - When air molecules heat up they bounce off each other more energetically
  - This causes the molecules to spread out and become less dense
  - Likewise, cold temperatures the air molecules are less excited and get closer together
- Performance altitudes
  - That's a lot of variables to consider
  - What if there was a magic number which could combine all that information and tell us how spread out the air molecules are?
  - Hint: there is, but a couple more things first
- International standard atmosphere
  - A fantasy-land atmosphere with ideal conditions
  - Never exists in reality
  - Pressure lapses at a constant 1" Hg per 1000'
  - Our "magic number" is a height in this fake atmosphere where we would find the actual conditions
  - The higher the altitude, the lower our airplane's performance
- How do we compute this magic number?
  - First we start with the altitude that our altimeter gives us: **Indicated altitude**
- Next we're going to adjust for any changes in the ambient pressure on the given day:
  - We get this from the current altimeter setting
  - $(29.92 - \text{Current altimeter setting}) = \text{Pressure difference}$
  - Since we know the standard atmosphere lapses at 1" per 1000':
  - Multiple this by 1000 to get the change in feet: $\text{Pressure difference} * 1000 = \text{altitude different}$
  - Add this change to our initial altitude
  - This gives us the altitude in the standard atmosphere where the current _pressure_ is found
  - This is called **pressure altitude**
- Pressure altitude another way: Have the altimeter do the map
  - As you rotate the Kollsman window the altimeter moves up and down at that same rate 1" per 1000'
  - If we set our altimeter to 29.92" (the pressure of S.L. in the standard atmosphere), it will give us pressure altitude
- Next, we're going to adjust for temperature
  - Just like pressure, the temperature in the standard atmosphere decreases
- Atmosphere
  - Density decreases as we ascend (18,000', 1/2 as dense as S.L.)
  - The standard atmosphere: ~2&deg; per 1000'
  - The standard day: 15&deg; C and 29.92" Hg
  - Normally aspirated airplanes lose power as they climb
- Aerodynamic changes with different air density
  - Production of lift is reduced with higher temperatures and lower pressures
  - Air density is low, a higher speed is needed to create the same lift
  - Turbocharging increases engine power, but not propeller efficiency
  - Indicated airspeed does not change
- Pilot technique
  - Correct leaning procedures and mixture setting
  - Correct short-field takeoff technique
- Aircraft performance charts
  - Used to predict aircraft performance for flight planning
  - Based on a new airplane, engine, propeller
  - May use pressure altitude and temperature, or density altitude
- Types of Altitudes
  - Barometric pressure: Set the Kollsman window on the altimeter
  - Temperature: Ambient temperature as observed
  - Pressure altitude: Height in the ISA where current pressure is found
  - Density altitude: Height in the ISA where the current pressure is found, plus any correction for temperature
- Types of Airspeeds
  - Indicated airspeed (IAS): Read from altimeter
  - Calibrated airspeed (CAS): Calibrated for position/instrument errors
    - At slow airspeeds this may be several knots off
  - True airspeed (TAS): CAS corrected for altitude and nonstandard temperature
  - Ground speed (GS): Actual speed over the ground
    - TAS adjusted for wind

### Performance Charts and Calculations

- Computing pressure altitude
  - $\text{Indicated altitude} + (29.92 - \text{Current altimeter setting}) * 1000$
  - Example:
    - Field elevation is 720' MSL
    - Current altimeter setting is 29.82" Hg
    - Answer: $720 + (29.92 - 29.82) * 1000 = 820$
- Airspeed Calibration Chart (T182 POH pg. 77)
- Alternate Static Source (T182 POH pg. 78)
- Stall speed (T182 POH pg. 80)
- Wind Component Graph (T182 POH pg. 81)
- Takeoff Distance (T182 POH pg. 82)
  - Sample scenario:
- Time, Fuel, Distance to Climb - Max Rate (T182 POH pg. 85)
  - Sample scenario: Climb from airport @ 2000' to 8000', temperature aloft 8&deg;C
    - Base values:
      - $9 - 2 = 7 \text{ minutes}$
      - $3.6 - 0.9 = 2.7 \text{ gallons}$
    - Temperature is $8 - -1 = 9\degree \text{C}$: 9% increase in time/fuel
      - $2.7 * 1.09 = 2.9 \text{ gallons}$, plus two gallons for taxi+takeoff **4.9 gallons**
      - $7 * 1.09 = 7.6 \text{ minutes}$
- Cruise Performance - 8000 (T182 POH pg. 90)
  - Sample scenario: Cruising at 2200 @ 23", 8000', temperature 8&deg;C
    - Airspeed:
      - 134 vs 133, conservatively take 133
    - GPH:
      - Base values 12.6 @ -1&deg;, 12.0 gph @ 19&deg;
      - Linearly interpolate:
        - $(8 - -1) / (19 - -1) = 9 / 20 = 0.45$
        - $12.6 + (12 - 12.6) * 0.45 = 12.33 \text{ GPH}$

## References

- [Pilot's Handbook of Aeronautical Knowledge pg. 4-3](/_references/PHAK/4-3)
