import { Route, Routes } from "react-router";
import Home from "./views/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
}

export default App;
