import "./App.css";
import "./Navbar.css";
import "./Footer.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BikeServiceBooking from "./forms/BikeServiceBooking";
import CarConsultation from "./forms/CarConsultation";
import CarServiceBooking from "./forms/CarServiceBooking";
import EcuTuning from "./forms/EcuTuning";
import Racing from "./forms/Racing";
import BikeConsultation from "./forms/BikeConsultation";
import Escalation from "./forms/EscalationForm";
import BusinessColobration from "./forms/NewForms/BusinessCollabration";
import { Navbar } from "./forms/Navbar";
import ApplyJob from "./forms/NewForms/ApplyJob";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/BikeConsultation" element={<BikeConsultation />} />
          <Route path="/BikeServiceBooking" element={<BikeServiceBooking />} />
          <Route path="/CarConsultation" element={<CarConsultation />} />
          <Route path="/CarServiceBooking" element={<CarServiceBooking />} />
          <Route path="/EcuTuning" element={<EcuTuning />} />
          <Route path="/Racing" element={<Racing />} />
          <Route path="/Contact" element={<Escalation />} />
          <Route path="/Applyjob" element={<ApplyJob />} />
          <Route
            path="/BusinessCollabration"
            element={<BusinessColobration />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
