import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "react-multi-carousel/lib/styles.css";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import NavBar from "./layout/NavBar";
import Events from "./pages/Events";
import LoginPage from "./pages/LoginPage";
import { ReactNode } from "react";
import Projects from "./pages/Projects";
import Trainings from "./pages/Trainings";
import { ApiProvider } from "./context/ApiContext";
import Dashboard from "./pages/DashboardMain";

function App() {
  const Layout: React.FC<ReactNode> = ({ children }) => {
    const location = useLocation();
    const noNavRoutes = ["/login", "*"];

    return (
      <div>
        {!noNavRoutes.includes(location.pathname) && <NavBar />}
        {children}
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route
          path="/"
          element={
            <ApiProvider>
              <MainPage />
            </ApiProvider>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/posts"
          element={
            <ApiProvider>
              <Posts />
            </ApiProvider>
          }
        />
        <Route
          path="/events"
          element={
            <ApiProvider>
              <Events />
            </ApiProvider>
          }
        />
        <Route
          path="/projects"
          element={
            <ApiProvider>
              <Projects />
            </ApiProvider>
          }
        />
        <Route
          path="/trainings"
          element={
            <ApiProvider>
              <Trainings />
            </ApiProvider>
          }
        />
        {/* <Route
          path="/dashboard"
          element={
            <Dashboard/>
          }
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
