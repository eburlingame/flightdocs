---
theme: default
---

# Flight Instruments and Avionics

---

![alt text](images/image-70.png)

---

### Pitot-static instruments

![bg left:60% contain](images/image-71.png)

- Static port: Ambient air pressure
- Pitot tube: Ram air pressure, in the relative wind flow

---

## Altimeter

![bg left:40% contain](images/image-73.png)

- Converts barometric pressure into altitude
- Calibrated to the lapse rate of the standard atmosphere (2&deg; per 1000', 1" Hg per 1000')
- Calibrated to the temperature of the standard atmosphere (15&deg; @ S.L.)
- Kollsman window allows for calibrating the atmosphere indicator up and down
  - Window does have a set range

---

## Nonstandard Temperature Errors

![h:400](images/image-72.png)

- Colder temperatures: "Compress" the column of air below, altimeter reads higher
- Hotter temperature: "Expand" the column of air below, altimeter reads lower

---

## Types of Altitude

- Indicated altitude: Read from the altimeter
- True altitude: Vertical distance from mean sea level
- Absolute altitude: Vertical distance above terrain (AGL)
- Pressure altitude: Read from altimeter when set to 29.92"
  - Height in the standard atmosphere where the ambient pressure is found
- Density altitude: Pressure altitude corrected for nonstandard temperature

---

## Vertical Speed Indicator

![bg left:40% contain](images/image-74.png)

- Rate of change of the altitude/ambient pressure
- Will lag considerable with pressure alone

---

## Instantaneous Vertical Speed Indicator (IVSI)

![bg left:40% contain](images/image-75.png)

- Accelerometer weights help lead the indication before pressure changes

---

## Airspeed indicator

![bg left:35% contain](images/image-77.png)

- Airspeed = (Ram air pressure - static pressure)
- Operates with a diaphragm

---

## Types of Airspeed

- Indicated airspeed (IAS): Read from altimeter
- Calibrated airspeed (CAS): Calibrated for position/instrument errors
  - At slow airspeeds this may be several knots off
- True airspeed (TAS): CAS corrected for altitude and nonstandard temperature
- Ground speed (GS): Actual speed over the ground
  - TAS adjusted for wind

---

## IAS vs CAS

![h:500](images/image-94.png)

---

## Airspeed Indicator Markings

![bg left:40% contain](images/image-76.png)

- V<sub>S0</sub>: Stall speed in landing configuration
- V<sub>S1</sub>: Stall speed in clean configuration
- V<sub>FE</sub>: Flap extension speed (full flaps)
- V<sub>N0</sub>: Maximum structural cruising speed (smooth air only)
- V<sub>NE</sub>: Never exceed speed
- Notice V<sub>A</sub> is not marked

---

## Pitot Blockages

![bg left:50% contain](images/image-71.png)

- Ram air block: Airspeed reads 0
- Ram air + drain hole blocked:
  - Airspeed reads whatever it was when it was blocked
  - If you descend it'll read lower, higher if ascending

---

## Static Port Blockages

- Alternate static source vents into the cockpit
- Pressure is **higher**, since there is usually a venturi effect around the static port
  - Altimeter reads slightly high
  - Airspeed will read slightly higher (RAM - static = airspeed)
  - VSI will momentarily indicate a climb, then settle

---

## Gyroscopic Instruments

![bg left:30% fit](images/image-79.png)

- Operate on the principle of gyroscopic stability
- Corollary: Bicycle wheel stability at low vs high speeds
- Mechanical flight instruments use a spinning rotor
  - Vacuum pump (engine-driven or electric)
  - Pressure
  - Electrical motor
- Aircraft rotates around the gyro

<!-- Why a vacuum? Gyros need low-friction environment -->

---

## Vacuum Instruments

![h:400](images/image-80.png)

- In a standard "six pack":
  - Vacuum-driven gyroscopic system drive the attitude and heading indicators
  - Sometimes the turn coordinator

---

### Turn Coordinator

![h:400](images/image-81.png)

- 1-axis gyro
- Indicates rate of yaw/turn rate around the vertical axis
- No primary bank information

---

## Inclinometer

![bg left:40% contain](images/image-82.png)

- Not a gyro instrument
- Ball with mass in a fluid, like a level

---

## Attitude indicator

![bg left:50% contain](images/image-83.png)

- Indicates rotational position of the longitudinal (pitch) and lateral axis (roll)
- Adjustment knob to set horizon to level
- Pitch limit usually around 100-110&deg;
- Bank limit around 60-70&deg;

---

## Directional Gyro/Heading Indicator

![bg left:45% contain](images/image-84.png)

- Indicates rotational position about the vertical axis
- Must be continually calibrated with the magnetic compass
  - Earth rotates in space at a rate of 15° in 1 hour
  - Gyroscopic precession: gimbal is not frictionless, small forces cause position drift

---

## Horizontal Situation Indicator (HSI)

![bg left:40% contain](images/image-85.png)

- Often overlay VOR CDI needles
- Some can be "slaved" to a magnetic sensing device
  - Eliminates the need to manually calibrate with the magnetic compass

---

## Attitude and Heading Reference System (AHRS)

![bg left:30% contain](images/image-86.png)

- No moving parts
- Uses accelerometers for roll/pitch/yaw information
- Use a magnetometer for heading information, often mounted on the wing
- Feeds modern glass-panel displays
- Less susceptible to mechanical failures

---

## Vacuum System Failures

- A loss of vacuum pressure will result in a slow spin-down of gyros
- An attitude indicator will show a slow lean/dive
- Utilize a cross-checking scan

---

![bg fit](images/image-78.png)

---

# Magnetic Compass

![bg left:40% fit](images/image-87.png)

- Self-contained, no power needed
- Operates on the magnetic pull of the Earth

---

## ![bg 75% contain](images/image-88.png)

---

## Compass Errors and Variation

- Magnetic variation: Magnetic north vs true north
- Magnetic deviation: Magnetic field in an aircraft can
- Magnetic dip errors: North and south turning errors
- Acceleration errors: Accelerating on an east/west heading

---

## Magnetic Variation

![h:550](images/image-91.png)

---

## Magnetic Deviation

![bg left:50% contain](images/image-92.png)

- The magnetic field for various electronic/magnetic/metallic components in the airplane can skew the direction of the compass
- The compass correction card gives you calibration to account for this
- Compass correction cards are specific to each airplane

---

## Magnetic Dip

![bg left:45% contain](images/image-93.png)

- As you get closer to the poles the vertical component of the magnetic field get stronger (and the horizontal component gets weaker)
- Compasses can compensate for this when they are level
- When they are tilted though, the results may be skew

---

## Magnetic Dip Errors

![bg left:60% contain](images/image-89.png)

- When in a turning through a N or S heading
- North: compass card leads actual heading
- South: compass card lags actual heading
- "UNOS"
  - Undershoot North
  - Overshoot South

---

## Acceleration Errors

![bg left:60% contain](images/image-90.png)

- Compass card is not a uniform mass
  - It's a little heavier on the north side, to account for dip
- "ANDS"
  - Accelerate: North
  - Decelerate: South

---

## Getting an Accurate Compass Reading

- Straight and level, unaccelerated flight
- Account for deviation using the compass correction card
- Know when to use true headings vs magnetic headings
- Magnetometer-based (electronic flight displays) systems won't have these errors
