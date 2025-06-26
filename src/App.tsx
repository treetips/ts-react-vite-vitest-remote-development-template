import "@src/App.css";
import { ErrorPage } from "@src/pages/ErrorPage/container";
import { HomePage } from "@src/pages/HomePage/container";
import { Route, Routes } from "react-router-dom";

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
