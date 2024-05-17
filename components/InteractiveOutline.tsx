export type OutlineSection = {
  title: string
  page: string
  subsections?: OutlineSection[]
}

export type InteractiveOutlineProps = {
  sections: OutlineSection[]
  indent?: number
}

const InteractiveOutline = ({
  sections,
  indent = 0,
}: InteractiveOutlineProps) => {
  return (
    <div style={{ marginLeft: `${indent * 1.5}em` }}>
      {sections.map((section, index) => (
        <div key={section.page}>
          <input type="checkbox" style={{ marginRight: '1em' }} />
          <a href={section.page}>{section.title}</a>

          {section.subsections && (
            <InteractiveOutline
              sections={section.subsections}
              indent={index + 1}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default InteractiveOutline
