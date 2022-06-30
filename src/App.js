import { Routes, Route } from "react-router-dom";
import Home from './commponents/pages/Home/Home';
import Header from './commponents/partials/header/Header';
import Slider from '././Slider/src/Slider'
// import MinSlider from "./commponents/pages/slider/MinSlider";

function App() {
  return (
    <div>
      <Header />
      <Slider />
        <Routes>
          {/* <Route path="" element ={<MinSlider />} /> */}
          <Route path="" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
