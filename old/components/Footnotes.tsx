import { ReactNode } from 'react'
import styled from 'styled-components'

export type FootnotesProps = {
  children: ReactNode
}

const Separator = styled.div`
  width: 100%;
  height: 0px;
  border-top: 0.5px solid #eee;
`

const FootnoteContainer = styled.div`
  margin-top: 2em;
  font-size: medium;
`

const Footnotes = ({ children }: FootnotesProps) => {
  return (
    <FootnoteContainer>
      <Separator />
      <p>{children}</p>
    </FootnoteContainer>
  )
}

export default Footnotes
