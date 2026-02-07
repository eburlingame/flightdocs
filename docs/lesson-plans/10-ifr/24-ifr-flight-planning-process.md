# IFR Flight Planning Process

## Objective

Demonstrate the ability to plan an IFR cross-country flight, including selecting appropriate routes and altitudes, interpreting weather data and NOTAMs, managing fuel requirements, and understanding the requirements for filing, copying, and complying with ATC clearances.

## Timing

- 45 minutes

## Format

- ForeFlight demo
- Whiteboard

## Overview

### IFR Currency and Proficiency

- Am I VFR current?
  - Current medical (and fit to fly)
  - Current BFR
  - 90-day passenger currency
- Am I IFR current?
  - 6 approaches, holds, and navigation tracking (or an IPC) within the last 6 months
- Am I IFR proficient?
  - Am I comfortable filing IFR?
  - Flying in actual IMC?
  - Flying in busy airspace?
  - Flying an unpublished hold?

### Destination Selection

- Aircraft endurance, how far can I go?
  - Refer to POH endurance or cruise chart
- FBOs and services?
  - Transient parking?
  - Tiedown fees?
  - Fuel, self-serve or full-service (fuel truck)?
    - Some airports have full-service which have after-hours call-out fees
- Runways and approaches
  - What approaches are available?
  - What are their minimums?

### Weight and Balance

- Perform a weight an balance calculation for the expect amount of fuel

### Route

- What's the best way to get to our destination?
- **Direct** is an option with a GPS
- What's options do we have to stop if we have an issue?
- Where are we going to go if we lose an engine?

#### Airways

| Airway Type         | Chart Type                  | Identifier Prefix | Altitude Range                                   | Depiction Color       | Primary Navigation Base |
| :------------------ | :-------------------------- | :---------------- | :----------------------------------------------- | :-------------------- | :---------------------- |
| **Victor Airways**  | Enroute Low Altitude        | **V**             | 1,200' AGL up to (but not including) 18,000' MSL | **Black**             | VOR or VORTAC           |
| **T-Routes** (RNAV) | Enroute Low Altitude        | **T**             | 1,200' AGL up to (but not including) 18,000' MSL | **Aeronautical Blue** | GNSS (GPS/WAAS)         |
| **Jet Routes**      | Enroute High Altitude       | **J**             | 18,000' MSL to FL 450                            | **Black**             | VOR or VORTAC           |
| **Q-Routes** (RNAV) | Enroute High Altitude       | **Q**             | 18,000' MSL to FL 450                            | **Aeronautical Blue** | GNSS or DME/DME/IRU     |
| **Y-Routes** (RNAV) | High/Low Enroute (Offshore) | **Y**             | Predominantly Class A offshore (>18,000' MSL)    | **Blue**              | GPS (RNAV 2)            |

#### IFR Altitudes

<table>
  <tr>
    <th>Altitude</th>
    <th>Name</th>
    <th>Obstruction Clearance</th>
    <th>Navaid Signal</th>
  </tr>
  <tr>
    <td>MEA</td>
    <td>Minimum Enroute Altitude</td>
    <td className="center">✅</td>
    <td className="center">✅</td>
  </tr>
  <tr>
    <td>MOCA</td>
    <td>Minimum Obstruction Clearance Altitude</td>
    <td className="center">✅</td>
    <td className="center">Within 22nm (25 s.m.) of NAVAID</td>
  </tr>
  <tr>
    <td>MCA</td>
    <td>Minimum Crossing Altitude</td>
    <td className="center">✅</td>
    <td className="center">✅</td>
  </tr>
  <tr>
    <td>MRA</td>
    <td>Minimum Reception Altitude</td>
    <td className="center">✅</td>
    <td className="center">✅</td>
  </tr>
  <tr>
    <td>MAA</td>
    <td>Maximum Authorized Altitude</td>
    <td className="center">✅</td>
    <td className="center">✅</td>
  </tr>
  <tr>
    <td>OROCA</td>
    <td>Off-route Obstruction Clearance Altitude</td>
    <td className="center">✅</td>
    <td className="center">❌</td>
  </tr>
</table>

![IFR chart altitudes](/img/content/ifr-chart-altitudes.png)

**Remember**: None of the specific altitudes listed (MEA, MOCA, OROCA, MRA, or MCA) are designed to ensure radar coverage.

#### Airspace

- Does your flight pass through any special-use airspace?
  - Military operation areas (MOAs)
  - Restricted areas
  - Prohibited areas
  - Warning areas
  - National Security Areas
  - Special flight rules areas (SFRAs)

Aeronautical Information Publication (AIP) ENR 5.1: Prohibited, Restricted, and Other Areas:

> 1.3.2 ATC facilities apply the following procedures when aircraft are operating on an IFR clearance (including those cleared by ATC to maintain VFR-on-top) via a route which lies within joint-use restricted airspace.
>
> > 1.3.2.1 If the restricted area is not active and has been released to the controlling agency (FAA), the ATC facility will allow the aircraft to operate in the restricted airspace without issuing specific clearance for it to do so.
>
> > 1.3.2.2 If the restricted area is active and has not been released to the controlling agency (FAA), the ATC facility will issue a clearance which will ensure the aircraft avoids the restricted airspace unless it is on an approved altitude reservation mission or has obtained its own permission to operate in the airspace and so informs the controlling facility.

#### TFRs

### Departure

- Runways dimension
  - What runways are we likely to use based on the forecast conditions?
  - What is the length, width, slope, and lighting?
- Takeoff Performance
  - What is our expected takeoff performance at our given loading?
- Departure Selection
  - Which departure can we expect?
  - How will we get our clearance?
- T/O Minimums
  - What weather and/or climb requirements do we need for the departure?
- Required climb gradient
  - Can we make the climb gradient based on our loading?
- Departure alternate
  - What happens if something goes wrong during departure?

### Enroute

- Enroute weather
  - Monitor **SIGMETs** for non-convective hazards like severe icing or turbulence
  - Track **AIRMETs** (**SIERRA, TANGO, ZULU**) for conditions hazardous to light aircraft
  - Avoid thunderstorms identified as severe by at least **20** miles
  - Circumnavigate convective areas with **6/10** or more cell coverage
  - Instability (rapid drop of temperature with altitude)
- Winds aloft
- Enroute altitude selection:
  - Minimum for IFR (recall [91.177](/_references/14-CFR/91.177), 1000' in non-mountainous areas, 2000' in mountainous)
  - NAV signal coverage
  - Radar coverage
  - Terrain
  - Contingency
  - Winds
- Expected performance
  - Use performance charts

### Destination

- Approaches available
  - Their minimums and required equipment
- Runway dimensions
  - What runways are we likely to use based on the forecast conditions?
  - What is the length, width, slope, and lighting?
- Landing performance
  - Landing performance given fuel requirements

### Alternate

#### 1-2-3 Rule

Alternates are required if, within **&plusmn; 1 hour of your ETA**, ceilings are **&lt; 2000'** or visibility is **&lt; 3 s.m.**, or your destination does not have an instrument approach.

- If an alternate is required, they must be selected based on the following criteria:
  - For an airports with a **precision** approach, the weather must be better than:
    - **> 600' ceiling**, and
    - **> 2 s.m. visibility**
  - For an airports with a **non-precision** approach, the weather must be better than:
    - **> 800' ceiling**, and
    - **> 2 s.m. visibility**
  - If an airport contains a negative A on its approach plates, then it has non-standard alternate minimums.
    - ![Negative A symbol](/img/content/kcvo-vor-a-header.png)
  - In this case refer to the Alternate Minimums chart for the airport in the TPP:
    - ![Alternative minimums](/img/content/kcvo-alternate-mins.png)
  - If an airport does not have an instrument approach, it can be used as an alternate if:
    - A decent to landing can be made from the **MEA** to the airport in basic VFR conditions
  - If the chart contains a negative "A" followed by "NA", then that airport cannot be used as an alternate.
    - This may be because the airport does not have weather reporting
- Select an alternate outside of your current weather system
- You are **not** required to fly to you filed alternate (expect in a rare case of a radio failure in IMC)

### NOTAMs

| NOTAM Type              | Description                                                                                                                                                     | Examples of Use                                                                                                                                                                           |
| :---------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **NOTAM (D)**           | Distributed for all navigational facilities in the NAS and all public-use aerodromes listed in the Chart Supplement. They receive distant dissemination.        | Taxiway closures (**TWY**), personnel/equipment near runways, airport lighting aids that do not affect approach criteria (**APRON**, **RWY**), and wildlife near movement areas (**AD**). |
| **FDC NOTAM**           | Regulatory in nature, these are issued by the National Flight Data Center and receive system-wide dissemination.                                                | Amendments to published IAPs and aeronautical charts (**IAP**, **CHART**), Temporary Flight Restrictions (**TFR**), laser light activity, and high barometric pressure warnings.          |
| **Pointer NOTAM**       | Issued by a flight service station to highlight or "point" to another NOTAM, making it easier to find related information.                                      | Highlighting a NOTAM related to a major system interruption, a TFR, a large airshow, or temporary Special Use Airspace.                                                                   |
| **International NOTAM** | Published in ICAO format and distributed to multiple countries. They typically duplicate data found in Domestic NOTAMs but are formatted for international use. | Information on airports, facilities, and procedures available for use by international civil aviation, or short-term information on hazardous airspace utilization.                       |
| **Military NOTAM**      | Originated by the U.S. Air Force, Army, Marine Corps, or Navy.                                                                                                  | Pertaining to military or joint-use navigational aids and airports that are part of the National Airspace System.                                                                         |
| **Security NOTAM**      | A specific type of FDC NOTAM that informs pilots of U.S. security activities or requirements.                                                                   | Special Security Instructions for aircraft operations entering, exiting, or transitioning U.S. territorial airspace.                                                                      |
| **GPS / WAAS NOTAM**    | Specifically addresses the status of satellite-based navigation systems.                                                                                        | Advising of satellite outages, planned GPS testing that may result in "UNRELIABLE" signals, or WAAS vertical guidance being "NOT AVBL".                                                   |

### PIREPs

- Pilot reports reflect real-life conditions (not forecast or terminal weather)
- Two types:
  - Routine (UA)
  - Urgent (UUA) which report hazardous weather conditions that could affect flight safety
- Note the aircraft that

### Fuel Requirements

- How much fuel do we need?
- Our legal fuel requirement: You cannot fly in IFR conditions unless you carry enough fuel to fly:
  - To the first **airport of intended landing**, then
  - To the **filed alternate airport**, then
  - For **45 additional minutes**
- What's a smart fuel requirement?
  - Land with **1 hour of fuel**

### Oxygen

- 91.211(a): Minimum oxygen requirements for high-altitude flight (>12,500')
- For optimum protection against hypoxia, the FAA encourages pilots to use supplemental oxygen:
  - During the day: Above **10,000 feet** cabin pressure altitude
  - At night: Above **5,000 feet** cabin pressure altitude, as night vision is particularly sensitive to oxygen deprivation

### Weather briefing

- Why get a briefing vs looked at NOTAMs via ForeFlight airport tab?
  - Record of the briefing is stored in case of emergencies
  - Includes enroute NOTAMs, PIREPs, and AIR/SIGMETS
- Personal minimums
  - Can you make this flight with your current personal minimums?

### IFR Flight Plan

- Mandatory for all flights in controlled airspace under **IFR**
- Submit via **ICAO** format (FAA Form **7233-4**)
  - This is what ForeFlight will submit when you file
- File at least **30** minutes prior to estimated time of departure (**ETD**)
  - Flight plans show up in the ATC system **30 minutes** prior to your ETD and remain active for 3-4 hours depending on the facility

### Aircraft Airworthiness

- AV1ATED
- ARROW documents

### Personal Pressures

- PAVE checklist: Identify and mitigate hazards during flight planning and the go/no-go decision-making process
  - Pilot
  - Aircraft
  - EnVironment
  - External pressures
- IMSAFE checklist
  - Illness
  - Medication
  - Stress
  - Alcohol
  - Fatigue
  - Emotions
