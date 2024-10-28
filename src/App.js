import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ReelPage from "./pages/reel/reelPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/reel" element={<ReelPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
