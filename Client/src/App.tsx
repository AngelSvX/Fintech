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

function App() {

  const Layout: React.FC<ReactNode> = ({children}) => {
    const location = useLocation()
    const noNavRoutes = ["/login"]

    return(
      <div>
        {!noNavRoutes.includes(location.pathname) && <NavBar/>}
        {children}
      </div>
    )

  }

  return(
    <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
