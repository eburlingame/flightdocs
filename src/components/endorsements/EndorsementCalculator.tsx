import { useMemo, useState } from "react";
import { Endorsement, endorsementFor, endorsements } from "./endorsements";

export type EndorsementCalculatorProps = {};

type Privilege = {
  name: string;
  eligibility: string[];
  endorsements: Endorsement[];
  proficiency: string[];
  aeronauticalExperience: string[];
};

export const privileges: Privilege[] = [
  {
    name: "Student Pilot Certificate",
    eligibility: [
      "Be 14 for glider or balloon, otherwise 16 years of age.",
      "Speak, read, and write English",
    ],
    endorsements: [endorsementFor("A.14")],
    proficiency: [],
    aeronauticalExperience: [],
  },

  {
    name: "Student Pilot - Initial Solo",
    eligibility: [
      "Hold a student pilot certificate",
      "Hold at least a third-class medical certificate",
    ],
    endorsements: [
      endorsementFor("A.3"),
      endorsementFor("A.4"),
      endorsementFor("A.6"),
      endorsementFor("A.7"),
    ],
    proficiency: [
      "Pre-solo knowledge test per § 61.87(b)",
      'The "15 things": Pre-solo flight training per § 61.87(d)',
    ],
    aeronauticalExperience: [],
  },

  {
    name: "Student Pilot - Solo at Night",
    eligibility: ["Hold a current 90-day solo endorsement (A.6 or A.7)"],
    endorsements: [endorsementFor("A.5")],
    proficiency: ["Flight training at night per § 61.87(o)"],
    aeronauticalExperience: [],
  },

  {
    name: "Student Pilot - Repeated Solo Flights within 25nm",
    eligibility: ["Hold a current 90-day solo endorsement (A.6 or A.7)"],
    endorsements: [endorsementFor("A.8")],
    proficiency: [
      "Flight training per § 61.93(b)(1) for the specific airport including takeoffs, landings, and flight in the traffic pattern.",
    ],
    aeronauticalExperience: [],
  },

  {
    name: "Student Pilot - Solo Cross-Country",
    eligibility: ["Hold a current 90-day solo endorsement (A.6 or A.7)"],
    endorsements: [
      endorsementFor("A.9", "XC training requirements completed"),
      endorsementFor("A.10", "Needed for the specific XC flight"),
    ],
    proficiency: [
      'The "12 things": Flight training per § 61.93(e)',
      "Instructor has determined the student's flight planning is correct, flight can be completed under VFR, and the student is proficient to conduct the flight.",
    ],
    aeronauticalExperience: [],
  },

  {
    name: "Student Pilot - Repeated Solo Cross-Country Flight within 50nm",
    eligibility: [
      "Hold a current 90-day solo endorsement (A.6 or A.7)",
      "Completed cross-country training per § 61.93(e) and have received the A.9 endorsement",
    ],
    endorsements: [endorsementFor("A.11")],
    proficiency: [
      "Flight training per § 61.95(a) for the specific airport including takeoffs, landings, and flight in the traffic pattern.",
    ],
    aeronauticalExperience: [],
  },

  {
    name: "Student Pilot - Solo Flight in Class B Airspace",
    eligibility: ["Hold a current 90-day solo endorsement (A.6 or A.7)"],
    endorsements: [endorsementFor("A.12")],
    proficiency: [
      "Ground and flight training per § 61.95 on the operations in the specific Class B airspace the student will be flying in.",
    ],
    aeronauticalExperience: [],
  },
  {
    name: "Student Pilot - Solo Flight to or from a Class B Airport",
    eligibility: ["Hold a current 90-day solo endorsement (A.6 or A.7)"],
    endorsements: [endorsementFor("A.13")],
    proficiency: [
      "Flight training per § 61.95(a) for the specific airport including takeoffs, landings, and flight in the traffic pattern.",
    ],
    aeronauticalExperience: [],
  },
];

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

const EndorsementCalculator = ({}: EndorsementCalculatorProps) => {
  const [selectedPrivilegeName, setSelectedPrivilegeName] = useState(
    privileges[privileges.length - 1].name
  );

  const selectedPrivilege = useMemo(() => {
    return privileges.find(
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
        {privileges.map(({ name }) => (
          <option key={name} id="name">
            {name}
          </option>
        ))}
      </select>

      <PrivilegeDescription privilege={selectedPrivilege!} />
    </div>
  );
};

export default EndorsementCalculator;
