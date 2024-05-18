import { ReactNode } from 'react'
import style from './Acronym.module.css'

export type AcronymRowProps = {
  letter: ReactNode
  title: ReactNode
  notes?: ReactNode
  reg?: ReactNode
}

export const AcronymRow = ({ letter, title, notes, reg }: AcronymRowProps) => {
  return (
    <tr className={style.acronymRowContainer}>
      <td className={style.letterCell}>{letter}</td>
      <td className={style.titleCell}>{title}</td>
      {notes && <td className={style.notesCell}>{notes}</td>}
      {reg && <td className={style.notesCell}>{reg}</td>}
    </tr>
  )
}

export type AcronymProps = {
  children: ReactNode
}

const Acronym = ({ children }: AcronymProps) => {
  return (
    <table className={style.acronymTable}>
      <tbody>{children}</tbody>
    </table>
  )
}

export default Acronym
