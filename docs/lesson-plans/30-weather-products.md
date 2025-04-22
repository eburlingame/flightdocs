# Weather Products

## Objective

To understand the standard aviation weather products, and apply them in a flight planning scenarios.

## Motivation

## Timings

- 1 hour

## Format

- [Slides](/slides/weather-products.pdf)
- Walk-through of AviationWeather.gov
- Flight planning exercise with ForeFlight

## Elements

### Weather Products Presentation

- Weather Data Sources
  - EFBs: ForeFlight, Garmin Pilot
  - AviationWeather.gov
  - 1800wxbrief.com (Leidos Flight Service)
  - In-cockpit weather
- Aviation Routine Weather Report (METAR)
  - Observation of current surface weather
  - Reported in standard international format
  - Updated regularly, often hourly
  - SPECI reports between scheduled reports
  - Type of report: METAR or SPECI
  - Station: ICAO code
  - Time of report: Time and date
  - AUTO: Automatic reporting station
    - AO1: No precipitation discriminator
    - AO2: Precipitation discriminator
  - Wind: Direction and speed
    - Variable wind: VRB
  - Visibility
    - Runway visual range (RVR)
  - Weather: Qualifiers and descriptors
    - Intensity: Light, Moderate, Heavy
    - Vicinity: VC
  - Explanation of weather descriptor codes (e.g., RA, SN, TS)
  - Sky cover: BKN, OVC, etc.
  - Altitude of cloud bases (AGL)
  - Cumulonimbus (CB), Towering Cumulonimbus (TCU)
  - Vertical visibility (VV)
  - Temperature and dewpoint (C)
  - Altimeter setting (" Hg)
  - Pressure tendency: PRESFR, PRESRR
- Pilot Report (PIREPS)
  - Reports from aircraft in flight
  - ATC solicits PIREPs if ceiling below 5,000'
  - Report type (UA)
  - Location (OV)
  - Time (TM)
  - Flight level (FL)
  - Aircraft type (TP)
  - Sky condition (SK)
  - Weather (WX)
  - Temperature (TA)
  - Wind (WV)
  - Turbulence (TB)
  - Remarks (RM)
  - Routine report (UA)
  - Location relative to VOR
  - Time (Z)
  - Altitude
- Terminal Aerodrome Forecasts (TAF)
  - Forecast for 5sm radius around airport
  - Valid for 24 or 30-hour period
  - Updated four times daily
  - Station identifier
  - Issuance time
  - Valid period
  - Wind forecast
  - Visibility and weather
  - Sky condition
  - "From" (FM) group
  - "Temporary" (TEMPO) group
- Winds and Temperature Aloft Forecast (FB)
  - Based on radiosonde data
  - Winds in true north
  - Header information
  - Valid time
  - Temperatures negative above 24,000'
  - Forecast wind and temperature at various altitudes for specific locations
  - Example wind and temperature decoding
  - 3000' MSL wind
  - 6000' MSL wind and temperature
  - Temperatures above 24,000'
  - Calm winds (9900)
  - Winds greater than 100 knots (731960) - decoding
- AIRMETs and SIGMETs
  - In-flight weather advisories for:
    - Moderate icing
    - Moderate turbulence
    - Sustained surface winds ≥ 30 knots
    - Widespread conditions less than VFR
    - Extensive mountain obscuration
  - Significant Meteorological Information
  - Issued for non-convective weather:
    - Heavy hail
    - Severe turbulence
    - Icing
    - Dust/sandstorm
    - Volcanic ash
  - Valid for 4 hours
- Convective SIGMETs
  - Conditions
    - Severe thunderstorms
    - Hail
    - Tornadoes
- Charts
  - Surface Analysis Charts
    - Issued every 3 hours
    - Based on surface pressure observations
  - Weather Depiction Chart (Prognostic Charts)
    - Surface-analysis forecasts
    - Shows:
      - High/low-pressure systems
      - Frontal positions
      - Precipitation
      - IFR/VFR conditions
  - Convective Outlook
    - Likelihood of severe thunderstorms
      - TSTM: 10% or higher probability
      - SLGT: Slight risk
      - ENH: Enhanced risk
      - MDT: Moderate risk
      - HIGH: High risk
  - Graphical Forecast for Aviation
    - Map-based products
    - Replaces text-based area forecasts
  - GFA: Ceiling and Visibility Chart
    - Graphical representation of ceiling and visibility forecasts
- In-Cockpit Weather Systems
  - ADS-B in weather products:
    - FIS-B
    - TIS-B
- Flight Information Service (FIS-B)
  - Products:
    - METARs/SPECIs/TAFs
    - PIREPs
    - AIRMETs/SIGMETs
    - Graphical AIRMETs
    - Icing
    - Lightning
    - NEXRAD
    - NOTAMs
    - Center Weather Advisories
    - Winds and temperatures aloft
    - Turbulence
- Cautions of Using NEXRAD
  - Depicts past, not current, weather
  - Accidents due to reliance on NEXRAD
  - Importance of image age
  - System update frequency

### ForeFlight Flight Planning Walk-Thru

- See [Sample ForeFlight Weather Planning](/docs/lesson-plans/problems/foreflight-wx-flt-plan)

## References

- [SPC Outlook Categories](https://www.spc.noaa.gov/misc/SPC_probotlk_info.html)
- [Pilot's Handbook of Aeronautical Knowledge pg. 13-1](/_references/PHAK/13-1)
