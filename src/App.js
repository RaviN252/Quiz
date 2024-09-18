import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./Components/Admin";
import Game from "./Components/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Land from "./Components/Land";
import Result from "./Components/Result";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Land />}></Route>
          <Route path="/Game" element={<Game />}></Route>
          <Route path="/Admin" element={<Admin />}></Route>
          <Route path="/Result" element={<Result />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
