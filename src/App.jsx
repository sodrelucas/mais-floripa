import { BrowserRouter, Route, Routes } from "react-router-dom";

import styles from "./App.module.css";

import Home from "./pages/Home/Home";
import Praias from "./pages/praias/praias";
import Trilhas from "./pages/trilhas/Trilhas";
import PontosTuristicos from "./pages/p-turisticos/PontosTuristicos";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="praias" element={<Praias />} />
          <Route path="trilhas" element={<Trilhas />} />
          <Route path="pontos-turisticos" element={<PontosTuristicos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
