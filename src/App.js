import "./App.css";
import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Main from "./pages/MainPage/Main";
import MainHeader from "./components/MainHeader";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import About from "./pages/AboutPage/About";
import Recruit from "./pages/RecruitPage/Recruit";
import Apply from "./pages/ApplyPage/Apply";
import ApplySuccess from "./pages/ApplyPage/ApplySuccess";
import FAQ from "./pages/FAQPage/FAQ";
import Admin from "./pages/AdminPage/Admin";
import AdminMain from "./pages/AdminPage/AdminMain";
import ScrollToTop from "./components/ScrollToTop";
import AdminRecruit from "./pages/AdminPage/AdminRecruit";

const Layout = () => {
  const location = useLocation();

  // 헤더를 보이게 할 페이지 경로들
  const showHeaderPaths = ["/", "/Main", "/main", "/about", "/recruit", "/FAQ"];

  return (
    <div>
      {location.pathname === "/" ||
      location.pathname === "/main" ||
      location.pathname === "/Main" ? (
        <MainHeader />
      ) : showHeaderPaths.includes(location.pathname) ? (
        <Header />
      ) : null}
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="main" element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="recruit" element={<Recruit />} />
              <Route path="apply" element={<Apply />} />
              <Route path="applysuccess" element={<ApplySuccess />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="admin" element={<Admin />} />
              <Route path="adminmain" element={<AdminMain />} />
              <Route path="adminrecruit" element={<AdminRecruit />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
