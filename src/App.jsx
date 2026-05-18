import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Students from "./pages/Students";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>

      <div className="flex bbg-[#f5f7fb] dark:bg-slate-900 min-h-screen">

        <Sidebar />

        <main className="flex-1 p-4 md:p-8">

          <Navbar />

          <div className="mt-8">

            <Routes>

              <Route path="/" element={<Home />} />

              <Route
                path="/agenda"
                element={<Agenda />}
              />

              <Route
                path="/students"
                element={<Students />}
              />

              <Route
                path="/payments"
                element={<Payments />}
              />

              <Route
                path="/reports"
                element={<Reports />}
              />

            </Routes>

          </div>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;