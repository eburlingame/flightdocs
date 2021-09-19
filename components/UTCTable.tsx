import { ReactNode, useState } from 'react'
import styled from 'styled-components'
import Layout from './Layout'

export type UTCTableProps = {}

const timezones = [
    {
        name: 'Hawaii Daylight Time',
        offset: -10,
    },
    {
        name: 'Hawaii-Aleutian Daylight Time',
        offset: -9,
    },
    {
        name: 'Alaska Standard Time (Winter)',
        offset: -9,
    },
    {
        name: 'Alaska Daylight Time (Summer)',
        offset: -8,
    },
    {
        name: 'Pacific Standard Time (Winter)',
        offset: -8,
    },
    {
        name: 'Pacific Daylight Time (Summer)',
        offset: -7,
    },
    {
        name: 'Mountain Standard Time (Winter)',
        offset: -7,
    },
    {
        name: 'Mountain Daylight Time (Summer)',
        offset: -6,
    },
    {
        name: 'Central Standard Time (Winter)',
        offset: -6,
    },
    {
        name: 'Central Daylight Time (Summer)',
        offset: -5,
    },
    {
        name: 'Eastern Standard Time (Winter)',
        offset: -5,
    },
    {
        name: 'Eastern Daylight Time (Summer)',
        offset: -4,
    },
]

const range = (start: number, end: number) => {
    var ans = []
    for (let i = start; i < end; i++) {
        ans.push(i)
    }
    return ans
}

const UTCTable = ({}: UTCTableProps) => {
    const [timezoneIndex, setTimezoneIndex] = useState(5)

    const hourOf = (zuluHour: number, offset: number) => {
        const changed = zuluHour - offset

        if (changed < 0) {
            return changed + 24
        }
        if (changed >= 24) {
            return changed - 24
        }
        return changed
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <select
                value={timezoneIndex}
                onChange={(e) => setTimezoneIndex(parseInt(e.target.value))}
                style={{ marginBottom: '1em' }}
            >
                {timezones.map((zone, index) => (
                    <option value={index} key={index}>
                        {zone.name}
                    </option>
                ))}
            </select>

            <h2>
                {timezones[timezoneIndex].name} [UTC -
                {Math.abs(timezones[timezoneIndex].offset)}]
            </h2>

            <table style={{ width: '100%', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Zulu Time</th>
                        <th>Local Time</th>
                        <th>Zulu Time</th>
                        <th>Local Time</th>
                    </tr>
                </thead>
                <tbody>
                    {range(0, 12).map((index) => (
                        <tr key={index}>
                            <td>{index}:00Z</td>
                            <td>
                                {hourOf(index, timezones[timezoneIndex].offset)}
                                :00 Local
                            </td>

                            <td>{index + 12}:00Z</td>
                            <td>
                                {hourOf(
                                    index + 12,
                                    timezones[timezoneIndex].offset
                                )}
                                :00 Local
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UTCTable
