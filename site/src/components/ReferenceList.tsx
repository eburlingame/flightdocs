export type Reference = {
  name: string;
  link: string;
};

export type ReferenceListProps = {
  references: Reference[];
};

const ReferenceList = ({ references }: ReferenceListProps) => {
  return (
    <div style={{ marginTop: "0.5em" }}>
      <h2>References</h2>

      <ul>
        {references.map(({ name, link }, index) => (
          <li key={index}>
            <a href={link} key={name} target="_new">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReferenceList;
