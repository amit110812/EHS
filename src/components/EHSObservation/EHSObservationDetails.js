import { useState } from "react";
import { Form, DropdownButton, Dropdown } from "react-bootstrap";
import Arrow from "../../assets/Images/upArrow.png";

const EHSObservationDetails = () => {
  const data = [
    {
      about_incidence: {
        date: "2022-04-28",
        time: "10:20",
        about_incidence: "It is reported on Saturday's Afternoon",
        activities_involved: "Movement of Jcb's on the floor",
        risk_level: "3",
        repeated_incident: "No",
        type_operation: "Mining",
        department_involved: "Operations",
        contractor_involved: "Mr. Rakesh",
      },
      location: {
        site: "Rampur",
        block: "#rd Phase",
        building: "SEZ",
        equipment: "JCB",
        department: "Mining",
        sub_contractor: "Mr Ahuja",
      },
      corrective_actions: {
        corrective_actions: "It could be prevented by JCB's driver",
        copy_to: "None",
        reporting_person: "Mr Runwal",
        closing_date: "2024-02-15",
      },
    },
  ];

  const [activeFormTabA, setActiveFormTabA] = useState(true);
  const [activeFormTabC, setActiveFormTabC] = useState(true);
  const [activeFormTabF, setActiveFormTabF] = useState(true);
  return (
    <div
      className="m-5 p-5"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <Form
        className="mx-5 px-5 text-start"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
        }}
      >
        <h5 className="mb-1 form-header">EHS Observation Input Field</h5>
        <hr className="pb-4" />

        {
            data.map((item)=>{
                return(
                    <>
                    <div
                      onClick={() => setActiveFormTabA(!activeFormTabA)}
                      className="tabs-form my-2 d-flex justify-content-between"
                    >
                      <span>About Incidence</span>
                      <span>
                        <img
                          className={activeFormTabA && "tab-icon"}
                          src={Arrow}
                          alt="arrow"
                        />
                      </span>
                    </div>
                    {activeFormTabA && (
                      <>
                        {" "}
                        <div className="row">
                          <Form.Group
                            className="mb-3 col-6"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="name@example.com"
                              value={item.about_incidence.date}
                              disabled
                              />
                          </Form.Group>
                          <Form.Group
                            className="mb-3  col-6 "
                            controlId="exampleForm.ControlInput1"
                            >
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                              className="form-select"
                              type="time"
                              min="09:00"
                              max="18:00"
                              value={item.about_incidence.time}
                              disabled
                            />
                          </Form.Group>
                        </div>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label className="text-start">
                            About Incidence
                          </Form.Label>
                          <Form.Control as="textarea" rows={3} 
                          className="form-select"
                          value={item.about_incidence.about_incidence} disabled/>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label className="text-start">
                            Activities Involved
                          </Form.Label>
                          <Form.Control as="textarea" rows={3}
                          value={item.about_incidence.activities_involved} disabled
                          />
                        </Form.Group>
                        <div className="row">
                          <Form.Group
                            className="mb-3 col-6"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label className="text-start">Risk Level</Form.Label>
                            <Form.Select value={item.about_incidence.risk_level} disabled>
                            <option value="">Select</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group
                            className="mb-3 col-6"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label className="text-start">
                              Repeated Incident
                            </Form.Label>
                            <Form.Select value={item.about_incidence.repeated_incident} disabled>
                              <option value="">Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                        <div className="row">
                          <Form.Group
                            className="mb-3 col-6"
                            controlId="exampleForm.ControlTextarea12"
                          >
                            <Form.Label className="text-start">
                              Type of Observation
                            </Form.Label>
                            <Form.Select value={item.about_incidence.type_operation} disabled>                              
                            <option value="">{item.about_incidence.type_operation}</option>
                              <option value="UA">UA</option>
                              <option value="UC">UC</option>
                            </Form.Select>
                          </Form.Group>
                          <Form.Group
                            className="mb-3 col-6"
                            controlId="exampleForm.ControlTextarea16"
                          >
                            <Form.Label className="text-start">
                              Department Involved
                            </Form.Label>
                            <Form.Select value={item.about_incidence.department_involved} disabled>
                              <option value="">{item.about_incidence.department_involved}</option>
                              <option value="UA">Mechanical</option>
                              <option value="UC">Civil</option>
                              <option value="UC">Electrical</option>
                            </Form.Select>
                          </Form.Group>
                        </div>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label className="text-start">
                            Contractor Involved
                          </Form.Label>
                          <Form.Select value={item.about_incidence.contractor_involved} disabled>
                            <option value="">{item.about_incidence.contractor_involved}</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                        </Form.Group>
                      </>
                    )}
      
                    {/* location */}
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
                              <Form.Control type="text" value={item.location.site} disabled/>
                            </Form.Group>
                            <Form.Group
                              className="mb-3 col-6"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label className="text-start">
                                Block/Area/Unit
                              </Form.Label>
                              <Form.Control type="text" value={item.location.block} disabled />
                            </Form.Group>
                          </div>
                          <div className="row">
                            <Form.Group
                              className="mb-3 col-6"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label className="text-start">Building</Form.Label>
                              <Form.Control type="text" value={item.location.building} disabled/>
                            </Form.Group>
                            <Form.Group
                              className="mb-3 col-6"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label className="text-start">
                                Equipment
                              </Form.Label>
                              <Form.Control type="text" value={item.location.equipment} disabled/>
                            </Form.Group>
                          </div>
                        </div>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label className="text-start">Department</Form.Label>
                          <Form.Select className="form-select" value={item.location.department} disabled>
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
                          <Form.Control as="textarea" rows={3} value={item.corrective_actions.corrective_actions} disabled/>
                        </Form.Group>
      
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label className="text-start">Copy to</Form.Label>
                          <Form.Control type="text" value={item.corrective_actions.copy_to} disabled/>
                        </Form.Group>
                        <div className="row">
                          <Form.Group
                            className="mb-3 col-6"
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
                            className="mb-3 col-6"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label className="form-label">
                              Closing Date
                            </Form.Label>
                            <Form.Control type="date" value={item.corrective_actions.closing_date} disabled/>
                          </Form.Group>
                        </div>
                      </>
                    )}
                  </>
                )
            })
        }

           

        <button className="my-5 tabs-tags__tag">Submit</button>
      </Form>
    </div>
  );
};

export default EHSObservationDetails;
