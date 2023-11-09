import VehicleSearch from "../../../Pages/VehicleSearch/VehicleSearch";
import VinDecoder from "../../../Pages/VinDecoder/VinDecoder";
import "./Home.scss";

function Home() {

    return (
        <div className="home">
            <VinDecoder />
            <VehicleSearch />
        </div>
    )
}

export default Home;