import { ChangeEventHandler, useState } from "react";
import style from "./WeightAndBalanceTable.module.css";

export type Station = {
  label: string;
  editable?: boolean;
  weightLbsDefault: number;
  unitsScalar?: number;
  units: string;
  defaultArmInches: number;
};

export type WeightAndBalanceConfig = {
  stations: Station[];
};

export type WeightAndBalanceInputs = {
  weights: string[];
  arms: string[];
};

export type WeightAndBalanceProps = {
  config: WeightAndBalanceConfig;
};

const numberOrZero = (valueString: string) => {
  const value = parseFloat(valueString);
  if (!isNaN(value) && isFinite(value)) {
    return value;
  }
  return 0;
};

export const computeTotalWeightAndBalance = (
  config: WeightAndBalanceConfig,
  inputs: WeightAndBalanceInputs
) => {
  const weights = inputs.weights.map(
    (weight, index) =>
      numberOrZero(weight) * (config.stations[index].unitsScalar || 1)
  );

  const arms = inputs.arms.map((arm) => numberOrZero(arm));

  const totalWeight = weights.reduce((total, weight) => total + weight, 0);

  const stationMoments = config.stations.map(
    (_, index) => arms[index] * weights[index]
  );

  const netMoment = stationMoments.reduce((total, moment) => total + moment, 0);

  const netArm = netMoment / totalWeight;

  return { totalWeight, netArm, netMoment: netMoment / 1000, stationMoments };
};

const WeightAndBalance = ({ config }: WeightAndBalanceProps) => {
  const [inputs, setInputs] = useState<WeightAndBalanceInputs>(() => ({
    weights: config.stations.map(({ weightLbsDefault }) =>
      weightLbsDefault.toString()
    ),
    arms: config.stations.map(({ defaultArmInches }) =>
      defaultArmInches.toString()
    ),
  }));

  const updateWeight = (updatedIndex: number) => (newWeight: string) =>
    setInputs((input) => ({
      ...input,
      weights: input.weights.map((weight, index) =>
        index === updatedIndex ? newWeight : weight
      ),
    }));

  const updateArm = (updatedIndex: number) => (newArm: string) =>
    setInputs((input) => ({
      ...input,
      arms: input.arms.map((arm, index) =>
        index === updatedIndex ? newArm : arm
      ),
    }));

  const onChangeArm =
    (index: number): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const updater = updateArm(index);
      updater(e.target.value);
    };

  const onChangeWeight =
    (index: number): ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      const updater = updateWeight(index);
      updater(e.target.value);
    };

  const { totalWeight, netArm, netMoment, stationMoments } =
    computeTotalWeightAndBalance(config, inputs);

  return (
    <table className={style.wbTable}>
      <thead>
        <tr>
          <th>Station</th>
          <th>Weight</th>
          <th>Arm (in.)</th>
          <th>Moment (lbs.-inches / 1000)</th>
        </tr>
      </thead>
      <tbody>
        {config.stations.map(({ label, editable = true, units }, index) => {
          const arm = inputs.arms[index];
          const weight = inputs.weights[index];
          const armInches = stationMoments[index] / 1000;

          return (
            <tr key={index}>
              <td>{label}</td>
              <td>
                {editable && (
                  <input
                    value={weight}
                    onChange={onChangeWeight(index)}
                    style={{ width: "100px" }}
                  />
                )}
                {!editable && weight} {units}
              </td>
              <td>
                {editable && (
                  <input
                    value={arm}
                    onChange={onChangeArm(index)}
                    style={{ width: "85px" }}
                  />
                )}
                {!editable && arm} in.
              </td>
              <td>{armInches.toFixed(3)}</td>
            </tr>
          );
        })}
        <tr>
          <th>Total Loading</th>
          <th>{totalWeight.toFixed(2)} lbs</th>
          <th>{netArm.toFixed(2)}</th>
          <th>{netMoment.toFixed(2)}</th>
        </tr>
      </tbody>
    </table>
  );
};

export default WeightAndBalance;
