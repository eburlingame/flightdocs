import { ReactNode, useMemo } from 'react'
import styled from 'styled-components'

export type RegProps = {
  title?: string
  showTitle?: boolean
  part: string
}

const RegContainer = styled.a`
  font-family: futura-pt;
  font-size: 0.85em;

  transition: 0.2s background-color;
  background-color: #232323;

  color: #eee;

  padding: 0.12em 0.35em;
  border-radius: 0.4em;
  margin-right: 0.25em;

  :hover {
    background-color: #444477;
    transition: 0.2s background-color;
  }
`

const ecfrURL = (search: string) =>
  `https://ecfr.federalregister.gov/cfr-reference?cfr[date]=current&cfr[view_mode]=enhanced&cfr[reference]=${search}&button=`

const Reg = ({ title = '14', showTitle = false, part }: RegProps) => {
  const url = useMemo(() => ecfrURL(`${title} CFR ${part}`), [title, part])

  return (
    <RegContainer href={url} target="_new">
      {showTitle ? `${title} CFR ${part}` : part}
    </RegContainer>
  )
}

export default Reg
