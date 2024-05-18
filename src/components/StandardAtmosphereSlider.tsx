import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useState } from 'react'
import style from './StandardAtmosphereSlider.module.css'

const SEA_LEVEL_PRESSURE_IN_HG = 29.92
const SEA_LEVEL_TEMPERATURE_C = 15

const TROPOPAUSE_HEIGHT_FEET = 36089
const TROPOPAUSE_TEMPERATURE_C = -56.4995
const TROPOPAUSE_PRESSURE_IN_HG = 6.68332

const PRESSURE_LAPSE_RATE_IN_HG =
  (TROPOPAUSE_PRESSURE_IN_HG - SEA_LEVEL_PRESSURE_IN_HG) /
  TROPOPAUSE_HEIGHT_FEET

const TEMPERATURE_LAPSE_RATE =
  (TROPOPAUSE_TEMPERATURE_C - SEA_LEVEL_TEMPERATURE_C) / TROPOPAUSE_HEIGHT_FEET

const pressureAtAltitude = (altitudeInFeet: number) => {
  if (altitudeInFeet >= TROPOPAUSE_HEIGHT_FEET) {
    return TROPOPAUSE_PRESSURE_IN_HG
  }
  return SEA_LEVEL_PRESSURE_IN_HG + altitudeInFeet * PRESSURE_LAPSE_RATE_IN_HG
}

const temperatureAtAltitude = (altitudeInFeet: number) => {
  if (altitudeInFeet >= TROPOPAUSE_HEIGHT_FEET) {
    return TROPOPAUSE_TEMPERATURE_C
  }
  return SEA_LEVEL_TEMPERATURE_C + altitudeInFeet * TEMPERATURE_LAPSE_RATE
}

const StandardAtmosphereSlider = () => {
  const [altitudeFeet, setAltitudeFeet] = useState(0)

  const pressureInHg = pressureAtAltitude(altitudeFeet)
  const temperatureDegreesC = temperatureAtAltitude(altitudeFeet)

  return (
    <div className={style.widgetContainer}>
      <div className={style.row}>
        <Slider
          value={altitudeFeet}
          onChange={(v) => setAltitudeFeet(v as number)}
          min={0}
          max={40000}
          step={100}
        />
      </div>
      <div className={style.row}>
        <div className={style.cell}>
          <div className={style.label}>Altitude (MSL):</div>
          <div>{altitudeFeet.toFixed()} feet</div>
        </div>
        <div className={style.cell}>
          <div className={style.label}>Temperature</div>
          <div>{temperatureDegreesC.toFixed(2)}&deg; C</div>
        </div>
        <div className={style.cell}>
          <div className={style.label}>Pressure</div>
          <div>{pressureInHg.toFixed(2)}&quot; Hg</div>
        </div>
      </div>
    </div>
  )
}

export default StandardAtmosphereSlider
