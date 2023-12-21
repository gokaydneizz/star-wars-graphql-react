import { Link, Route, Routes } from "react-router-dom";
import { Characters } from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import Squads from "./pages/Squads";

function App() {
  return (
    <div className="w-[1200px] my-7 mx-auto">
      <div className="flex justify-between w-full align-middle">
        <h1 className="text-center text-2xl font-extrabold">Star Wars Chars</h1>
        <Link className="text-2xl font-semibold" to="/squads">
          Squad
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route exact path="/squads" element={<Squads />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
