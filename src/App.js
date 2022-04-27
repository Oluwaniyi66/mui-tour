
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyTour from "./pages/MyTour";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      
      <NavBar />
      <Routes>

        <Route path="/" element={<Home/>}  />
        <Route path="/:id" element={<MyTour/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
