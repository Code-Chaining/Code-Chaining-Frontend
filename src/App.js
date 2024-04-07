import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { RoomProvider } from "./contexts/RoomContext";
import Header from "./components/header/Header";
import RoomSidebar from "./components/RoomSidebar";
import CreateRoom from "./components/CreateRoom";
import RoomDetails from "./components/RoomDetails";
import LoginPage from "./components/LoginPage";
import styled from "styled-components";
import CombinedRoomList from "./components/CombinedRoomList";

function App() {
  return (
    <Router>
      <RoomProvider>
        <AuthProvider>
          <PageLayout>
            <AppContainer>
              <Routes>
                <Route path="/" element={<CombinedRoomList />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create-room" element={<CreateRoom />} />
                <Route path="/room/:roomId" element={<RoomDetails />} />
              </Routes>
            </AppContainer>
          </PageLayout>
        </AuthProvider>
      </RoomProvider>
    </Router>
  );
}

function PageLayout({ children }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}
      {location.pathname !== "/login" && <RoomSidebar />}
      {children}
    </>
  );
}
export default App;

const AppContainer = styled.div`
  height: 90vh;
  overflow: scroll;
`;
