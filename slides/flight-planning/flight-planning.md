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

</div>

<div>

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

## Going to the Coast

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

## How are we going to get there?

![bg left:50% fit](images/image-14.png)

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

![alt text](images/image-18.png)

---

## Navlog - Step 1: Distance

- Use a plotter
- Use an EFB

---

# Summary

---

## Knowledge Check

Descent planning

---

## Knowledge Check

120 knots grounds speed and you have 50nm. How long will it take you get there?
