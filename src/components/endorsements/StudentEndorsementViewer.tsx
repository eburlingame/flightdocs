import { useMemo, useState } from "react";
import { Endorsement } from "./endorsements";
import { studentPrivileges } from "./student";

export type EndorsementCalculatorProps = {};

export type Privilege = {
  name: string;
  eligibility: string[];
  endorsements: Endorsement[];
  proficiency: string[];
  aeronauticalExperience: string[];
};

const sectionStyle = (bg: string) => ({
  backgroundColor: bg,
  padding: "1rem",
  borderRadius: "0.5rem",
  color: "#fff",
  marginBottom: "1rem",
});

const PrivilegeDescription = ({ privilege }: { privilege: Privilege }) => {
  const {
    name,
    eligibility,
    endorsements,
    proficiency,
    aeronauticalExperience,
  } = privilege;

  return (
    <div>
      <h2>{name}</h2>

      {eligibility.length > 0 && (
        <section style={sectionStyle("#1e3d1a")}>
          <h3>Eligibility</h3>
          <ul>
            {eligibility.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {proficiency.length > 0 && (
        <section style={sectionStyle("#1a3d36")}>
          <h3>Proficiency</h3>
          <ul>
            {proficiency.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {aeronauticalExperience.length > 0 && (
        <section style={sectionStyle("#1a393d")}>
          <h3>Aeronautical Experience</h3>
          <ul>
            {aeronauticalExperience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {endorsements.length > 0 && (
        <section style={sectionStyle("#251a3d")}>
          <h3>Endorsements</h3>
          <ul>
            {endorsements.map((item) => (
              <li key={item.name}>
                <strong>{item.acNumber}</strong> - {item.name}{" "}
                {item.notes && `(${item.notes})`}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

const StudentEndorsementViewer = ({}: EndorsementCalculatorProps) => {
  const [selectedPrivilegeName, setSelectedPrivilegeName] = useState(
    studentPrivileges[0].name
  );

  const selectedPrivilege = useMemo(() => {
    return studentPrivileges.find(
      (privilege) => privilege.name === selectedPrivilegeName
    );
  }, [selectedPrivilegeName]);

  return (
    <div>
      <select
        onChange={(e) => setSelectedPrivilegeName(e.target.value)}
        value={selectedPrivilegeName}
        style={{ marginBottom: "1rem" }}
      >
        {studentPrivileges.map(({ name }) => (
          <option key={name} id="name">
            {name}
          </option>
        ))}
      </select>

      <PrivilegeDescription privilege={selectedPrivilege!} />
    </div>
  );
};

export default StudentEndorsementViewer;
