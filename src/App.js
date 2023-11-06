import './App.css';
import Header from './Components/Header/Header';
import VehicleSearch from './Pages/VehicleSearch/VehicleSearch';
import VinDecoder from './Pages/VinDecoder/VinDecoder';

function App() {
  return (
    <>
      <Header />
      <VinDecoder />
      <VehicleSearch />
    </>
  );
}

export default App;
