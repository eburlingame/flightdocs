# Flight Planning

## Objectives

To understand the concepts behind pilotage, dead reckoning, radio, and GPS navigation, and effectively apply that knowledge on a cross-county flight.

## Motivations

## Timings

- 2 hours

## Format

## Elements

- How do we navigate?
  - Pilotage: Looking out the window
  - Dead reckoning: Speed \* time = distance
  - Navigation systems: VOR and GPS
  - ATC radar: Radar contact, ATC knows where we are
- What do we need to know prior to a flight? ([91.103](/_references/14-CFR/91.103))
  - Flight not in the vicinity of an airport
    - Weather reports and forecasts
    - Fuel requirements
    - Alternatives available if the planned flight cannot be completed
    - Any known traffic delays
  - For every flight:
    - Runway lengths at airports of intended use
    - Aircraft performance runway slope, aircraft gross weight, and wind and temperature
- How do we obtain a weather briefing?
  - ForeFlight
  - [1800wxbrief.com](https://www.1800wxbrief.com/Website/#!/)
- Winds aloft chart: How do we read a winds aloft chart?
  - Issued 4 times daily, based on Wx balloon data
  - `2028+12`: 200 &deg;True @ 28 knots, temperature 12&deg;C.
  - `9900` means "light and variable"
  - For winds greater than 100 knots, 50 is added to wind direction:
    - `731960`: 73 - 50: 23, 230&deg; T, 100 + 19 = 119 knots, -60 &deg;C.
- Plotting a course of a sectional chart
  - Identifying landmarks: Good pilotage waypoints are good
  - Choosing a route considering terrain, weather, safety, airspace, glide distance
    - If we were to lose our engine, where would we go?
  - Magnetic vs true north
- How do we select a cruise altitude?
  - VFR cruising altitude rules ([91.159](/_references/14-CFR/91.159))
    - East (180 through 359&deg; M): Odd 1000's + 500'
    - West (0 through 179&deg; M): Even 1000's + 500'
- Computing top-of-climb: Time, Fuel, Distance to Climb chart
- Top of descent
  - Descent chart, if provided
  - Compute decent rate in FPM, use ground speed to determine TOD position
  - Example:
    - Descend 500fpm @ 120 knots GS from 8500 to 1500
    - 7000' to lose @ 500fpm = 14 minutes
    - 120 knots is 2 nm / minute
    - 14 minutes \* 2 = **28nm**
  - Other speeds:
    - 60 knots GS = 1nm per minute
    - 90 knots GS = 1.5nm per minute
    - 120 knots GS = 2nm per minute
    - 150 knots = 2.5nm per minute
- Basic nav log fields
  - Waypoints/fixes
  - Wind direction + velocity: Winds aloft
  - True course (TC): Plotted from sectional
  - True heading (TH): TC plus wind correction angle (WCA)
  - Magnetic heading (MH): TH plus magnetic variation (-east, +west)
  - Compass heading (CH): MH plus magnetic deviation
  - Leg distance: Distance between waypoints
  - Remaining distance: Total distance remaining
  - Estimated ground speed: TAS corrected for wind, from flight computer
  - ETE: Estimated time enroute
  - ETA: Estimated time of arrival at waypoint
  - Fuel used: Fuel burn \* ETE
  - Fuel remaining: Total fuel remaining
- See [Sample Flight Plan KSBP-KWVI](/docs/lesson-plans/problems/flight-plan-ksbp-kwvi)
- Estimated vs actual values, why would they be different?
  - Forecast vs actual conditions
  - POH numbers are idealized
  - Pilot error or extra delays
- UTC time conversion
- VOR Operation
  - Radials are aligned to magnetic north
  - Morse code identifier
  - Limited by line-of-sight, works better the higher you go
  - Three classes of VOR stations:
    - Terminal: 25nm (1000-12000')
    - Low: 40nm (1000-FL180)
    - High: 40nm (1000-14,5000'); 100nm (14,500'-FL180), 130nm (FL180-FL450)
  - Flying to a VOR:
    1. Tune the station
    2. Identify the station
    3. Center the CDI with a TO indication
    4. Turn to the course shown, bracketing for wind
- GPS Use
  - Flight Plan (intercept a course) vs Direct-To (current position to waypoint)
  - TRK: Actual track over the ground
  - DTK: Desired track over the ground
- Diversion to an alternate
- Lost procedures: Four C's
  - Climb
  - Communicate
  - Confess
  - Comply
- Why wouldn't we do this in ForeFlight?
  - Setting up an airplane profile
- How to file and open a VFR flight plan
  - FSS frequency
- Flight plan form field
- Diversion
  - Heuristics for time, distance, fuel burn

## References
