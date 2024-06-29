import React, { useState } from "react";
import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import Arrow from "../../../assets/Images/upArrow.png";
import Sidebar from "../../Sidebar/Sidebar";

const NearMissIncidentDetails = () => {
  const data = [
    {
      incident_details: {
        incident_date: "2023-01-10",
        incident_time: "10:20",
        incident_type: "Heart attack",
        description: "After doing intense workout he passed out on the floor",
        immediate_action_taken: "Admitted to the ICU",
        risk_level: "3",
        immediate_cause: "stent angioplasty",
      },
      location: {
        site: "Rampur",
        block: "#rd Phase",
        building: "SEZ",
        equipment: "JCB",
        department: "Mining",
        sub_contractor: "Mr Ahuja",
      },
      root_cause: {
        physical_factor: "history of heart disease in the family",
        human_factor: "obesity",
        system_factor: "none",
      },

      corrective_actions: {
        corrective_actions: "It could be prevented by JCB's driver",
        copy_to: "None",
        reporting_person: "Mr Runwal",
        closing_date: "2024-02-15",
      },
    },
  ];
  const [investigationDetails, setInvestigationDetails] = useState(false);
  const [activeFormTabB, setActiveFormTabB] = useState(true);
  const [activeFormTabC, setActiveFormTabC] = useState(false);
  const [activeFormTabD, setActiveFormTabD] = useState(false);
  const [activeFormTabE, setActiveFormTabE] = useState(false);
  const [activeFormTabF, setActiveFormTabF] = useState(false);
  return (
    <div className="d-flex">
 <div className="sidebar">
<Sidebar/>
      </div>
    <div
      className="m-5 p-5"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width:"85vw" }}
    >
      <Form
        className="mx-5 px-5 text-start"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
        }}
      >
        <h5 className="mb-1 form-header">Near Miss</h5>
        <hr className="pb-4" />
        {data.map((item) => {
          return (
            <>
              <div
                onClick={() => setActiveFormTabB(!activeFormTabB)}
                className="active-tab-form my-2 d-flex justify-content-between"
              >
                <span>Incidence Details</span>
                <img
                  className={activeFormTabE && "tab-icon"}
                  src={Arrow}
                  alt="arrow"
                />
              </div>
              {activeFormTabB && (
                <>
                  <div className="row">
                    <Form.Group
                      className="mb-3 col-6"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="name@example.com"
                        value={item.incident_details.incident_date}
                        disabled
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3 col-6"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Time</Form.Label>
                      <Form.Control
                        type="time"
                        min="09:00"
                        max="18:00"
                        value={item.incident_details.incident_time}
                        disabled
                        placeholder="name@example.com"
                      />
                    </Form.Group>
                  </div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      Incident Type
                    </Form.Label>
                    <Form.Select disabled>
                      <option value="">{item.incident_details.incident_time}</option>
                      <option value="Near Miss">Near Miss</option>
                      <option value="Injury/Illness">Injury/Illness</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">Description</Form.Label>
                    <Form.Control as="textarea" rows={3} 
                    value={item.incident_details.description}
                    disabled/>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      Immediate Action Taken
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} 
                    value={item.incident_details.immediate_action_taken}
                    disabled/>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">Risk Level</Form.Label>
                    <Form.Select disabled>
                      <option value="">{item.incident_details.risk_level}</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      Immediate Cause
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} value={item.incident_details.immediate_cause} disabled />
                  </Form.Group>
                </>
              )}

              <div
                onClick={() => setActiveFormTabC(!activeFormTabC)}
                className="active-tab-form my-2 d-flex justify-content-between"
              >
                <span>Location</span>
                <img
                  className={activeFormTabC && "tab-icon"}
                  src={Arrow}
                  alt="arrow"
                />
              </div>
              {activeFormTabC && (
                <>
                  {" "}
                  <div className="location">
                    <hr />
                    <div className="row">
                      <Form.Group
                        className="mb-3 col-6"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="text-start">Site</Form.Label>
                        <Form.Control type="text" 
                        value={item.location.site}
                        disabled/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 col-6"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="text-start">
                          Block/Area/Unit
                        </Form.Label>
                        <Form.Control type="text" 
                        value={item.location.block}
                        disabled/>
                      </Form.Group>
                    </div>
                    <div className="row">
                      <Form.Group
                        className="mb-3 col-6"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="text-start">Building</Form.Label>
                        <Form.Control type="text" value={item.location.building}
                        disabled/>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 col-6"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="text-start">
                          Equipment
                        </Form.Label>
                        <Form.Control type="text" 
                        value={item.location.equipment}
                        disabled/>
                      </Form.Group>
                    </div>
                  </div>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">Department</Form.Label>
                    <Form.Select className="form-select" disabled>
                      <option value="">{item.location.department}</option>
                      <option value="Mechanical">Mechanical</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Civil">Civil</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      Sub Contractor
                    </Form.Label>
                    <Form.Select className="form-select" disabled>
                      <option value="">{item.location.sub_contractor}</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Form.Select>
                  </Form.Group>
                </>
              )}

              <div
                onClick={() => setActiveFormTabE(!activeFormTabE)}
                className="active-tab-form my-2 d-flex justify-content-between"
              >
                <span>Root Cause</span>
                <img
                  className={activeFormTabE && "tab-icon"}
                  src={Arrow}
                  alt="arrow"
                />
              </div>
              {activeFormTabE && (
                <>
                  <Form.Group
                    className="mb-3 d-flex"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start form-check-label">
                      Root Cause Analysis
                    </Form.Label>
                    <Form.Control
                      className="form-check-input p-1 mx-3"
                      onClick={() =>
                        setInvestigationDetails(!investigationDetails)
                      }
                      type="checkbox"
                    />
                  </Form.Group>
                  {investigationDetails == false && (
                    <div>
                      <div className="row">
                        <Form.Group
                          className="mb-3 col-6"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label className="text-start">
                            Investigation Lead
                          </Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 col-6"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label className="text-start">
                            Investigation Team
                          </Form.Label>
                          <Form.Select>
                            <option value="">Select</option>
                            <option value="Ankit">Ankit</option>
                            <option value="Adil">Adil</option>
                          </Form.Select>
                        </Form.Group>
                      </div>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="text-start">
                          Process Description
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="text-start">
                          Evidences Collected
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="text-start">
                          Why Why Analysis
                        </Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="text-start">
                          Upload Document
                        </Form.Label>
                        <Form.Control type="file" />
                      </Form.Group>
                    </div>
                  )}
                   <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      Physical Factor
                    </Form.Label>
                    <Form.Control type="text" 
                    value={item.root_cause.physical_factor}
                    disabled/>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">Human Factor</Form.Label>
                    <Form.Control type="text" 
                    value={item.root_cause.human_factor}
                    disabled/>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      System Factor
                    </Form.Label>
                    <Form.Control type="text" 
                    value={item.root_cause.system_factor}
                    disabled/>
                  </Form.Group>
                </>
              )}

              <div
                onClick={() => setActiveFormTabF(!activeFormTabF)}
                className="active-tab-form my-2 d-flex justify-content-between"
              >
                <span>Corrective Actions</span>
                <img
                  className={activeFormTabF && "tab-icon"}
                  src={Arrow}
                  alt="arrow"
                />
              </div>
              {activeFormTabF && (
                <>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      Corrective Actions
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} 
                    value={item.corrective_actions.corrective_actions}
                    disabled/>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">
                      Responsible Person
                    </Form.Label>
                    <Form.Select className="form-select" disabled>
                      <option value="">{item.corrective_actions.reporting_person}</option>
                      <option value="Ankit">Ankit</option>
                      <option value="Adil">Adil</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="text-start">Copy to</Form.Label>
                    <Form.Control type="text" value={item.corrective_actions.copy_to}
                    disabled/>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="form-label">Closing Date</Form.Label>
                    <Form.Control type="date" value={item.corrective_actions.closing_date}
                    disabled/>
                  </Form.Group>
                </>
              )}
            </>
          );
        })}

        <button className="my-5 tabs-tags__tag">Submit</button>
      </Form>
    </div>
    </div>
  );
};

export default NearMissIncidentDetails;
