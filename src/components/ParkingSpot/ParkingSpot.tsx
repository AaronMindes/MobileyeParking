import React, { useEffect } from 'react'
import { allocateSpot, fetchSpots } from '../../services/service';
import { useState } from 'react';
import Spot from '../Spot/Spot';
import { ISpotParking } from './ISpotParking';
import "./parkingSpot.scss"
import { ISpot } from '../Spot/ISpot';

const ParkingSpot = () => {

    const [spots, setSpots] = useState<ISpot[]>([]);

    const getData = async () => {
        try {
            const data = await fetchSpots();
            setSpots(data);
            console.log(spots)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        getData();
        // const interval = setInterval(getData, 1000);
    }, []);

    const handleSpot = (spot) => {
        allocateSpot(spot.pk,spot);
    }

    return (
        <div className='parking-spot-container'>

            {spots && spots.map(spot => (
                <div key={spot.pk} className='spot' onClick={() => handleSpot(spot)}>
                    <Spot spot={spot} />
                </div>
            ))}
            </div>
    )
}

export default ParkingSpot