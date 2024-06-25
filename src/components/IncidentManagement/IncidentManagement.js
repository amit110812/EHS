import React, { useState } from "react";
import "./IncidentManagement.css";
import EHSObservation from "../EHSObservation/EHSObservation";
import InjuryIncident from "./Injury/InjuryIncident";
import NearMissIncident from "./Nearmiss/NearMissIncident";
import Sidebar from "../Sidebar/Sidebar";
const IncidentManagement = () => {
  const [activeTab, setActiveTab] = useState("A");
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <div className="d-flex">
      <div className="sidebar">
<Sidebar/>
      </div>
      <div className="main-incident-section">
      <div className="tabs">
        <div className="tabs-tags my-5">
          <span
            className={
              activeTab !== "A" ? "tabs-tags__tag mx-2" : "active-tab mx-2"
            }
            onClick={() => setActiveTab("A")}
          >
            Ehs Observation
          </span>
          <span
            className={
              activeTab !== "B" ? "tabs-tags__tag mx-2" : "active-tab mx-2"
            }
            onClick={() => setActiveTab("B")}
          >
            Injury/Illness Incident
          </span>
          <span
            className={
              activeTab !== "C" ? "tabs-tags__tag mx-2" : "active-tab mx-2"
            }
            onClick={() => setActiveTab("C")}
          >
            Near Miss
          </span>
        </div>
      </div>
      {activeTab == "A" && <div className="mx-5 px-5"><EHSObservation /></div>}
      {activeTab == "B" && <div className="mx-5 px-5"> <InjuryIncident /></div>}
      {activeTab == "C" && <div className="mx-5 px-5"><NearMissIncident/></div>}
  
      </div>
       </div>
  );
};

export default IncidentManagement;
