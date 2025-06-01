---
theme: default
class:
  - invert
---

<style>
.h-stack {
  display: flex;
  column-gap: 1em;
  justify-content: center;
}

.flex-1 {
    flex: 1;
}

</style>

# Flight Planning

---

## Objective

Safely plan a VFR cross-country flight, use various types of navigation to get there, and use a navigation log to compute expected distances, times, and fuel requirements. Also use ForeFlight to plan a flight and interpret its output.

## Motivation

Flying to another airport requires additional planning and multiple forms of navigation. A pilot needs to understand the information needed to accurately plan a flight and have the skills to execute that flight plan.

---

## Overview

<div class="h-stack">

<div>

- Picking Destinations
- Picking Waypoints
- VFR Cruising Altitudes (91.159)
- Cruising Altitudes
- Dead Reckoning
- Navigation Log
  - Steps to manually complete a navlog
- Flight Planning with ForeFlight

</div>

<div>

- Preflight Information Requirements (91.103)
- Weather Briefings
- Flight Plans
- UTC Time Conversion
- Flying our Flight Plan
- VOR and DME navigation
- GPS Navigation
- Lost Procedures
- Diverting to an Alternate

</div>

</div>

---

# Picking a Destination

---

## What airport do we want to go to?

- Someplace we want to go!
- How far can we make it in 1 hour of flying time?
- Airport
  - Elevation: Aircraft performance
  - Runway lengths, within our personal minimums?
  - Night flight: Lighting, VASI or PAPI?
- Services
  - Is there an FBO (Fixed-base operator)?
  - Self-serve fuel?
  - Crew cars?
- Weather

---

## Going to Corvalis

<div class="h-stack">

![w:800](images/image.png)

- We hear Corvallis has a good restaurant, where should we land?
- Considering KCVO
  - At least 5900' runway
  - Airport is lighted
  - Airport has a beacon
  - Airport has fuel
  - Has an AWOS - Automated weather
  - Fuel available - tick marks

</div>

---

## More Information: Chart Supplement

<div class="h-stack">

![w:800](images/KCVO.jpeg)

- 2 runways: 5900' and 3100'
- 4 mi SW of city of Corvallis
- 100LL available
- Has a VOR on the field

</div>

---

## More Information: Services

<div class="h-stack">

![w:700](images/image-1.png)

- FBO: Fixed-based operator
- Self-serve fuel
- Rental cars
- Attended 8-6pm M-F

</div>

---

# Routing to our Destination

---

## Direct Route

<div class="h-stack">

![bg left:50% fit](images/image-2.png)

- What's the terrain like?
- Airspace:
  - B/C/D airspace
  - Restricted or prohibited areas
  - MOAs
- Where would we go in an emergency?
- Diversion options

</div>

---

## Terrain Shading

<div class="h-stack">

![alt text](images/image-3.png)

![alt text](images/image-4.png)

![alt text](images/image-5.png)

![alt text](images/image-6.png)

</div>

---

## Maximum Elevation Figures (MEF)

<div class="h-stack">

- Height of the highest terrain or obstacle in MSL
- +100 foot buffer
- Rounded up to near 100' level
- With a MEF of 6600, where would we want to cruise at?

</div>

![bg right:50% fit](images/image-7.png)

---

## Obstacles

![bg left:50% fit](images/image-12.png)

- Top number: MSL altitude
- Bottom number: AGL altitude
- Some are lighted

---

## Airspace

<div class="h-stack">

![alt text](images/image-9.png)

![alt text](images/image-10.png)

</div>

---

## Emergencies

![bg right:40%](images/image-11.png)

- Where would go if our engine quits?
  - Airports
  - Type of terrain
  - Roads
  - Civilization

---

### Our Corvallis Flight

Terrain?
Airspace?
Emergencies?

![bg left:50% fit](images/image-2.png)

---

![bg left:50% fit](images/image-2.png)

### Our Corvallis Flight

- Terrain
  - MEFs: 3,200, 4,700, 2,600
- Airspace
  - Class C transition over PDX (up to 4000')
  - Aurora Class D (2700')
  - Salem Class D (2700')
- Emergencies
  - Lots of valley fields
  - Several towns
  - I-5

---

## Picking Waypoints

![bg left:40%](images/image-13.png)

- Use waypoints to route along a path that works best
- Picking good waypoints: Something you can see easily from the air
  - Rivers, lakes, mountains
  - Towns, roads
  - VFR waypoints
  - Airports: Can be great
    - Small grass strips can be hard to see
    - Difficult to see at night

---

## Corvallis Flight Waypoints

![bg left:50% fit](images/image-14.png)

- KVUO
- KPDX
- Lake Oswego
- KUAO - Aurora
- KSLE - Salem
- KCVO

---

## VFR Cruising Altitudes (91.159)

<div class="h-stack">

![alt text](images/image-15.png)

<div>

Above 3000' AGL, VFR traffic in level cruising flight shall fly:

- On **eastbound** headings (0 thru 179&deg; magnetic)
  - Odd thousands + 500'
  - E.g. 3500', 5500', 7500'
- On **westbound** headings (180 thru 359&deg; magnetic)
  - Even thousands + 500'
  - E.g. 4500', 6500', 8500'

</div>

</div>

---

## Cruising Altitudes

![bg left:50% fit](images/image-14.png)

- Select based on:
  - Terrain
  - Performance
  - Emergency considerations
- Our Corvallis flight
  - Highest terrain 3000'
  - Class D up to 2700'
  - Let's pick **6500** ft

---

## Simple Altitude Planning - Climb

![bg left:50% fit](images/image-16.png)

- Takeoff from Pearson
- Start climbing to our cruising altitude
  - Let's say 1000 ft/min. climb
  - Climb from S.L. to 6,500 ft.
  - **6.5 minutes**
- Cruise at 6,500'

---

## Simple Altitude Planning - Descent

- Takeoff from Pearson
- When do we want to descend?
  - Let's use 500 fpm down
  - Decent from 6,500 to KCVO pattern altitude (1250')
  - 6500 - 1500 = 5000'
  - **10 minutes** before arrival
    - Plus some extra to enter traffic pattern

---

## Final Plan

![bg left:50% fit](images/image-14.png)

- KVUO
- KPDX
- Top-of-climb (TOC) - 6,500' MSL
- Lake Oswego
- KUAO - Aurora
- KSLE - Salem
- Top-of-decent (TOD)
- KCVO

---

## Preflight Information Requirements ([91.103](https://www.ecfr.gov/current/title-14/section-91.103))

- "NWKRAFT"
  - **N**OTAMs
  - **W**eather
  - **K**nown ATC delays: For bigger airports
  - **R**unway lengths: For our intended airports
  - **A**lternates available: Other airports we can go to
  - **F**uel requirements
  - **T**akeoff and landing distances: Performance charts

---

## How are we going to get there?

![bg left:35% fit](images/image-14.png)

- Pilotage: Look out the window
  - See our waypoints
  - (and everything in between)
- Dead reckoning:
  - Speed \* Time = Distance
- Radio navigation:
  - Newberg VOR
  - Corvallis VOR
- GPS

---

## Dead Reckoning

How much time will it take to take to fly from waypoint A to waypoint B?

Time = Distance / Speed

We need to know our speed over the ground (groundspeed)

---

## Dead Reckoning - Ground Speed

![bg right:40% fit](images/image-17.png)

How do we find our speed over the ground?

1. Start with our expected airspeed from performance
2. Account for atmospheric conditions (pressure, temperature)
3. Use forecasted winds to account for wind drift

---

## Dead Reckoning - Wind Correction

![bg right:40% fit](images/image-17.png)

What heading do we need to fly to get to waypoint B?

- We need to turn to correct for the direction the wind is blowing us
- We call this the **wind correction angle**
- It depends on wind speed and wind direction

---

## Navigation Log

![bg left:50% fit](images/image-18.png)

- Includes preplanned fields
  - Start with distance and true course
  - Compute heading to fly
  - Compute time
  - Compute fuel burn
- Fill out left to right

---

## Navlog - Step 1: Enter our Waypoints

<div class="h-stack">

![w:200](images/image-19.png)

- List our fixes
- List our top-of-climb (TOC) after PDX
- Add any VOR identifiers with their frequencies / morse identifiers

</div>

---

## Navlog - Step 2: Determine true courses

![bg left:40% fit](images/IMG_3102.JPG)

- Use a plotter
- Use SkyVector.com

---

## Navlog - Step 2: Determine true courses

<div class="h-stack">

![w:300](images/image-20.png)

- True course for each leg
- Note (TOC) leg has same course as next leg
- Also added our altitudes

</div>

---

## Navlog - Step 3: Determine distances

![bg left:40% fit](images/IMG_3104.jpg)

- Use a plotter and a paper chart
- Use an SkyVector.com

---

## Navlog - Step 4: Compute Climb

<div class="h-stack">

![alt text](images/image-21.png)

- From S.L. to 6000'
  - Time = 6 - 0 = 6 minutes
  - 10 - 0 = 10nm
  - 2.6 - 0 = 2.6 gallons
  - 6 / 60 = 0.1 hours
- Compute rates:
  - 10nm / 0.1 hours = **100 knots** groundspeed (no wind)
  - 2.6 gallons / 0.1 hour = **26 gallons per hour**
- Use this as our TAS for the climb

</div>

---

## Navlog - Step 4: Compute Climb

![alt text](images/image-22.png)

---

## Navlog - Step 5: Determine Cruise, Winds

Winds Aloft forecast from [aviationweather.gov](https://aviationweather.gov/data/windtemp/?region=sfo&fcst=06&level=low)

```
(Extracted from FBUS31 KWNO 101358)
FD1US1
DATA BASED ON 101200Z
VALID 101800Z   FOR USE 1400-2100Z. TEMPS NEG ABV 24000

FT  3000    6000    9000   12000   18000   24000  30000  34000  39000
PDX 2306 2318+05 2229+00 2242-06 2164-17 2177-28 218843 218852 228861
```

- Climb: 230&deg; true @ 6 knots
- Cruise: 6000 ft: 230&deg; true @ 18 knots, 5&deg; C

---

## ForeFlight Winds

<div class="h-stack">

![w:300](<images/KCVO Corvallis Municipal 4.jpeg>)

- We can also get winds over an airport using ForeFlight
- Uses weather model to predict winds

</div>

---

## Navlog - Step 5: Determine Cruise, Airspeed

<div class="h-stack">

![alt text](images/cruise-perf.png)

<div>

Pressure altitude, 6000' chart

- Use standard temperature (3&deg; vs 5&deg; C)
- 61% BHP
- 127 knots true airspeed (TAS)
- 11.7 gph fuel burn, with proper leaning

</div>

</div>

---

## Airspeed Calibration

![alt text](images/image-23.png)

- 127 knots indicated airspeed (IAS)
- ~125 knots calibrated airspeed (CAS)

---

## Navlog - Step 5: Determine Cruise, Airspeed

<div class="h-stack">

![w:500](images/image-24.png)

</div>

---

## Navlog - Step 5: Determine Cruise, Add Winds

<div class="h-stack">

![w:500](images/image-26.png)

</div>

---

## Navlog - Step 6: Course and Headings

- We need to convert the true course we got from the chart into a heading we can follow in the airplane
- We need to correct for
  - Wind
  - Magnetic variation (magnetic vs true heading)
  - Compass deviation (interference with our airplane's compass)

---

## Navlog - Step 6: Course and Headings

1. Compute true heading (TH) = True course (TC) + wind correction angle (WCA)
2. Compute magnetic heading (MH) = True heading + magnetic variation
3. Compute compass heading (CH) = Magnetic heading (MH) + compass deviation

---

## Navlog - Step 6: Course and Headings, True Heading

![alt text](images/image-25.png)

<div>

Using an E6B, compute heading/groundspeed:

- Climb leg winds (3000'): 230&deg; true @ 6 knots
- Course: 127 &deg; True
- True airspeed: 100 knots

Result: Heading **130 &deg; True**, Wind correction angle (WCA): **+3&deg;**, Groundspeed: **101 knots**

</div>

---

## Navlog - Step 6: Course and Headings, True Heading

![alt text](images/image-27.png)

Result: Heading **130 &deg; True**, Wind correction angle (WCA): **+3&deg;**, Groundspeed: **101 knots**

---

## Navlog - Step 6: Course and Headings, Magnetic Heading

<div class="h-stack">

![w:600](images/isogonic.png)

- On the section find an "isogonic line"
- "East is least"
  - Subtract easterly variation
  - Add westerly variation
- We have 15&deg; E, so we'll subtract 15&deg;

</div>

---

## Navlog - Step 6: Course and Headings, Magnetic Heading

<div class="h-stack">

![alt text](images/image-28.png)

</div>

---

## Navlog - Step 6: Course and Headings, Compass Heading

![alt text](images/compass-card.png)

- Compasses installed in airplanes are subject to magnetic interference due to
  - Skin and surface of the aircraft
  - Electrical components in the airplane
- This error is called **compass deviation**
  - A compass deviation card will be in your airplane
  - This card shows corrections for this error

---

## Navlog - Step 6: Course and Headings, Compass Heading

<div class="h-stack">

![alt text](images/compass-card.png)

- For our magnetic heading of 115&deg;
  - Use the 120&deg;. Error is -1&deg;
- 115&deg; - 4 = 111 &deg; Magnetic
- This is our **compass heading**

</div>

---

## Navlog - Step 6: Course and Headings, EFIS Heading

<div class="h-stack">

![alt text](images/image-29.png)

<div>

Note that an airplane with an EFIS (like the Garmin G5), are calibrated for deviation error during installation

- We will fly **magnetic heading** when navigating with the G5
- We will fly with **compass heading** when navigating with our magnetic compass

</div>

</div>

---

## Navlog - Step 6: Course and Headings, Compass Heading

<div class="h-stack">

![w:1000](images/image-30.png)

</div>

---

## Navlog - Step 6: Course and Headings, Compass Heading

![alt text](images/image-32.png)

---

## Navlog - Step 7: Computing Top of Climb

- Compute climb distance
  - 6 minutes = 0.1 hours
  - 3.2nm / 101 knots \* 60 = 2 minutes
- Second leg
  - 6 - 2 minutes = 4 minutes
  - (4 / 60) \* 128 knots = **8.5nm**
- Computing leg distances
  - PDX to Lake Oswego: 12nm
  - Third leg: (TOC) to Lake Oswego: 12 - 8.5nm = **3.5nm**

---

## Navlog - Step 7: Computing Top of Climb

<div class="h-stack">

![alt text](images/image-33.png)

</div>

---

## Navlog - Step 8: ETE and Fuel

Now that we know our groundspeed we can compute:

- Estimated time enroute (ETE): Time between waypoints
  - 3.2nm / 101 knots GS = **2 minutes**
  - Climb fuel: 26 gallons / hour \* (2 minutes) = **0.9 gallons**
- Estimate fuel burn: How much fuel we will burn each leg

---

## Navlog - Step 8: ETE and Fuel

<div class="h-stack">

![alt text](images/image-31.png)

</div>

---

## Navlog - Final Navlog

<div class="h-stack">

![w:740](images/image-34.png)

</div>

---

# Flight Planning with ForeFlight

---

## Entering a Flight Plan

![alt text](images/foreflight-3.jpeg)

---

## ForeFlight Profiles

<div class="h-stack">

<div class="flex-1">

"Advanced Profiles": ForeFlight-made

![w:250](<images/KCVO Corvallis Municipal 7.jpeg>)

</div>

<div class="flex-1">

Basic profiles: User-entered

![w:350](<images/KCVO Corvallis Municipal 8.jpeg>)

</div>

</div>

---

![alt text](images/foreflight-2.jpeg)

---

![alt text](images/foreflight-1.jpeg)

---

## Manual Navlog vs ForeFlight

- Why are they different?
  - ForeFlight can compute changing winds as the route progresses
  - ForeFlight can calculate winds as we climb
  - ForeFlight performance
  - Rounding on manual navlog
- Sanity-check any ForeFlight output

---

# Flying our Flight Plan

---

## Getting A Weather Briefing

![bg left:40% fit](<images/KCVO Corvallis Municipal 9.jpeg>)

- What is a weather briefing?
  - Includes NOTAMs, METARs, TAFs, AIRMETS/SIGMETs for a route of flight
- Where can we get one?
  - ForeFlight
  - [1800wxbrief.com](https://www.1800wxbrief.com/Website/#!/)
  - Calling 1800-WX-BRIEF or a Flight Service Station
- A record of the briefing is kept

---

## Filing a Flight Plan

<div class="h-stack">

![w:900](images/image-38.png)

- What is a flight plan?
  - Details about your flight that you file with flight service
  - Includes your route, ETD, ETA, passengers
  - A flight plan that has not been closed <u>30 minutes</u> after the ETA will initiate search and rescue
- Why use a flight plan?
  - It's not required, but it's a good idea
  - We want someone looking for us

</div>

---

## Flight Plan: Activating

<div class="h-stack">

![w:600](images/image-39.png)

- Before takeoff, file your flight plan, use your best estimate for ETD and ETE
- Shortly before or after departure, open the flight plan
- If your ETA is going to change significantly, contact FSS or amend your flight plan
- After landing, close your flight plan
- Ways to activate or close a flight plan
  - Via ForeFlight
  - Calling an FSS: 1800-WX-BRIEF
  - Contacting FSS in the air

</div>

---

## Flight Service Stations (FSS)

<div class="h-stack">

![w:800](<images/KVUO Pearson Field 3.jpeg>)

![w:800](<images/KVUO Pearson Field 4.jpeg>)

- FSS frequencies
  - List on the sectional chart above airport datablock
  - Also listed in ForeFlight
- Example radio call
  - `"McMinnville radio, Cessna 2017E on 122.6"`
  - `"McMinnville radio, Cessna 2017, I'd like to open my VFR flight plan to Renton, K-R-N-T"`

</div>

---

## UTC Time Conversion

<div class="h-stack">

![w:375](images/image-40.png)

![w:375](images/image-41.png)

</div>

---

## Flying our Flight Plan

Going to use all the tools at our disposal:

- Pilotage: Look out the window
- Dead reckoning:
  - Using our navlog, flying headings
  - Note the time of each waypoint
- Radio navigation
- GPS navigation
- VFR flight following

---

## VOR and DME navigation

<div class="h-stack">

![alt text](images/image-35.png)

- Limited by line-of-sight, works better the higher you go
- Flying to a VOR:
  1. Ensure CDI is in VLOC mode (not GPS mode)
  2. Tune the station
  3. Identify the station: Listen for morse code
     - No morse code means station is out of service
  4. Center the CDI with a TO indication
  5. Turn to the course shown, bracketing for wind

</div>

---

## GPS Navigation

<div class="h-stack">

![alt text](images/image-36.png)

- Ensure CDI is in GPS mode
- Guidance towards the purple line on the map
- Direct-To: Course from your current position to another waypoint

</div>

---

## Lost Procedures

4 C's

- **C**limb
  - Better see landmarks, get
  - Get adequate radio or nav signal reception
- **C**ommunicate:
  - Talk to ATC
  - Ask for vector to a know location (airport, VFR point)
- **C**onfess
  - Say that you're lost
- **C**omply
  - Follow what ATC says

---

## Diverting to an Alternate: Picking an Alternate

- Use information available in the cockpit to decide on a good alternate
  - GPS Navigators
  - FIS-B Weather
  - ATC

---

## Diverting to an Alternate: Navigating to an Alternate

- Use pilotage
- Use a GPS direct
- Use radio navigation
- Apply rule-of-thumb calculations:
  - ~60 knots of groundspeed: 1nm per minute
  - ~90 knots of groundspeed: 1.5nm per minute
  - ~120 knots of groundspeed: 2nm per minute

---

# Summary

<div class="h-stack">

<div>

- Picking Destinations
- Picking Waypoints
- VFR Cruising Altitudes (91.159)
- Cruising Altitudes
- Dead Reckoning
- Navigation Log
  - Steps to manually complete a navlog
- Flight Planning with ForeFlight

</div>

<div>

- Preflight Information Requirements (91.103)
- Weather Briefings
- Flight Plans
- UTC Time Conversion
- Flying our Flight Plan
- VOR and DME navigation
- GPS Navigation
- Lost Procedures
- Diverting to an Alternate

</div>

</div>

---

## Knowledge Check

How do you convert calibrated airspeed into indicated airspeed?

---

## Knowledge Check

You're traveling at 120 knots grounds speed and you have 50nm left to your destination. If we maintain our speed, how long will us take you get there?

---

## Knowledge Check

You're traveling at 120 knots grounds speed and you have 50nm left to your destination. If we maintain our speed, how long will us take you get there?

```
50 / 2nm / minute = 25 minutes
```

---

## Knowledge Check

We're planning to divert to an airport with an elevation of 3500'. We're currently cruising at 8500' and our ground speed is approximately 120 knots.

When should we start to descending to enter the traffic pattern 3nm from the airport?

---

## Knowledge Check

We're planning to divert to an airport with an elevation of 3500'. We're currently cruising at 8500' and our ground speed is approximately 120 knots.

```
8500 - 4500 = 4000'
5000' / 500 fpm = 8 minutes
8 minutes * 2 nm / min = 16nm
16nm - 3nm = 13nm
```
