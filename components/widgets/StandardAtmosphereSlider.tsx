import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { useState } from 'react'
import styled from 'styled-components'

const WidgetContainer = styled.div`
  border: 0.5px solid #eee;
  border-radius: 0.25em;
  padding: 1em;
`

const SliderContainer = styled.div`
  margin-bottom: 0.5em;
`

const Row = styled.div`
  display: flex;
`

const Cell = styled.div`
  flex: 1;
  text-align: center;
`

const Label = styled.div`
  font-weight: 700;
`

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
    <WidgetContainer>
      <SliderContainer>
        <Slider
          value={altitudeFeet}
          onChange={setAltitudeFeet}
          min={0}
          max={40000}
          step={100}
        />
      </SliderContainer>
      <Row>
        <Cell>
          <Label>Altitude (MSL):</Label>
          <div>{altitudeFeet.toFixed()} feet</div>
        </Cell>
        <Cell>
          <Label>Temperature</Label>
          <div>{temperatureDegreesC.toFixed(2)}&deg; C</div>
        </Cell>
        <Cell>
          <Label>Pressure</Label>
          <div>{pressureInHg.toFixed(2)}&quot; Hg</div>
        </Cell>
      </Row>
    </WidgetContainer>
  )
}

export default StandardAtmosphereSlider
