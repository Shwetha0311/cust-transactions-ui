import React, { useEffect, useState } from 'react';
import Table from './Table';

const CustomerRewardsList = () => {
    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        getRewards();
    }, [])

    const getRewards = () => {
        fetch('http://localhost:3013/cust_rewards')
            .then(res => res.json())
            .then((response) => {
                setRewards(response);
            })
    }

    return <Table data={rewards} />
}

export default CustomerRewardsList;
