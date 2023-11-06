import './VinDecoder.scss';
import { useState } from 'react';
import Button from '../../Components/Button/Button';

function VinDecoder() {

    const [vehicleData, setVehicleData] = useState({ 

        year: 'N/A',
        make: 'N/A',
        model: 'N/A',
        trim: 'N/A',
        type: 'N/A',
        size: 'N/A',
        made_in: 'N/A',
        fuel_type: 'N/A',
        fuel_capacity: 'N/A',
        city_milage: 'N/A',
        highway_milage: 'N/A',
        engine: 'N/A', 
        engine_size: 'N/A',
        engine_cylinders: 'N/A',
        transmission: 'N/A',
        transmission_type: 'N/A', 
        transmission_speeds: 'N/A',
        drivetrain: 'N/A',
        anti_brake_system: 'N/A',
        curb_weight: 'N/A',
        gross_weight: 'N/A',
        gross_vehicle_weight: 'N/A',
        gross_vehicle_weight_rating: 'N/A',
        maximum_towing: 'N/A',
        overall_height: 'N/A',
        overall_length: 'N/A',
        overall_width: 'N/A', 
        ground_clearance: 'N/A',
        wheelbase_length: 'N/A',
        standard_seating: 'N/A'
    });

    return (
        <>
            <form>
                <label> Vin Decode
                    <input />
                </label>
                <Button> Decode VIN</Button>
            </form>

            {/* <ul>Vehicle Information
                <li id="year"></li>
                <li id="make"></li>
                <li id="model"></li>
                <li id="trim"></li>
                <li id="type"></li>
                <li id="size"></li>
                <li id="made_in"></li>
                <li id="made_in_city"></li>
                <li id="fuel_type"></li>
                <li id="fuel_capacity"></li>
                <li id="city_milage"></li>
                <li id="highway_milage"></li>
                <li id="engine"></li>
                <li id="engine_size"></li>
                <li id="engine_cylinders"></li>
                <li id="transmission"></li>
                <li id="transmission_type"></li>
                <li id="transmission_speeds"></li>
                <li id="drivetrian"></li>
                <li id="anti_brake_system"></li>
                <li id="curb_weight"></li>
                <li id="gross_weight"></li>
                <li id="gorss_vehicle_weight_rating"></li>
                <li id="overall_height"></li>
                <li id="overall_length"></li>
                <li id="overall_width"></li>
                <li id="wheelbase_length"></li>
                <li id="standard_seating"></li>
                <li id="maximum_towing"></li>
                <li id="ground_clearance"></li>
                
            </ul> */}
        </>
    );
}

export default VinDecoder;