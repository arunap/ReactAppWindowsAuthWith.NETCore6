import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicMenuExample from './Components/BasicMenu';
import { ForecastItemList } from './Components/ForecastItemList';



function App() {
  return (
    <>
      <BasicMenuExample />
      <ForecastItemList />
    </>
  );
}

export default App;
