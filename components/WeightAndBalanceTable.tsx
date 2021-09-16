import { ChangeEventHandler, ReactNode, useState } from 'react'
import styled from 'styled-components'

export type Station = {
    label: string
    weightLbsDefault: number
    armInches: number
    editable?: boolean
}

export type WeightAndBalanceProps = {
    airplaneEmptyWeightLbs: number
    airplaneEmptyCgInches: number
    stations: Station[]
}

const Table = styled.table`
    flex: 1;
    border: 1px solid #eee;
    border-radius: 0.25em;
    padding-top: 0px;
    padding: 1em;
    width: 100%;

    th {
        text-align: left;
    }
`

const WeightAndBalance = ({
    airplaneEmptyWeightLbs,
    airplaneEmptyCgInches,
    stations,
}: WeightAndBalanceProps) => {
    const [weights, setWeights] = useState(
        stations.map(({ weightLbsDefault }) => weightLbsDefault.toString())
    )
    const updateWeight = (updatedIndex: number) => (newWeight: string) =>
        setWeights((currentWeights) =>
            currentWeights.map((weight, index) => {
                if (updatedIndex === index) {
                    return newWeight
                }
                return weight
            })
        )

    const onChange =
        (index: number): ChangeEventHandler<HTMLInputElement> =>
        (e) => {
            const updater = updateWeight(index)
            updater(e.target.value)
        }

    const intOrZero = (valueString: string) => {
        const value = parseInt(valueString)
        if (!isNaN(value) && isFinite(value)) {
            return value
        }
        return 0
    }

    const totalWeight = weights.reduce(
        (total, weight) => total + intOrZero(weight),
        airplaneEmptyWeightLbs
    )

    const emptyMoment = (airplaneEmptyCgInches * airplaneEmptyWeightLbs) / 1000

    const netMoment = stations.reduce(
        (total, { armInches }, index) =>
            total + (armInches * intOrZero(weights[index])) / 1000,
        emptyMoment
    )

    return (
        <Table>
            <thead>
                <tr>
                    <th>Station</th>
                    <th>Weight (lbs.)</th>
                    <th>Arm (in.)</th>
                    <th>Moment (lbs.-inches / 1000)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Aircraft Empty Weight</td>
                    <td>{airplaneEmptyWeightLbs.toFixed(2)}</td>
                    <td>{airplaneEmptyCgInches.toFixed(2)}</td>
                    <td>{emptyMoment.toFixed(2)}</td>
                </tr>
                {stations.map(
                    (
                        { label, weightLbsDefault, armInches, editable = true },
                        index
                    ) => (
                        <tr key={index}>
                            <td>{label}</td>
                            <td>
                                {editable && (
                                    <input
                                        value={weights[index]}
                                        onChange={onChange(index)}
                                    />
                                )}
                                {!editable && weights[index].toString()}
                            </td>
                            <td>{armInches.toFixed(2)}</td>
                            <td>
                                {(
                                    (weightLbsDefault * armInches) /
                                    1000
                                ).toFixed(2)}
                            </td>
                        </tr>
                    )
                )}
                <tr>
                    <th>Total Loading</th>
                    <th>{totalWeight.toFixed(2)}</th>
                    <th>{((netMoment * 1000) / totalWeight).toFixed(2)}</th>
                    <th>{netMoment.toFixed(2)}</th>
                </tr>
            </tbody>
        </Table>
    )
}

export default WeightAndBalance
