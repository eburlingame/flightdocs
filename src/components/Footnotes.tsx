import { ReactNode } from 'react'
import style from './Footnotes.module.css'

export type FootnotesProps = {
  children: ReactNode
}

const Footnotes = ({ children }: FootnotesProps) => {
  return (
    <div className={style.footnoteContainer}>
      <div className={style.separator} />
      <p>{children}</p>
    </div>
  )
}

export default Footnotes
