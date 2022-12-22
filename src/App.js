import Cards from "./components/Cards";
import Header from "./components/Header";
import { Timer } from "./components/Timer";
import ScoreKeeper from "./components/ScoreKeeper";

function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <ScoreKeeper />
      <Cards />
    </div>
  );
}

export default App;
