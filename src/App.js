import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./style/App.scss";
import NavBar from "./layout/NavBar";
import Hero from "./layout/Hero";
import { Route, Routes } from "react-router-dom";
import TopBar from "./layout/TopBar";
import Footer from "./layout/Footer";
import { BrowserRouter } from "react-router-dom";
import DailyCalender from "./pages/DailyCalender";
import WeeklyCalender from "./pages/WeeklyCalender";
import MonthlyCanlender from "./pages/MonthlyCalender";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Hero />
          <section className="calender-section">
            <div className="container">
              <TopBar />
              <Routes>
                <Route path="/" element={<DailyCalender />} />
                <Route path="/weeklycalender" element={<WeeklyCalender />} />
                <Route path="/monthlycalender" element={<MonthlyCanlender />} />
              </Routes>
            </div>
          </section>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
