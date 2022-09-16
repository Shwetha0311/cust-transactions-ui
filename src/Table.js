import React from 'react'

const Table = ({ data }) => {
    return <table className='rewards-table'>
        <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Reward</th>
            <th>Month</th>
        </thead>
        <tbody>
            {data.map((item, index) => <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.rewards}</td>
                <td>{item.month}</td>
            </tr>)}
        </tbody>
    </table>
}

export default Table;