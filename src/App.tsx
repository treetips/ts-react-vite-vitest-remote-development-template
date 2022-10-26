import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
