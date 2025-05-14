import { useMemo, useState } from "react";
import { Endorsement } from "./endorsements";
import {
  AircraftCategory,
  AircraftClass,
  Level,
  aircraftCategories,
  allAircraftCategories,
  allLevels,
  computeRatingRequirements,
  levelTransitions,
} from "./ratings";

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

const RatingDescription = ({ rating }: { rating: Privilege }) => {
  const {
    name,
    eligibility,
    endorsements,
    proficiency,
    aeronauticalExperience,
  } = rating;

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

type LevelSelectProps = {
  levels: Level[];
  value: Level;
  onChange: (level: Level) => void;
};

const LevelSelect = ({ levels, value, onChange }: LevelSelectProps) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value as Level)}
      value={value}
      style={{ width: "150px", marginBottom: "1rem" }}
    >
      {levels.map((name) => (
        <option key={name} id="name">
          {name}
        </option>
      ))}
    </select>
  );
};

type CategorySelectProps = {
  categories: AircraftCategory[];
  value: AircraftCategory;
  onChange: (level: AircraftCategory) => void;
};

const CategorySelect = ({
  categories,
  value,
  onChange,
}: CategorySelectProps) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value as AircraftCategory)}
      value={value}
      style={{ width: "125px", marginBottom: "1rem" }}
    >
      {categories.map((name) => (
        <option key={name} id="name">
          {name}
        </option>
      ))}
    </select>
  );
};

type ClassSelectProps = {
  classes: AircraftClass[];
  category: AircraftCategory;
  value: AircraftClass;
  onChange: (level: AircraftClass) => void;
};

const ClassSelect = ({
  classes,
  category,
  value,
  onChange,
}: ClassSelectProps) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value as AircraftClass)}
      value={value}
      style={{ width: "150px", marginBottom: "1rem" }}
    >
      {classes.map((name) => (
        <option key={name} id="name">
          {name}
        </option>
      ))}
    </select>
  );
};

const RatingEndorsementCalculator = ({}: EndorsementCalculatorProps) => {
  const [currentLevel, setCurrentLevel] = useState<Level>("Student Pilot");
  const [currentCategory, setCurrentCategory] =
    useState<AircraftCategory>("Airplane");
  const [currentClass, setCurrentClass] =
    useState<AircraftClass>("Single-engine land");

  const [seekingLevel, setSeekingLevel] = useState<Level>("Recreational Pilot");
  const [seekingCategory, setSeekingCategory] =
    useState<AircraftCategory>("Airplane");
  const [seekingClass, setSeekingClass] =
    useState<AircraftClass>("Single-engine land");

  const newLevels = levelTransitions[currentLevel];

  const rating = useMemo(() => {
    const currentCertificate = {
      level: currentLevel,
      category: currentCategory,
      class: currentClass,
    };
    const seekingCertificate = {
      level: seekingLevel,
      category: seekingCategory,
      class: seekingClass,
    };
    return computeRatingRequirements(currentCertificate, seekingCertificate);
  }, [
    currentLevel,
    currentCategory,
    currentClass,
    seekingLevel,
    seekingCategory,
    seekingClass,
  ]);

  return (
    <div>
      <div>
        <h3>Pilot Currently Holds</h3>
        <div>
          <LevelSelect
            levels={allLevels}
            value={currentLevel}
            onChange={setCurrentLevel}
          />
          <CategorySelect
            categories={allAircraftCategories}
            value={currentCategory}
            onChange={setCurrentCategory}
          />
          <ClassSelect
            classes={aircraftCategories[currentCategory]}
            category={currentCategory}
            value={currentClass}
            onChange={setCurrentClass}
          />
        </div>

        <h3>Pilot is Seeking</h3>
        <div>
          <LevelSelect
            levels={newLevels}
            value={seekingLevel}
            onChange={setSeekingLevel}
          />
          <CategorySelect
            categories={["Airplane"]}
            value={seekingCategory}
            onChange={setSeekingCategory}
          />
          <ClassSelect
            classes={["Single-engine land"]}
            category={seekingCategory}
            value={seekingClass}
            onChange={setSeekingClass}
          />
        </div>
      </div>

      <RatingDescription rating={rating!} />
    </div>
  );
};

export default RatingEndorsementCalculator;
