import logo from './logo.svg';
import './App.css';
import { Route, Routes} from "react-router";
import { BrowserRouter}from "react-router-dom";
import RoomMate from './components/RoomMate';
import ShowData from './components/ShowData';

function App() {
  return (
    <div className="App">
    <h1>Room Mate</h1>
    <BrowserRouter>
    <Routes>
      <Route path="/add"  element={<RoomMate/>}></Route>
      <Route path="/" element={<ShowData />}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
