import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Ragister from "./components/Ragister/Ragister";
import RequerAuth from "./components/RequerAuth/RequerAuth";
import Secret from "./components/Secret/Secret";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/secret"
          element={
            <RequerAuth>
              <Secret />
            </RequerAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ragister" element={<Ragister />}></Route>
      </Routes>
    </div>
  );
}

export default App;
