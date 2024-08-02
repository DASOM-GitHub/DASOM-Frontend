import "./App.css";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import { AppProvider } from "./contexts/AppContext";
import Main from "./pages/MainPage/Main";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import About from './pages/AboutPage/About';
import Recruit from './pages/RecruitPage/Recruit';
import Apply from './pages/ApplyPage/Apply';
import ApplySuccess from './pages/ApplyPage/ApplySuccess';
import FAQ from './pages/FAQPage/FAQ';

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="main" element={<Main />} />
              <Route path="about" element={<About />} />
              <Route path="recruit" element={<Recruit />} />
              <Route path="apply" element={<Apply />} />
              <Route path="applysuccess" element={<ApplySuccess />} />
              <Route path="faq" element={<FAQ />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
}

export default App;
