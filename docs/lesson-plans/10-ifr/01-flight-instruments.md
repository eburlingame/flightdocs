# Flight Instruments

## Objective

Review the pitot-static and gyroscopic instruments, their operation and errors, and emphasize how they are relied upon for IFR flight.

## Timing

45 minutes

## Format

- Whiteboard
- [Pitot Static System Simulator](https://www.luizmonteiro.com/Learning_Pitot_Sim.aspx)

## Overview

## Elements

### Pitot-Static Instruments

![alt text](images/image-8.png)

- Pitot: Pitot tube, often on the wing of GA aircraft
- Static port: Usually flush with the fuselage on the side of an aircraft
- Which instruments are pitot static instruments?

#### Altimeter (Sensitive altimeter)

![alt text](images/image-9.png)

- Static ports
  - Fed by one or more static ports on the side of the aircraft
  - Some static ports may be heated
- A traditional altimeter contains an aneroid wafer with a vacuum inside
  - As ambient pressure changes, the wafer expands and contracts
  - This expansion causes the needle to move up/down
- Types of altitude
  - **Indicated altitude**: Read from the altimeter
  - **True altitude (MSL)**: How many feet the aircraft is above true mean sea level
  - **Pressure altitude**: Read from the altimeter when set to 29.92"
    - Also, the height in the standard atmosphere where that ambient _pressure_ would be found
  - Density altitude
    - The height in the standard atmosphere where an equivalent pressure is found after adjusting for non-standard temperature and pressure
  - Absolute altitude (AGL): Actual height above the terrain
- Altimetry errors
  - Cold weather errors: Cold air is more dense, therefore at the same indicated altitude the aircraft would be flying lower than is indicated
    - Think of the cylinder of air below the aircraft condensing in cold weather
  - Warm weather errors: Warm air is less dense, therefore at the same indicated altitude the aircraft would be flying higher than is indicated
    - Think of the cylinder of air below the aircraft expanding in hot weather
  - Altimeters also need to be set to a nearby altimeter setting to account for changes in ambient pressure
    - Flying from high to low pressure: Altimeter will indicate higher than true altitude
    - Flying from low to high pressure: Altimeter will indicate lower than true altitude
    - Altimeter should read within **75 feet** of the airport elevation ([AIM 7-2-3](/_references/AIM/7-2-3))

![alt text](images/image-10.png)

#### Vertical speed indicator

- Also fed by the static port
- Uses a "calibrated leak" to determine how fast the altitude in changing

#### Airspeed indicator

![alt text](images/image-11.png)

**Airspeed = (RAM air pressure - static pressure)**

- Airspeed errors
  - Pitot tube is mounted at a specific angle of attack
  - As the AoA increases, fewer molecules enter the pitot tube, thus a lower airspeed is indicated
  - Calibrated airspeed corrects for this
- Types of airspeed
  - **Indicated airspeed**: Read from the altimeter
  - **Calibrated airspeed**: Airspeed corrected for installation and position errors
  - **True airspeed**: The speed at which the aircraft is moving through the airmass
    - Changes in temperature and ambient pressure result in different air densities
    - This means the aircraft could be moving faster or slower through an airmass at the same indicated airspeed
    - True airspeed corrects for this
- Pitot-static errors and malfunctions
  - Blocked pitot tube (drain tube free): Indicated airspeed slowly drops to zero
  - Blocked pitot tube (drain tube blocked): Indicated airspeed drastic increases as the aircraft climbs, and decreases as it descends
  - Blocked static port: Altimeter will read altitude where it became blocked
- Alternate static source: Used for situation where the static port becomes blocked
  - Pressure inside the cabin is lower than the pressure on the outside of the fuselage
    - Altimeter reads slightly higher than actual
    - Airspeed reads slightly faster than actual

![alt text](images/image-12.png)

### Gyroscope Instruments

A spinning object exhibits the following qualities:

1. Rigidity in space
2. Precession

Gyroscopic instruments are often powered by:

- An electric motor
- A vacuum pump which vacates air from the instrument case, causing the gyroscopic wheel to turn

![alt text](images/image-13.png)

### Attitude Indicator

- Sometimes called an "artificial horizon"
- Contains a vertical spinning wheel, spun at high speeds
- The disk is attached to a gimbal that allows the aircraft to pitch and bank _around_ the gyro
- Gyroscopic AI's can take up to 5 minutes to stabilize
- Some AI's have a slight acceleration error
  - Slight nose-up indication when accelerating
  - Slight nose-down indication when decelerating

### Gyro-driven Heading Indicator

![alt text](images/image-14.png)

- These are not compasses and are not north-seeking
- They must be periodically set to the magnetic compass
  - The Earth constantly rotates at 15° per hour
  - Thus, the heading error will accumulate at least at 15° per hour
  - Standard practice is to compare the compass and HI every **15 minutes**

### Turn Coordinator

- Operates in much the same way as the heading indicator with a spinning gyro
- Used to make standard-rate turns
- Often are powered by a DC motor, for redundancy if the main vacuum pump were to fail

### Slip/Skid Indicator

- Also called a coordination ball or inclinometer

### Electronic Flight Instruments

- Electronic Flight Information System (EFIS): Digital cockpit information display
  - Primary flight display (PFD)
  - Multi-function display (MFD)
- AHRS: Attitude and Heading Reference System (AHRS)
- Air data computer:
  - Integrates static, pitot, and air temperature information
  - Compute airspeed, altitude, vertical speed, and true airspeed to be output on a PFD

## References

- [Pitot Static System Simulator](https://www.luizmonteiro.com/Learning_Pitot_Sim.aspx)
- [Instrument Flying Handbook pg. 5-1](/_references/IFH/5-1)
- Backseat Pilot CFI-I Lesson Plans II.A.1
