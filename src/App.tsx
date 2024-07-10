import "@src/App.scss";
import { ErrorPage } from "@src/pages/ErrorPage";
import { HomePage } from "@src/pages/HomePage";
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
