import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import IncidentManagement from "./components/IncidentManagement/IncidentManagement";
import UserSignupDetails from "./components/Signup/UserSignupDetails";
import UserLanding from "./components/UserLanding/UserLanding";
import EHSObservationDetails from "./components/EHSObservation/EHSObservationDetails";
import InjuryIncidentDetails from "./components/IncidentManagement/Injury/InjuryIncidentDetails";
import NearMissIncidentDetails from "./components/IncidentManagement/Nearmiss/NearMissIncidentDetails";
import InjuryIllnessTable from "./components/IncidentManagement/Injury/InjuryIllnessTable";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
            {/* <Sidebar/> */}
        <Routes>
          <Route exact path="/signup" element={<UserSignupDetails />} />
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/landingpage" element={<UserLanding />} />
           <Route
            exact
            path="/incidentmanagement"
            element={<IncidentManagement />}
          /> 
          <Route exact path="/od" element={<EHSObservationDetails />} />
          <Route exact path="/iid" element={<InjuryIncidentDetails />} />
          <Route exact path="/nmi" element={<NearMissIncidentDetails />} />
          <Route exact path="/iit" element={<InjuryIllnessTable />} />
          <Route exact path="/dashb" element={<Dashboard />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
