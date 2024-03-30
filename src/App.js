import "./App.css";
import Header from "./components/Header";
import PublicRoomList from "./components/PublicRoomList";
import RoomSidebar from "./components/RoomSidebar";

function App() {
  return (
    <>
      <Header />
      <RoomSidebar />
      <PublicRoomList />
    </>
  );
}

export default App;
