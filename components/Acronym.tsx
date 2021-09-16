import { ReactNode } from 'react'
import styled from 'styled-components'

export type AcronymRowProps = {
    letter: ReactNode
    title: ReactNode
    notes?: ReactNode
    reg?: ReactNode
}

const LetterCell = styled.td`
    font-weight: 700;
    width: 1em;
    text-align: center;
    padding: 0.5em;
`

const TitleCell = styled.td`
    width: 40%;
    padding: 0.5em;
`
const NotesCell = styled.td`
    padding: 0.5em;
`

const AcronymRowContainer = styled.tr`
    border-radius: 0.25em;
    transition: 0.1s background-color;

    :hover {
        transition: 0.1s background-color;
        background-color: #efefef;
    }
`

export const AcronymRow = ({ letter, title, notes, reg }: AcronymRowProps) => {
    return (
        <AcronymRowContainer>
            <LetterCell>{letter}</LetterCell>
            <TitleCell>{title}</TitleCell>
            <NotesCell>{notes}</NotesCell>
            <NotesCell>{reg}</NotesCell>
        </AcronymRowContainer>
    )
}

export type AcronymProps = {
    children: ReactNode
}

const AcronymTable = styled.table`
    border: 0.5px solid #eee;
    margin: inherit;
    border-collapse: collapse;
`

const Acronym = ({ children }: AcronymProps) => {
    return (
        <AcronymTable>
            <tbody>{children}</tbody>
        </AcronymTable>
    )
}

export default Acronym
