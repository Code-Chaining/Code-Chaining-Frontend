import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/header/Header";
import PublicRoomList from "./components/PublicRoomList";
import RoomSidebar from "./components/RoomSidebar";
import CreateRoom from "./components/CreateRoom";
import RoomDetails from "./components/RoomDetails";
import LoginPage from "./components/LoginPage";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <AuthProvider>
        <PageLayout>
          <AppContainer>
            <Routes>
              <Route path="/" element={<PublicRoomList />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/create-room" element={<CreateRoom />} />
              <Route path="/room/:roomId" element={<RoomDetails />} />
            </Routes>
          </AppContainer>
        </PageLayout>
      </AuthProvider>
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
