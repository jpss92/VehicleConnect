import './VehicleSearch.scss';
import Button from '../../Components/Button/Button';

function VehicleSearch() {

    return (
        <>
            <form className='vehicle__search'>
                <label className='vehicle__search--label'> Year
                    <input />
                </label>
                <label className='vehicle__search--label'> Make
                    <input />
                </label>
                <label className='vehicle__search--label'> Model
                    <input />
                </label>
                <Button>Search For Vehicle</Button>
            </form>
        
        </>
    );
}

export default VehicleSearch;