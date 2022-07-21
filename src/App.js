import "./App.css";
import SideMenu from "./component/SideMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lessons from "./component/Lessons";
import Goals from "./component/Goals";
import Groups from "./component/Groups";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <SideMenu />
        <Routes>
          <Route path="/Lessons" element={<Lessons></Lessons>} />
          <Route path="/Goals" element={<Goals />} />
          <Route path="/Groups" element={<Groups />} />
        </Routes>
        <Routes>
          <Route path="/" element={<SideMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
