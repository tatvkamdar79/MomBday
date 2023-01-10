import "./App.css";
import ImageSlider from "./Components/ImageSlider";
import { SliderData } from "./Components/SliderData";
import Intro from './Components/Intro'

function App() {
  return (
    <div className="bg-black">
      <Intro />
      <ImageSlider slides={SliderData} />
    </div>
  );
}

export default App;
