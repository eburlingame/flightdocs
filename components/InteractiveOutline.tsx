export type OutlineSection = {
  title: string
  page: string
  children?: OutlineSection[]
}

export type InteractiveOutlineProps = {
  sections: OutlineSection[]
  indent?: number
}

const InteractiveOutline = ({ sections, indent }: InteractiveOutlineProps) => {
  return (
    <div>
      {sections.map((section, index) => (
        <div key={index}>
          <a href={section.page}>{section.title}</a>
          {section.children && (
            <InteractiveOutline sections={section.children} />
          )}
        </div>
      ))}
    </div>
  )
}

export default InteractiveOutline
