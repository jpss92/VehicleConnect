import './VehicleSearch.scss';
import Button from '../../Components/Button/Button';

function VehicleSearch() {

    return (
        <>
            <form className='vehicle__search'>
                <div className='vehicle__search--field'>
                    <label className='vehicle__search--label'>Year</label>
                    <input className="vehicle__search--input"   type='dropdown' />
                </div>
                <div className='vehicle__search--field'>
                    <label className='vehicle__search--label'>Make</label>
                    <input className="vehicle__search--input" type='search'/>
                </div>
                <div className='vehicle__search--field'>
                    <label className='vehicle__search--label'>Model</label>
                    <input className="vehicle__search--input"/>
                </div>
                
                <Button id="man__search">Search For Vehicle</Button>
            </form>
        
        </>
    );
}

export default VehicleSearch;