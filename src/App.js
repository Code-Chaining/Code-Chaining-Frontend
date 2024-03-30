import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PublicRoomList from "./components/PublicRoomList";
import RoomSidebar from "./components/RoomSidebar";
import CreateRoom from "./components/CreateRoom";

function App() {
  return (
    <Router>
      <>
        <Header />
        <RoomSidebar />
        <Routes>
          <Route path="/" element={<PublicRoomList />} />
          <Route path="/create-room" element={<CreateRoom />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
