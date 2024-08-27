import "./App.css";
import { BrowserRouter as Router, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Main from "./pages/MainPage/Main";
import MainHeader from "./components/MainHeader";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import About from './pages/AboutPage/About';
import Recruit from './pages/RecruitPage/Recruit';
import Apply from './pages/ApplyPage/Apply';
import ApplySuccess from './pages/ApplyPage/ApplySuccess';
import FAQ from './pages/FAQPage/FAQ';
import Admin from './pages/AdminPage/Admin';
import AdminMain from './pages/AdminPage/AdminMain';
import AdminRecruitPlan from './pages/AdminPage/AdminRecruitPlan';
import AdminRecruit from "./pages/AdminPage/AdminRecruit";
import UserCheck from "./pages/CheckPage/UserCheck";
import UserFinalCheck from "./pages/CheckPage/UserFinalCheck";

import MidPassed from "./pages/CheckPage/MidPassed";
import FinalPassed from "./pages/CheckPage/FinalPassed";
import Failed from "./pages/CheckPage/Failed";
import ScrollToTop from "./components/ScrollToTop";
import PrivateRoute from "./PrivateRoute";

const Layout = () => {
  const location = useLocation();

  // 헤더를 보이게 할 페이지 경로들
  const showHeaderPaths = ["/","/Main", "/main", "/about", "/recruit", "/FAQ",];

  return (
    <div>
      {location.pathname === "/" || location.pathname === "/main" || location.pathname === "/Main"
        ? <MainHeader />
      : showHeaderPaths.includes(location.pathname) 
        ? <Header />
      : null}
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
              <Route path="usercheck" element={<UserCheck />} />
              <Route path="userfinalcheck" element={<UserFinalCheck />} />
              <Route path="recruit" element={<Recruit />} />
              <Route path="apply" element={<Apply />} />
              <Route path="applysuccess" element={<ApplySuccess />} />
              <Route path="midpassed" element={<MidPassed />} />
              <Route path="finalpassed" element={<FinalPassed />} />
              <Route path="failed" element={<Failed />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="admin" element={<Admin />} />
              <Route path="admin/adminmain" element={
                <PrivateRoute>
                <AdminMain />
                </PrivateRoute>
              } 
              />


              <Route path="usercheck/midpassed" element={
                <PrivateRoute>
                <MidPassed />
                </PrivateRoute>
              } 
              />


              <Route path="usercheck/failed" element={
                              <PrivateRoute>
                              <Failed />
                              </PrivateRoute>
                            } 
                            />




              <Route path="admin/adminmain/admin-recruit-plan" element={
                <PrivateRoute>
                <AdminRecruitPlan />
                </PrivateRoute>
              } 
              />

              <Route path="admin/adminmain/admin-recruit" element={
                <PrivateRoute>
                <AdminRecruit />
                </PrivateRoute>
              } 
              />

            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
