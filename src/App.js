import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { RoomProvider } from "./contexts/RoomContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import Header from "./components/header/Header";
import RoomSidebar from "./components/RoomSidebar";
import CreateRoom from "./components/CreateRoom";
import RoomDetails from "./components/RoomDetails";
import LoginPage from "./components/LoginPage";
import styled from "styled-components";
import CombineRoomList from "./components/CombineRoomList";

function App() {
  return (
    <Router>
      <RoomProvider>
        <AuthProvider>
          <PageLayout>
            <AppContainer>
              <LoadingProvider>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />

                  <Route path="/" element={<CombineRoomList />} />
                  <Route element={<CommonLayout />}>
                    <Route path="/create-room" element={<CreateRoom />} />
                    <Route path="/room/:roomId" element={<RoomDetails />} />
                  </Route>
                </Routes>
              </LoadingProvider>
            </AppContainer>
          </PageLayout>
        </AuthProvider>
      </RoomProvider>
    </Router>
  );
}

function CommonLayout() {
  return (
    <>
      <RoomSidebar />
      <Outlet />
    </>
  );
}

function PageLayout({ children }) {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}
      {children}
    </>
  );
}
export default App;

const AppContainer = styled.div`
  height: 90vh;
  overflow: scroll;
`;
