import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { HomePage } from "./pages/Home/container";
import { ListPage } from "./pages/List/container";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </div>
  );
}

export default App;
