# Performance Planning

## Objectives

## Motivations

## Timings

45 minutes

## Format

- Whiteboard

## Elements

### Performance Planning Concepts

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
  - $\text{Current altitude} + (29.92 - \text{Current altimeter setting}) * 1000$
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
